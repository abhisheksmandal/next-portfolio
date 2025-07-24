
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
            <div key={index} className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-x-4 items-start">
                {/* Left side content */}
                <div className={cn("hidden md:block", index % 2 === 0 ? "text-right" : "hidden")}>
                    <Card className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row-reverse justify-between items-start text-right">
                                <div>
                                    <CardTitle className="font-headline">{event.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground pt-1">{event.institution}</p>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap mt-2 md:mt-0 md:mr-4">
                                    <event.icon className="w-4 h-4 mr-2 md:mr-0 md:ml-2 order-first md:order-last" />
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="text-right">
                            <CardDescription>{event.description}</CardDescription>
                        </CardContent>
                    </Card>
                </div>

                {/* Commit Node */}
                <div className="flex flex-col items-center">
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary">
                        {event.type === 'certification' ? <GitBranch className="w-4 h-4 text-primary" /> : <GitCommit className="w-4 h-4 text-primary" />}
                    </div>
                </div>

                {/* Right side content */}
                <div className={cn(index % 2 !== 0 ? "" : "md:hidden")}>
                     <Card className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                           <div className="flex flex-col md:flex-row justify-between items-start text-left">
                                <div>
                                    <CardTitle className="font-headline">{event.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground pt-1">{event.institution}</p>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap mt-2 md:mt-0 md:ml-4">
                                    <event.icon className="w-4 h-4 mr-2" />
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="text-left">
                            <CardDescription>{event.description}</CardDescription>
                        </CardContent>
                    </Card>
                </div>

                 {/* Mobile-only Left side content */}
                 <div className={cn("md:hidden", index % 2 === 0 ? "" : "hidden")}>
                     <Card className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader>
                           <div className="flex flex-col md:flex-row justify-between items-start text-left">
                                <div>
                                    <CardTitle className="font-headline">{event.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground pt-1">{event.institution}</p>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap mt-2 md:mt-0 md:ml-4">
                                    <event.icon className="w-4 h-4 mr-2" />
                                    <span>{event.date}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="text-left">
                            <CardDescription>{event.description}</CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
