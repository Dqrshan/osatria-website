"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { PublicHeader } from "./PublicLayout";
import { ArrowRight, Code2, Cpu, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface LegalLayoutProps {
    children: ReactNode;
    title: string;
    description: string;
    badge?: string;
    lastUpdated?: string;
}

export function LegalLayout({
    children,
    title,
    description,
    badge = "LEGAL",
    lastUpdated
}: LegalLayoutProps) {
    return (
        <div className="min-h-screen bg-surface flex flex-col font-sans text-ink selection:bg-primary/20 selection:text-ink">
            {/* <PublicHeader
                badgeLabel={badge}
                className="bg-surface/80 border-ink/5"
            /> */}

            {/* Hero Section */}
            <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b-2 border-ink/5">
                {/* Texture Overlay */}
                <div className="texture-grain opacity-20 pointer-events-none absolute inset-0" />

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-surface-lighter)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-surface-lighter)_1px,transparent_1px)] bg-size-[40px_40px] opacity-30" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/50 backdrop-blur-sm px-4 py-1.5 mb-8">
                            <Terminal className="h-4 w-4 text-primary" />
                            <span className="font-mono text-sm font-bold tracking-widest text-primary uppercase">
                                {badge}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-transparent bg-clip-text bg-linear-to-b from-ink to-ink/70 mb-6 max-w-4xl">
                            {title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-ink/70 font-medium max-w-2xl leading-relaxed mb-8">
                            {description}
                        </p>

                        {/* Last Updated */}
                        {lastUpdated && (
                            <div className="flex items-center gap-2 text-ink/50 font-mono text-xs uppercase tracking-widest">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Last Updated: {lastUpdated}
                            </div>
                        )}
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 hidden lg:block opacity-20">
                        <Cpu className="w-40 h-40 text-ink" />
                    </div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02)_50%,transparent_50%)] bg-size-[100%_4px] pointer-events-none z-20" />
            </div>

            {/* Main Content */}
            <main className="grow bg-paper relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="prose prose-lg prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase prose-p:text-ink/80 prose-li:text-ink/80 max-w-none"
                    >
                        {children}
                    </motion.div>
                </div>
            </main>

            {/* Footer Minimal */}
            {/* <footer className="bg-surface border-t border-ink/5 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-ink/50 font-mono text-xs uppercase tracking-widest">
                        © {new Date().getFullYear()} Open Source Atria
                    </div>
                    <div className="flex gap-6">
                        <Link href="/" className="text-ink/50 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest">
                            Home
                        </Link>
                        <Link href="/legal/code-of-conduct" className="text-ink/50 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest">
                            Code of Conduct
                        </Link>
                        <Link href="/legal/terms-of-participation" className="text-ink/50 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest">
                            Terms
                        </Link>
                    </div>
                </div>
            </footer> */}
        </div>
    );
}
