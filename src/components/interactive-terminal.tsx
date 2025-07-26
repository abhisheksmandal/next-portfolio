
"use client"

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';

const commands: { [key: string]: string | (() => string[]) } = {
  help: () => [
    'Available commands:',
    '  help     - Show this help message',
    '  about    - Display a short bio',
    '  skills   - List my technical skills',
    '  contact  - Show contact information',
    '  clear    - Clear the terminal screen',
  ],
  about: 'I am a DevOps engineer passionate about automation and building scalable systems.',
  skills: () => [
    'My skills include:',
    '  - Cloud: AWS, GCP',
    '  - CI/CD: Jenkins, GitLab CI, GitHub Actions',
    '  - Containers: Docker, Kubernetes',
    '  - IaC: Terraform, Ansible',
    '  - Scripting: Bash, Python, Go',
  ],
  contact: 'You can reach me via the contact form below or at email@example.com.',
  clear: () => [],
};

export function InteractiveTerminal() {
  const { theme } = useTheme();
  const [lines, setLines] = useState<{ type: 'input' | 'output'; text: string | string[] }[]>([
    { type: 'output', text: "Welcome to my interactive terminal! Type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState('');
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const command = input.toLowerCase().trim();
    const newLines = [...lines, { type: 'input' as const, text: input }];

    if (command === 'clear') {
        setLines([]);
    } else if (command in commands) {
      const output = commands[command];
      newLines.push({ type: 'output', text: typeof output === 'function' ? output() : output });
      setLines(newLines);
    } else if(command) {
      newLines.push({ type: 'output', text: `Command not found: ${command}. Type 'help' for a list of commands.` });
      setLines(newLines);
    } else {
        setLines(newLines);
    }

    setInput('');
  };

  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [lines]);
  
  const terminalFontClass = theme === 'dark' ? 'font-code' : '';

  return (
    <Card className={`w-full max-w-4xl mx-auto ${terminalFontClass} bg-card/80 dark:bg-black/80 backdrop-blur-sm border-2 border-primary/20`}>
      <div className="bg-primary/10 dark:bg-black/50 p-2 rounded-t-lg flex items-center">
        <Terminal className="w-5 h-5 mr-2" />
        <span className="font-semibold">/bin/bash</span>
      </div>
      <CardContent className="p-4 h-80 overflow-y-auto bg-transparent">
        {lines.map((line, index) => (
          <div key={index}>
            {line.type === 'input' ? (
              <div className="flex">
                <span className="text-primary mr-2">$</span>
                <span>{line.text}</span>
              </div>
            ) : (
                Array.isArray(line.text) ? line.text.map((t, i) => <p key={i} className="whitespace-pre-wrap">{t}</p>) : <p className="whitespace-pre-wrap">{line.text}</p>
            )}
          </div>
        ))}
        <form onSubmit={handleInputSubmit} className="flex items-center mt-2">
          <span className="text-primary mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="bg-transparent border-none focus:ring-0 w-full p-0 text-foreground"
            autoFocus
          />
        </form>
        <div ref={endOfTerminalRef} />
      </CardContent>
    </Card>
  );
}
