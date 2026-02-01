"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Form } from "@/lib/types/form";
import { getForm } from "@/lib/firebase/forms";
import { checkDuplicateSubmission } from "@/lib/firebase/submissions";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";
import { FormRenderer } from "@/components/form-engine/FormRenderer";
import { AuthGate } from "@/components/form-engine/AuthGate";
import { SubmissionBlocker } from "@/components/form-engine/SubmissionBlocker";
import { Card, CardContent } from "@/components/ui/card";
import { PageLoadingState } from "@/components/ui/page-header";
import { PublicHeader, PublicHero, PublicFooter } from "@/components/ui/public-layout";
import { motion } from "framer-motion";
import { AlertCircle, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FormPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    const [form, setForm] = useState<Form | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Check auth state
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // Check if user has already submitted
                const submitted = await checkDuplicateSubmission(currentUser.email!, slug);
                setHasSubmitted(submitted);
            }
        });

        return () => unsubscribe();
    }, [slug]);

    useEffect(() => {
        // Fetch form
        const fetchForm = async () => {
            try {
                const formData = await getForm(slug);
                if (!formData) {
                    setError("Form not found");
                } else {
                    setForm(formData);
                }
            } catch (err) {
                setError("Error loading form");
            } finally {
                setLoading(false);
            }
        };

        fetchForm();
    }, [slug]);

    if (loading) {
        return <PageLoadingState message="Loading form environment..." />;
    }

    if (error || !form) {
        return (
            <div className="min-h-screen bg-paper flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full"
                >
                    <Card className="border-4 border-ink shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
                        <div className="h-2 bg-red-500 w-full" />
                        <CardContent className="pt-10 pb-10 text-center">
                            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="h-10 w-10 text-red-500" />
                            </div>
                            <h1 className="text-3xl font-black text-ink mb-3 tracking-tighter uppercase">Form Not Found</h1>
                            <p className="text-surface-lighter mb-8 font-medium">
                                {error === "Form not found"
                                    ? "We couldn't find the registration form you're looking for. It might have been deleted or the link is incorrect."
                                    : "There was a technical glitch while trying to retrieve this form. Please try again later."}
                            </p>
                            <div className="flex flex-col gap-3">
                                <Button variant="brutalist" asChild>
                                    <Link href="/">Return to Homepage</Link>
                                </Button>
                                <Button variant="outline" onClick={() => window.location.reload()}>
                                    Retry Access
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <p className="text-center mt-8 text-surface-lighter font-mono text-xs uppercase tracking-widest">
                        ERROR CODE: {error === "Form not found" ? "404_FORM_MISSING" : "500_FETCH_FAILURE"}
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-paper flex flex-col">
            <PublicHeader
                rightContent={
                    <div className="flex items-center gap-4">
                        {user && (
                            <div className="hidden md:flex flex-col items-end">
                                <span className="text-[10px] font-mono text-surface-lighter uppercase leading-none">Logged in as</span>
                                <span className="text-xs font-bold text-ink leading-tight">{user.email}</span>
                            </div>
                        )}
                        <div className="h-8 w-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                            <span className="text-xs font-black text-primary">
                                {user?.email?.[0].toUpperCase() || "A"}
                            </span>
                        </div>
                    </div>
                }
            />

            <PublicHero
                badge="Registration Form"
                title={form.title}
                description={form.description}
            />

            {/* Main Form Content */}
            <main className="py-12 px-4 grow">
                <div className="max-w-3xl mx-auto">
                    {!user ? (
                        <Card>
                            <CardContent className="p-0">
                                <AuthGate formTitle={form.title} />
                            </CardContent>
                        </Card>
                    ) : hasSubmitted ? (
                        <Card>
                            <CardContent className="p-0">
                                <SubmissionBlocker formTitle={form.title} />
                            </CardContent>
                        </Card>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <FormRenderer form={form} user={user} />
                        </motion.div>
                    )}
                </div>
            </main>

            <PublicFooter maxWidth="3xl" />
        </div>
    );
}
