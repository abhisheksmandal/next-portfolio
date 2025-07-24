
"use client";

import { journey } from "@/lib/journey";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type JourneyTimelineProps = {
  limit?: number;
};

export function JourneyTimeline({ limit }: JourneyTimelineProps) {
  const eventsToShow = limit ? journey.slice(0, limit) : journey;

  return (
    <div className="relative">
      {/* The main branch line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2"></div>

      <div className="space-y-12">
        {eventsToShow.map((event, index) => (
          <div key={index} className="relative">
            <div className="md:grid md:grid-cols-2 md:gap-x-8 items-start">
              {/* Commit Node */}
              <div className="absolute left-4 md:left-1/2 top-7 -translate-y-1/2 -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background"></div>

              {/* Horizontal Connector Line - Hidden on mobile */}
              <div
                className={cn(
                  "hidden md:block absolute top-7 -translate-y-1/2 h-0.5 bg-primary/30",
                  index % 2 === 0 
                    ? "right-1/2 w-[calc(50%_-_4rem)]" 
                    : "left-1/2 w-[calc(50%_-_4rem)]"
                )}
              ></div>

              {/* Card Content */}
              <div className={cn(
                "ml-12 md:ml-0",
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              )}>
                <div className={cn("pt-0", index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                  <Card className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 inline-block w-full">
                    <CardHeader>
                      <div className={cn(
                        "flex flex-col",
                        index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                      )}>
                        <div className={cn("flex items-center text-sm text-muted-foreground whitespace-nowrap", index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row')}>
                          <event.icon className="w-4 h-4 mx-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className='mt-2'>
                          <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                          <p className="text-sm text-muted-foreground pt-1">{event.institution}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{event.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
