
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { AWSIcon, DockerIcon, JenkinsIcon, KubernetesIcon, TerraformIcon, GitIcon, AnsibleIcon, PrometheusIcon, GrafanaIcon, PythonIcon, GCPIcon } from './icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import skillsData from '@/data/skills.json';

const iconComponents: { [key: string]: React.ElementType } = {
  AWSIcon,
  GCPIcon,
  DockerIcon,
  KubernetesIcon,
  TerraformIcon,
  AnsibleIcon,
  JenkinsIcon,
  GitIcon,
  PythonIcon,
  PrometheusIcon,
  GrafanaIcon
};

const skills = skillsData.map(skill => ({
  ...skill,
  icon: iconComponents[skill.icon]
}));

export function SkillShowcase() {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {skills.map((skill) => (
          <Tooltip key={skill.name}>
            <TooltipTrigger asChild>
              <Card className="flex flex-col items-center justify-center p-6 light:bg-white/20 dark:bg-card/40 light:backdrop-blur-sm border-2 border-transparent hover:border-accent transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="text-primary"><skill.icon className="w-12 h-12" /></div>
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
