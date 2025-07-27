
import { Separator } from "@/components/ui/separator";
import { JourneyTimeline } from "@/components/journey-timeline";
import journeyData from "@/data/journey.json";

export const metadata = {
  title: journeyData.title,
  description: journeyData.description,
};

export default function JourneyPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{journeyData.pageHeader}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {journeyData.pageSubheader}
        </p>
      </header>
      <Separator className="mb-12" />
      <JourneyTimeline />
    </div>
  );
}
