import { Briefcase, GraduationCap } from 'lucide-react';

export type JourneyEvent = {
  date: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'work';
  icon: React.ElementType;
};

export const journey: JourneyEvent[] = [
    {
        date: "2014 - 2018",
        title: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        description: "Focused on software development, algorithms, and data structures. Completed a final year project on cloud-native application monitoring.",
        type: 'education',
        icon: GraduationCap,
    },
    {
        date: "2018 - 2020",
        title: "Junior System Administrator",
        institution: "Tech Solutions Inc.",
        description: "Managed on-premise servers, user accounts, and network infrastructure. Gained foundational experience in Linux systems and shell scripting.",
        type: 'work',
        icon: Briefcase,
    },
    {
        date: "2020 - 2022",
        title: "Cloud Engineer",
        institution: "Innovate Cloud Co.",
        description: "Migrated legacy applications to AWS, utilizing services like EC2, S3, and RDS. Started automating infrastructure provisioning with CloudFormation.",
        type: 'work',
        icon: Briefcase,
    },
    {
        date: "2022 - Present",
        title: "DevOps Engineer",
        institution: "Future Systems Ltd.",
        description: "Designing and implementing CI/CD pipelines using Jenkins and Docker. Managing containerized applications on Kubernetes and automating infrastructure with Terraform.",
        type: 'work',
        icon: Briefcase,
    },
];
