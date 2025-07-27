
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import journeyEvents from '@/data/journey-events.json';

export type JourneyEvent = {
  date: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'work' | 'certification';
  icon: string;
};

export const journey: JourneyEvent[] = journeyEvents;

export const journeyIconMap: { [key: string]: React.ElementType } = {
    Briefcase,
    GraduationCap,
    Award
};
