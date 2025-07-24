"use client"

import { useState, useTransition } from 'react';
import { generatePersonalizedGreeting } from '@/ai/flows/personalized-greeting';
import type { PersonalizedGreetingInput } from '@/ai/flows/personalized-greeting';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';
import { Sparkles } from 'lucide-react';

export function PersonalizedGreeting() {
  const [expertise, setExpertise] = useState<PersonalizedGreetingInput['likelyExpertise'] | null>(null);
  const [greeting, setGreeting] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleGenerate = (exp: PersonalizedGreetingInput['likelyExpertise']) => {
    setExpertise(exp);
    setGreeting('');
    startTransition(async () => {
      const result = await generatePersonalizedGreeting({ likelyExpertise: exp });
      setGreeting(result.greeting);
    });
  };

  const expertiseOptions: { label: string; value: PersonalizedGreetingInput['likelyExpertise'] }[] = [
    { label: 'Technical Pro', value: 'technical' },
    { label: 'Business Focus', value: 'non-technical' },
    { label: 'Just Curious', value: 'unknown' },
  ];

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <p className="text-sm text-muted-foreground">Tailor your experience:</p>
      <div className="flex justify-center flex-wrap gap-2">
        {expertiseOptions.map((opt) => (
          <Button
            key={opt.value}
            variant={expertise === opt.value ? 'default' : 'secondary'}
            onClick={() => handleGenerate(opt.value)}
            disabled={isPending}
          >
            {opt.label}
          </Button>
        ))}
      </div>
      {(isPending || greeting) && (
        <Card className="mt-4 light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-primary/20">
          <CardContent className="p-4">
            {isPending ? (
              <div className="flex items-center space-x-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : (
              <p className="flex items-center text-center justify-center font-medium">
                <Sparkles className="w-5 h-5 mr-2 text-accent" />
                {greeting}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
