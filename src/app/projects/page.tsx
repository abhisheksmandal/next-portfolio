
import { projects } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ProjectDetailsModal } from "@/components/project-details-modal";

export const metadata = {
  title: "Projects | DevOps Virtuoso",
  description: "A collection of my DevOps projects.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">All Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A showcase of my work in automation, cloud infrastructure, and CI/CD.
        </p>
      </header>
      <Separator className="mb-12" />
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
             <div className="overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={600} 
                height={400} 
                className="rounded-t-lg object-cover h-64 w-full transition-transform duration-300 group-hover:scale-105" 
                data-ai-hint={project.imageHint} 
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" asChild><a href={project.githubUrl}><Github /></a></Button>
                  <Button variant="ghost" size="icon" asChild><a href={project.liveUrl}><ExternalLink /></a></Button>
                </div>
              </div>
               <div className="mt-4">
                  <ProjectDetailsModal project={project} />
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
