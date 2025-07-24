
import { journey } from "@/lib/journey";
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
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2"></div>

        <div className="space-y-12">
            {journey.map((event, index) => (
            <div key={index} className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-x-8 items-start">
                     {/* Commit Node */}
                    <div className="absolute left-4 md:left-1/2 top-7 -translate-y-1/2 -translate-x-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary">
                        {event.type === 'certification' ? <GitBranch className="w-4 h-4 text-primary" /> : <GitCommit className="w-4 h-4 text-primary" />}
                    </div>

                    {/* Horizontal Connector Line - Hidden on mobile */}
                    <div className="hidden md:block absolute top-7 -translate-y-1/2 h-0.5 w-[calc(50%-1rem)] bg-primary/20" style={index % 2 === 0 ? { right: 'calc(50% + 1rem)' } : { left: 'calc(50% + 1rem)' }}></div>

                    {/* Card Content */}
                    <div className={cn(
                        "ml-12 md:ml-0 md:flex",
                        index % 2 === 0 ? 'md:col-start-1 md:justify-end' : 'md:col-start-2 md:justify-start'
                    )}>
                      <div className="md:w-[calc(100%)] pt-0">
                          <Card className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                              <CardHeader className={cn(index % 2 === 0 ? "md:text-right" : "md:text-left")}>
                                 <div className={cn(
                                     "flex flex-col",
                                     index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                                 )}>
                                      <div className={cn("flex items-center text-sm text-muted-foreground whitespace-nowrap", index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row' )}>
                                          <event.icon className="w-4 h-4 mx-2" />
                                          <span>{event.date}</span>
                                      </div>
                                      <div className='mt-2'>
                                          <CardTitle className="font-headline">{event.title}</CardTitle>
                                          <p className="text-sm text-muted-foreground pt-1">{event.institution}</p>
                                      </div>
                                  </div>
                              </CardHeader>
                              <CardContent className={cn(index % 2 === 0 ? "md:text-right" : "md:text-left")}>
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
    </div>
  );
}
