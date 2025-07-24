"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [activeSection, setActiveSection] = useState("")

  const navLinks = [
    { id: "about", href: "#about", label: "About" },
    { id: "skills", href: "#skills", label: "Skills" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "journey", href: "/journey", label: "Journey" },
    { id: "blog", href: "/blog", label: "Blog" },
    { id: "contact", href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id)).filter(el => el);
      const scrollPosition = window.scrollY + 150; // Add offset

      let currentSection = "";
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSection = section.id;
        }
      });
      
      const blogLink = navLinks.find(l => l.id === 'blog');
      const journeyLink = navLinks.find(l => l.id === 'journey');
      if (blogLink && window.location.pathname.startsWith(blogLink.href)) {
        setActiveSection('blog');
      } else if (journeyLink && window.location.pathname.startsWith(journeyLink.href)) {
        setActiveSection('journey');
      } else {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold font-headline text-primary">
          DevOps Virtuoso
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href.startsWith('/') ? link.href : `/#${link.id}`}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === link.id ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu />
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                <nav className="flex flex-col space-y-4 pt-8">
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href.startsWith('/') ? link.href : `/#${link.id}`}
                        className={cn(
                            "text-lg font-medium transition-colors",
                             activeSection === link.id ? "text-primary font-bold" : "text-foreground hover:text-primary"
                        )}
                    >
                        {link.label}
                    </Link>
                    ))}
                </nav>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  )
}
