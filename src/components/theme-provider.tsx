"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

function GlitchEffectManager({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme();
  const [isGlitching, setIsGlitching] = React.useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  const initialTheme = React.useRef(currentTheme);

  React.useEffect(() => {
    if (initialTheme.current !== currentTheme) {
      setIsGlitching(true);
      const timer = setTimeout(() => setIsGlitching(false), 500); // Duration of the glitch animation
      initialTheme.current = currentTheme;
      return () => clearTimeout(timer);
    }
  }, [currentTheme]);

  React.useEffect(() => {
    if (isGlitching) {
      document.body.classList.add('glitching');
    } else {
      document.body.classList.remove('glitching');
    }
  }, [isGlitching]);

  return <>{children}</>;
}


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <GlitchEffectManager>{children}</GlitchEffectManager>
    </NextThemesProvider>
  )
}
