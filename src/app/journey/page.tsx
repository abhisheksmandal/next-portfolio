
import { journey, JourneyEvent } from "@/lib/journey";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GitCommit, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

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

      <div className="relative">
        {/* The main branch line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2"></div>

        {journey.map((event, index) => (
          <div key={index} className={cn("mb-12 flex justify-center", event.branch && "md:justify-start")}>
             <div className={cn(
                "relative w-full md:w-1/2",
                event.branch === 'left' && "md:pr-8 md:text-right",
                event.branch === 'right' && "md:pl-8 md:self-end",
                !event.branch && "md:pl-8"
             )}>
                {/* Branch line */}
                {event.branch && (
                   <div className={cn(
                    "hidden md:block absolute top-1.5 h-0.5 w-8 bg-primary/20",
                    event.branch === 'left' && 'right-0 -translate-x-2',
                    event.branch === 'right' && 'left-0 translate-x-2'
                   )}></div>
                )}
                
                {/* The "commit" node */}
                <div className={cn(
                    "absolute top-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-primary",
                    !event.branch && "-left-[21px] md:left-1/2 md:-translate-x-1/2",
                    event.branch && "-left-[21px]",
                    event.branch === 'left' && "md:right-[-2.5rem] md:left-auto",
                    event.branch === 'right' && "md:left-[-2.5rem]"
                )}>
                    {event.branch ? <GitBranch className="w-6 h-6 text-primary" /> : <GitCommit className="w-6 h-6 text-primary" />}
                </div>

                <div className="ml-12 md:ml-0">
                  <Card className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                      <div className={cn(
                          "flex flex-col md:flex-row justify-between items-start",
                          event.branch === 'left' && "md:flex-row-reverse"
                      )}>
                        <div className={cn("text-left", event.branch === 'left' && "md:text-right")}>
                            <CardTitle className="font-headline">{event.title}</CardTitle>
                            <p className="text-sm text-muted-foreground pt-1">{event.institution}</p>
                        </div>
                        <div className={cn(
                            "flex items-center text-sm text-muted-foreground whitespace-nowrap mt-2 md:mt-0",
                            event.branch === 'left' ? "md:ml-4" : "md:ml-4",
                        )}>
                            <event.icon className="w-4 h-4 mr-2" />
                            <span>{event.date}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className={cn("text-left", event.branch === 'left' && "md:text-right")}>
                      <CardDescription>{event.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
