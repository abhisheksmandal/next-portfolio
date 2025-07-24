import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AWSIcon, DockerIcon, JenkinsIcon, KubernetesIcon, TerraformIcon, GitIcon } from './icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const skills = [
  {
    name: 'AWS',
    icon: <AWSIcon className="w-12 h-12" />,
    description: 'Cloud services for compute, storage, and databases.',
  },
  {
    name: 'Docker',
    icon: <DockerIcon className="w-12 h-12" />,
    description: 'Containerization platform for building and running applications.',
  },
  {
    name: 'Kubernetes',
    icon: <KubernetesIcon className="w-12 h-12" />,
    description: 'Container orchestration system for automating application deployment.',
  },
  {
    name: 'Terraform',
    icon: <TerraformIcon className="w-12 h-12" />,
    description: 'Infrastructure as Code software tool.',
  },
  {
    name: 'Jenkins',
    icon: <JenkinsIcon className="w-12 h-12" />,
    description: 'Automation server for building, testing, and deploying code.',
  },
  {
    name: 'Git',
    icon: <GitIcon className="w-12 h-12 stroke-current" />,
    description: 'Distributed version control system for tracking changes.',
  },
];

export function SkillShowcase() {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {skills.map((skill) => (
          <Tooltip key={skill.name}>
            <TooltipTrigger asChild>
              <Card className="flex flex-col items-center justify-center p-6 light:bg-white/20 dark:bg-card/40 light:backdrop-blur-sm border-2 border-transparent hover:border-accent transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="text-primary">{skill.icon}</div>
                <p className="mt-4 font-semibold text-lg">{skill.name}</p>
              </Card>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.description}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
