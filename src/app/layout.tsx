
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { GoToTop } from '@/components/go-to-top';
import { Poppins, Source_Code_Pro } from 'next/font/google';
import { cn } from '@/lib/utils';
import { TerminalDialog } from '@/components/terminal-dialog';

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '600', '700'],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'DevOps Virtuoso',
  description: 'A cutting-edge DevOps portfolio that showcases technical expertise through interactive design and modern web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(poppins.variable, sourceCodePro.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="digital-rain-container">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className="digital-rain-column"
                style={{
                  '--fall-duration': `${Math.random() * 10 + 10}s`, // Slower: 10s to 20s
                  '--fall-delay': `${Math.random() * -20}s`, // Staggered start
                } as React.CSSProperties}
              ></div>
            ))}
          </div>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow px-4 md:px-8">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <GoToTop />
          <TerminalDialog />
        </ThemeProvider>
      </body>
    </html>
  );
}
