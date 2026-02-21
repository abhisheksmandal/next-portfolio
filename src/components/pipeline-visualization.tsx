"use client"
import { GitIcon, DockerIcon, KubernetesIcon, GCPIcon } from './icons';
import { CheckCircle2, Zap, TestTube2, PackageCheck, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const stages = [
  { name: 'Build', icon: Zap, techIcon: GitIcon, color: 'text-blue-400' },
  { name: 'Test', icon: TestTube2, techIcon: DockerIcon, color: 'text-yellow-400' },
  { name: 'Deploy', icon: PackageCheck, techIcon: KubernetesIcon, color: 'text-green-400' },
  { name: 'Live', icon: Globe, techIcon: GCPIcon, color: 'text-cyan-400' },
];

export function PipelineVisualization() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % (stages.length + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentActiveStage = activeStage - 1;

  return (
    <Card className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/10 p-6">
      <CardContent className="p-0">
        <div className="flex items-center justify-between relative">
          {stages.map((stage, index) => (
            <div key={stage.name} className="flex flex-col items-center z-10">
              <div
                className={cn(
                  'w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500',
                  currentActiveStage >= index
                    ? `${stage.color.replace('text-', 'border-')} bg-background`
                    : 'border-muted-foreground bg-secondary'
                )}
              >
                <stage.icon
                  className={cn(
                    'w-8 h-8 transition-all duration-500',
                    currentActiveStage >= index ? stage.color : 'text-muted-foreground'
                  )}
                />
              </div>
              <p className="mt-2 font-semibold text-sm">{stage.name}</p>
              {stage.techIcon && (
                <stage.techIcon className="w-6 h-6 mt-1 text-muted-foreground" />
              )}
            </div>
          ))}
          <div className="absolute top-8 left-0 w-full h-1 bg-secondary rounded-full">
            <div
                className="h-1 bg-primary rounded-full transition-all duration-500"
                style={{ width: `${Math.max(0, (currentActiveStage / (stages.length - 1)) * 100)}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
