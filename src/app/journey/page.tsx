
import { Separator } from "@/components/ui/separator";
import { JourneyTimeline } from "@/components/journey-timeline";

export const metadata = {
  title: "My Journey | DevOps Virtuoso",
  description: "A timeline of my educational and professional journey.",
};

export default function JourneyPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">My Journey</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From education to career, a timeline of my growth.
        </p>
      </header>
      <Separator className="mb-12" />
      <JourneyTimeline />
    </div>
  );
}
