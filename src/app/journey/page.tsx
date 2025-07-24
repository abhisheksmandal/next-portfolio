import { journey } from "@/lib/journey";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GitCommit } from "lucide-react";

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

      <div className="relative pl-8">
        {/* The main branch line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-primary/20"></div>

        {journey.map((event, index) => (
          <div key={index} className="mb-12 relative">
            {/* The "commit" node */}
            <div className="absolute -left-[1.5rem] top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-primary">
                <GitCommit className="w-6 h-6 text-primary" />
            </div>

            <div className="ml-8">
              <Card className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="font-headline">{event.title}</CardTitle>
                        <p className="text-sm text-muted-foreground pt-1">{event.institution}</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                        <event.icon className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
