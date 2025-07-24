
"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSection = section.id;
          break;
        }
      }
      
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
  }, [navLinks]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

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
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "max-h-screen" : "max-h-0"
      )}>
        <nav className="flex flex-col items-center space-y-4 py-4 bg-background/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href.startsWith('/') ? link.href : `/#${link.id}`}
              onClick={handleLinkClick}
              className={cn(
                  "text-lg font-medium transition-colors w-full text-center py-2",
                   activeSection === link.id ? "text-primary font-bold bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
