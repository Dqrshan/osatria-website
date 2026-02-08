import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Sponsor {
    name: string;
    website?: string;
    logo?: string;
}

const SPONSORS: Sponsor[] = [
    { name: "Unstop", logo: "/sponsors/Unstop.jpg" }
];

export const Sponsors = () => {
    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto my-10 relative">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-surface-light border border-surface-lighter rounded-none opacity-80" />
            <div className="absolute inset-0 pattern-halftone opacity-10 pointer-events-none" />

            <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-black mb-8 text-center uppercase tracking-tight text-transparent bg-clip-text bg-linear-to-b from-ink to-ink/70">
                    Our <span className="text-secondary">Allies</span>
                </h2>
                <p className="text-center text-ink/70 font-mono max-w-2xl mx-auto mb-16 text-lg">
                    &gt; Empowering the next generation of open source operatives.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
                    {SPONSORS.map((sponsor) => (
                        <div key={sponsor.name} className="group relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="flex flex-col items-center gap-4 cursor-default select-none">
                                <div className="h-28 w-auto border-2 border-surface-lighter bg-surface-light rounded-none flex items-center justify-center shadow-[4px_4px_0_0_var(--color-surface-lighter)] group-hover:shadow-[4px_4px_0_0_var(--color-primary)] transition-shadow duration-300">
                                    {sponsor.logo ? (
                                        <img
                                            src={sponsor.logo}
                                            alt={`${sponsor.name} logo`}
                                            className="h-24 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    ) : (
                                        <div className="h-10 w-10 bg-current rounded-none rotate-45 opacity-20 group-hover:rotate-90 transition-transform duration-500" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button variant="outline" size="lg" className="border-ink/20 text-ink hover:bg-primary hover:text-surface hover:border-primary transition-all duration-300 font-mono uppercase tracking-widest" asChild>
                        <Link href="mailto:sponsors@osatria.com">
                            Become a Sponsor
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
