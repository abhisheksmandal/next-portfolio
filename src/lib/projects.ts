
import projectsData from '@/data/projects-list.json';

export type Project = {
    title: string;
    description: string;
    image: string;
    imageHint: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    details: {
      longDescription: string;
      challenges: string[];
      solution: string;
    };
  };
  
  export const projects: Project[] = projectsData;
