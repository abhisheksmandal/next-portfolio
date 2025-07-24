
"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  details: {
    longDescription: string;
    challenges: string[];
    solution: string;
  };
};

type ProjectDetailsModalProps = {
  project: Project;
};

export function ProjectDetailsModal({ project }: ProjectDetailsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-4">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-card/90 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
          <DialogDescription>
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div>
            <h3 className="font-bold text-lg mb-2">About the Project</h3>
            <p className="text-sm text-muted-foreground">{project.details.longDescription}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Challenges Faced</h3>
            <ul className="space-y-2">
              {project.details.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h3 className="font-bold text-lg mb-2">My Solution</h3>
            <p className="text-sm text-muted-foreground">{project.details.solution}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
