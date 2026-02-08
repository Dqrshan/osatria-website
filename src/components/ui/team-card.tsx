"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface TeamMember {
    name: string;
    role: string;
    image?: string;
    bio?: string;
    socials: {
        github?: string;
        linkedin?: string;
        instagram?: string;
        twitter?: string;
        email?: string;
    };
}

interface TeamCardProps {
    member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
    return (
        <Card className="group border-2 border-surface-lighter shadow-[4px_4px_0_0_var(--color-surface-lighter)] overflow-hidden hover:translate-y-[-4px] hover:shadow-[6px_6px_0_0_var(--color-primary)] hover:border-primary transition-all duration-300 rounded-none bg-surface-light">
            <div className="relative h-80 w-full overflow-hidden bg-surface-lighter">
                {/* Image Handling: Grayscale by default, color on group hover */}
                {member.image ? (
                    <div className="relative w-full h-full">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-105"
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-surface-light grayscale group-hover:grayscale-0 transition-all duration-500">
                        <span className="text-4xl font-black text-ink/20">{member.name.charAt(0)}</span>
                    </div>
                )}
            </div>

            <CardContent className="pt-6 text-center relative bg-surface-light z-10 border-t border-surface-lighter">
                <h3 className="text-xl font-black uppercase tracking-tight mb-1 text-ink">{member.name}</h3>
                <p className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>

                {member.bio && (
                    <p className="text-sm text-ink/60 mb-6 line-clamp-3">
                        {member.bio}
                    </p>
                )}

                <div className="flex justify-center gap-4">
                    {Object.entries(member.socials).map(([platform, link]) => (
                        link && (
                            <Link
                                key={platform}
                                href={platform === 'email' ? `mailto:${link}` : link}
                                target="_blank"
                                className="p-2 rounded-full hover:bg-primary/10 transition-colors text-ink/60 hover:text-primary"
                            >
                                {platform === 'github' && <Github className="h-5 w-5" />}
                                {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                                {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                                {platform === 'instagram' && <Instagram className="h-5 w-5" />}
                                {platform === 'email' && <Mail className="h-5 w-5" />}
                            </Link>
                        )
                    ))}
                </div>
            </CardContent>
        </Card>
    );

}
