import { HeroSection } from "@/components/landing/HeroSection";
import { Timeline } from "@/components/landing/Timeline";
import { Sponsors } from "@/components/landing/Sponsors";
import { Rewards } from "@/components/landing/Rewards";
import { AlertBanner } from "@/components/ui/alert-banner";

export default function Home() {
  return (
    <>
      {/* <AlertBanner variant="info" /> */}
      <main className="relative pt-14 sm:pt-0 pb-20">
        {/* <CollaborationBadge /> */}
        <HeroSection />
        <Timeline />
        <Sponsors />
        <Rewards />
      </main>
    </>
  );
}
