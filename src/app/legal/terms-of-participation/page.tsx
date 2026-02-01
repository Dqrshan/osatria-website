"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { PublicPageLayout } from "@/components/ui/public-layout";

export default function TermsOfParticipation() {
  return (
    <PublicPageLayout
      header={{
        icon: FileText,
        badgeLabel: "LEGAL"
      }}
      hero={{
        badge: "Legal Document",
        title: "Terms of Participation",
        description: "Please read these terms carefully before participating in the Open Source Atria event.",
        footer: "Last Updated: February 1, 2026"
      }}
      footer={{}}
      contentMaxWidth="5xl"
    >
      <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-primary pl-4">
              Welcome to Open Source Atria
            </h2>
            <p className="text-surface-lighter leading-relaxed">
              By participating in the Open Source Atria event (&quot;the Event&quot;), you agree to comply with these Terms of Participation.
              This event is a collaboration between Apex Community and OSCode, designed to foster open-source contributions and community building.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              1. Eligibility
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                <strong className="text-ink">1.1</strong> The Event is open to all students, faculty, and staff of Atria Institute of Technology.
              </p>
              <p>
                <strong className="text-ink">1.2</strong> Participants must have a valid institutional ID card for registration and authentication.
              </p>
              <p>
                <strong className="text-ink">1.3</strong> Participants must be at least 16 years of age or have parental/guardian consent.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-primary pl-4">
              2. Participation Requirements
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                <strong className="text-ink">2.1 Registration:</strong> All participants must register through the official OSAtria platform using their GitHub account.
              </p>
              <p>
                <strong className="text-ink">2.2 Code of Conduct:</strong> Participants must adhere to our{" "}
                <Link href="/legal/code-of-conduct" className="text-primary font-bold hover:underline">
                  Code of Conduct
                </Link>{" "}
                at all times during the Event.
              </p>
              <p>
                <strong className="text-ink">2.3 Original Work:</strong> All contributions must be original work created by the participant or properly attributed to external sources.
              </p>
              <p>
                <strong className="text-ink">2.4 Open Source Licensing:</strong> All code contributions must be made under an OSI-approved open source license as specified by the project.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              3. Intellectual Property
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                <strong className="text-ink">3.1 Ownership:</strong> Participants retain ownership of their contributions, but grant the project maintainers a license to use, modify, and distribute the contributions as per the project&apos;s open source license.
              </p>
              <p>
                <strong className="text-ink">3.2 Attribution:</strong> All contributions will be attributed to the contributor through Git commit history and project documentation.
              </p>
              <p>
                <strong className="text-ink">3.3 Third-Party Content:</strong> Participants must not include copyrighted material, proprietary code, or any content that infringes on third-party intellectual property rights.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-primary pl-4">
              4. Event Activities
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                <strong className="text-ink">4.1 Workshops & Sessions:</strong> Participants are encouraged to attend workshops, mentoring sessions, and networking events organized as part of the Event.
              </p>
              <p>
                <strong className="text-ink">4.2 Collaboration:</strong> Participants are expected to collaborate respectfully with other contributors, maintainers, and organizers.
              </p>
              <p>
                <strong className="text-ink">4.3 Communication:</strong> Official communication will be conducted through the OSAtria platform, email, and designated communication channels (Discord, Slack, etc.).
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              5. Prohibited Conduct
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>Participants must NOT:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Submit malicious code, viruses, or any harmful software</li>
                <li>Engage in plagiarism or submit work that is not their own</li>
                <li>Harass, discriminate against, or abuse other participants</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to Event systems or data</li>
                <li>Spam, advertise, or promote commercial products without permission</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-primary pl-4">
              6. Privacy & Data Protection
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                <strong className="text-ink">6.1 Data Collection:</strong> We collect participant names, email addresses, and contribution data for Event administration and analytics.
              </p>
              <p>
                <strong className="text-ink">6.2 Data Usage:</strong> Collected data will be used solely for Event purposes and will not be shared with third parties without consent.
              </p>
              <p>
                <strong className="text-ink">6.3 Data Security:</strong> We implement industry-standard security measures to protect participant data.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              7. Disclaimers & Liability
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                <strong className="text-ink">7.1 No Warranty:</strong> The Event and platform are provided &quot;as is&quot; without warranties of any kind.
              </p>
              <p>
                <strong className="text-ink">7.2 Limitation of Liability:</strong> The organizers, Apex Community, and OSCode shall not be liable for any damages arising from participation in the Event.
              </p>
              <p>
                <strong className="text-ink">7.3 Technical Issues:</strong> The organizers are not responsible for technical failures, internet connectivity issues, or force majeure events.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-primary pl-4">
              8. Termination & Enforcement
            </h2>
            <div className="space-y-4 text-surface-lighter leading-relaxed">
              <p>
                <strong className="text-ink">8.1 Violation Consequences:</strong> Violation of these Terms may result in immediate disqualification, removal from the Event, and reporting to institutional authorities.
              </p>
              <p>
                <strong className="text-ink">8.2 Right to Modify:</strong> The organizers reserve the right to modify these Terms at any time. Participants will be notified of significant changes.
              </p>
              <p>
                <strong className="text-ink">8.3 Right to Terminate:</strong> The organizers reserve the right to cancel or postpone the Event due to unforeseen circumstances.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-ink mb-4 border-l-4 border-accent pl-4">
              9. Acknowledgment
            </h2>
            <p className="text-surface-lighter leading-relaxed">
              By participating in Open Source Atria, you acknowledge that you have read, understood, and agree to be bound by these Terms of Participation.
            </p>
          </section>

          {/* Related Links */}
          <section className="mt-16 pt-8 border-t-4 border-ink">
            <h3 className="text-2xl font-black uppercase tracking-tight text-ink mb-6">
              Related Documents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/legal/code-of-conduct"
                className="p-6 bg-surface-light text-white border-4 border-ink shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all"
              >
                <h4 className="font-bold text-xl mb-2">Code of Conduct</h4>
                <p className="text-sm text-paper/75">Community standards and expectations</p>
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
