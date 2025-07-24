import { Briefcase, GraduationCap, Award } from 'lucide-react';

export type JourneyEvent = {
  date: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'work' | 'certification';
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
        date: "2018",
        title: "Certified AWS Developer - Associate",
        institution: "Amazon Web Services",
        description: "Validated technical expertise in developing and maintaining applications on the AWS platform.",
        type: 'certification',
        icon: Award,
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
        date: "2020",
        title: "Certified Kubernetes Administrator (CKA)",
        institution: "The Linux Foundation",
        description: "Demonstrated the skills, knowledge and competencies to perform the responsibilities of Kubernetes administrators.",
        type: 'certification',
        icon: Award,
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
     {
        date: "2023",
        title: "Terraform Associate Certification",
        institution: "HashiCorp",
        description: "Certified practitioner with the foundational skills to provision cloud infrastructure using Terraform.",
        type: 'certification',
        icon: Award,
    },
];
