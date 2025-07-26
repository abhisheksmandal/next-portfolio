
"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

export function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const navLinksRef = useRef([
    { id: "hero", href: "#hero", label: "Home" },
    { id: "about", href: "#about", label: "About" },
    { id: "skills", href: "#skills", label: "Skills" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "journey-preview", href: "#journey-preview", label: "Journey" },
    { id: "blog", href: "#blog", label: "Blog" },
    { id: "contact", href: "#contact", label: "Contact" },
  ]);
  const navLinks = navLinksRef.current;


  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      if (pathname === '/') {
        const sections = navLinks.map(link => document.getElementById(link.id)).filter(el => el);
        const scrollPosition = window.scrollY + 150;

        for (const section of sections) {
          if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSection = section.id;
            break;
          }
        }
      } else {
        if (pathname.startsWith('/projects')) {
          currentSection = 'projects';
        } else if (pathname.startsWith('/blog')) {
          currentSection = 'blog';
        } else if (pathname.startsWith('/journey')) {
          currentSection = 'journey-preview';
        }
      }
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, navLinks]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      
      if (pathname !== '/') {
        window.location.href = `/${href}`;
        return;
      }
      
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
    setIsMobileMenuOpen(false);
  };
  
  const getLinkHref = (link: { id: string, href: string }) => {
    if(link.href.startsWith('#')) {
      if(pathname === '/') return link.href;
      return `/${link.href}`;
    }
    return link.href;
  }

  const getIsActive = (link: { id: string, href: string }) => {
    return activeSection === link.id;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold font-headline text-primary">
          DevOps Virtuoso
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={getLinkHref(link)}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors",
                getIsActive(link) ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"
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
        isMobileMenuOpen ? "max-h-screen border-t border-border/50" : "max-h-0"
      )}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={getLinkHref(link)}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                  "text-lg font-medium transition-colors w-full text-center py-2",
                   getIsActive(link) ? "text-primary font-bold bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"
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
