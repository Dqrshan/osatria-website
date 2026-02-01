"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { PublicPageLayout } from "@/components/ui/public-layout";

export default function CodeOfConduct() {
  return (
    <PublicPageLayout
      header={{
        icon: Shield,
        badgeLabel: "LEGAL"
      }}
      hero={{
        badge: "Community Guidelines",
        title: "Code of Conduct",
        description: "Our commitment to fostering an open, welcoming, and inclusive environment for all participants.",
        footer: "Last Updated: February 1, 2026",
        badgeColor: "accent"
      }}
      footer={{}}
      contentMaxWidth="5xl"
    >
      <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              Our Pledge
            </h2>
            <p className="text-surface-lighter leading-relaxed">
              In the interest of fostering an open and welcoming environment, we as contributors, maintainers, and organizers 
              pledge to make participation in Open Source Atria a harassment-free experience for everyone, regardless of age, 
              body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, 
              race, religion, or sexual identity and orientation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-primary pl-4">
              Our Standards
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-ink mb-3">Examples of behavior that contributes to a positive environment:</h3>
                <ul className="list-disc pl-8 space-y-2 text-surface-lighter">
                  <li>Using welcoming and inclusive language</li>
                  <li>Being respectful of differing viewpoints and experiences</li>
                  <li>Gracefully accepting constructive criticism</li>
                  <li>Focusing on what is best for the community</li>
                  <li>Showing empathy towards other community members</li>
                  <li>Providing helpful and constructive feedback</li>
                  <li>Mentoring and supporting newcomers</li>
                  <li>Celebrating the achievements of others</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-ink mb-3">Examples of unacceptable behavior:</h3>
                <ul className="list-disc pl-8 space-y-2 text-surface-lighter">
                  <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
                  <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
                  <li>Public or private harassment</li>
                  <li>Publishing others' private information without explicit permission</li>
                  <li>Intimidating or threatening behavior</li>
                  <li>Sustained disruption of talks or other events</li>
                  <li>Inappropriate physical contact</li>
                  <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              Our Responsibilities
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                Event organizers and project maintainers are responsible for clarifying the standards of acceptable behavior 
                and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.
              </p>
              <p>
                Event organizers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, 
                issues, and other contributions that are not aligned with this Code of Conduct, or to ban temporarily or permanently 
                any contributor for behaviors that they deem inappropriate, threatening, offensive, or harmful.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-primary pl-4">
              Scope
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                This Code of Conduct applies to all Open Source Atria spaces, including but not limited to:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>The OSAtria platform and website</li>
                <li>GitHub repositories and discussions</li>
                <li>Communication channels (Discord, WhatsApp, email lists)</li>
                <li>In-person and virtual events, workshops, and meetups</li>
                <li>Social media interactions related to the Event</li>
              </ul>
              <p>
                This Code of Conduct also applies when an individual is representing the Event or community in public spaces.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              Enforcement
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                <strong className="text-ink">Reporting:</strong> Instances of abusive, harassing, or otherwise unacceptable behavior 
                may be reported by contacting the event organizers
                {/* at{" "}
                <a href="mailto:conduct@atria.edu" className="text-primary font-bold hover:underline">
                  conduct@atria.edu
                </a> */}
                . All complaints will be reviewed and investigated promptly and fairly.
              </p>
              <p>
                <strong className="text-ink">Confidentiality:</strong> All reports will be kept confidential. In some cases, we may 
                determine that a public statement is required, but will only share details after consulting with the reporter.
              </p>
              <p>
                <strong className="text-ink">Investigation Process:</strong>
              </p>
              <ol className="list-decimal pl-8 space-y-2">
                <li>Receipt of report and acknowledgment to reporter (within 24 hours)</li>
                <li>Investigation of the incident (gathering evidence and statements)</li>
                <li>Decision on appropriate action</li>
                <li>Communication of decision to involved parties</li>
                <li>Follow-up to ensure resolution</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-primary pl-4">
              Enforcement Guidelines
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-surface-50 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-ink mb-2">1. Correction</h3>
                <p className="text-surface-lighter mb-2">
                  <strong>Community Impact:</strong> Use of inappropriate language or other behavior deemed unprofessional or unwelcome.
                </p>
                <p className="text-surface-lighter">
                  <strong>Consequence:</strong> A private, written warning from organizers, providing clarity around the nature 
                  of the violation and an explanation of why the behavior was inappropriate.
                </p>
              </div>

              <div className="p-6 bg-surface-50 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-ink mb-2">2. Warning</h3>
                <p className="text-surface-lighter mb-2">
                  <strong>Community Impact:</strong> A violation through a single incident or series of actions.
                </p>
                <p className="text-surface-lighter">
                  <strong>Consequence:</strong> A warning with consequences for continued behavior. No interaction with the people 
                  involved for a specified period of time. Violating these terms may lead to a temporary or permanent ban.
                </p>
              </div>

              <div className="p-6 bg-surface-50 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-ink mb-2">3. Temporary Ban</h3>
                <p className="text-surface-lighter mb-2">
                  <strong>Community Impact:</strong> A serious violation of community standards, including sustained inappropriate behavior.
                </p>
                <p className="text-surface-lighter">
                  <strong>Consequence:</strong> A temporary ban from any sort of interaction or public communication with the community 
                  for a specified period of time. Violation of these terms may lead to a permanent ban.
                </p>
              </div>

              <div className="p-6 bg-surface-50 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-ink mb-2">4. Permanent Ban</h3>
                <p className="text-surface-lighter mb-2">
                  <strong>Community Impact:</strong> Demonstrating a pattern of violation of community standards, including sustained 
                  inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.
                </p>
                <p className="text-surface-lighter">
                  <strong>Consequence:</strong> A permanent ban from any sort of public interaction within the community and Event.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              Attribution
            </h2>
            <p className="text-surface-lighter leading-relaxed">
              This Code of Conduct is adapted from the{" "}
              <a
                href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
                className="text-primary font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contributor Covenant, version 2.1
              </a>
              , and inspired by the{" "}
              <a
                href="https://github.com/MLH/mlh-policies"
                className="text-primary font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Major League Hacking Code of Conduct
              </a>
              .
            </p>
          </section>

          {/* Related Links */}
          <section className="mt-16 pt-8 border-t-4 border-ink">
            <h3 className="text-2xl font-black uppercase tracking-tight text-ink mb-6">
              Related Documents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/legal/terms-of-participation"
                className="p-6 bg-surface-light text-white border-4 border-ink shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all"
              >
                <h4 className="font-bold text-xl mb-2">Terms of Participation</h4>
                <p className="text-sm text-paper/75">Event terms and conditions</p>
              </Link>
              <Link
                href="/legal/contribution-guidelines"
                className="p-6 bg-surface-light text-white border-4 border-ink shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all"
              >
                <h4 className="font-bold text-xl mb-2">Contribution Guidelines</h4>
                <p className="text-sm text-paper/75">How to contribute effectively</p>
              </Link>
            </div>
          </section>
      </div>
    </PublicPageLayout>
  );
}
