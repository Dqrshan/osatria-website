import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Award, Star } from "lucide-react";

export const Rewards = () => {
    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center uppercase tracking-tight">Rewards</h2>

            <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-surface-light border-2 border-primary shadow-[8px_8px_0_0_var(--color-primary)] hover:translate-y-[-4px] transition-transform rounded-none">
                    <CardHeader>
                        <Gift className="h-12 w-12 text-primary mb-4" />
                        <CardTitle className="text-2xl font-black text-ink">Exclusive Swag</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-ink/70 font-mono text-sm leading-relaxed">
                            T-shirts, stickers, and hoodies for top contributors who merge significant PRs.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-surface-light border-2 border-accent shadow-[8px_8px_0_0_var(--color-accent)] hover:translate-y-[-4px] transition-transform rounded-none">
                    <CardHeader>
                        <Award className="h-12 w-12 text-accent mb-4" />
                        <CardTitle className="text-2xl font-black text-ink">Internship Opportunities</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-ink/70 font-mono text-sm leading-relaxed">
                            Perform exceptionally well and get a chance to interview with our partner companies.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-surface-light border-2 border-secondary shadow-[8px_8px_0_0_var(--color-secondary)] hover:translate-y-[-4px] transition-transform rounded-none">
                    <CardHeader>
                        <Star className="h-12 w-12 text-secondary mb-4" />
                        <CardTitle className="text-2xl font-black text-ink">Certificates</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-ink/70 font-mono text-sm leading-relaxed">
                            Official certificates of contribution for everyone who merges at least one PR.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
