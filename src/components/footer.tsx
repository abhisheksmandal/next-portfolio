import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import footerData from "@/data/footer.json";

const icons: { [key: string]: React.ElementType } = {
    Github,
    Linkedin,
    Twitter
};

export function Footer() {
  const year = new Date().getFullYear();
  const copyrightText = footerData.copyright.replace('{year}', year.toString());

  return (
    <footer className="bg-secondary/50 dark:bg-card/50">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          {copyrightText}
        </p>
        <div className="flex items-center space-x-2">
            {footerData.socials.map(social => {
                const Icon = icons[social.icon];
                return (
                    <Button variant="ghost" size="icon" asChild key={social.name}>
                        <Link href={social.url} target="_blank" aria-label={social.name}>
                            {Icon && <Icon className="h-5 w-5" />}
                        </Link>
                    </Button>
                )
            })}
        </div>
      </div>
    </footer>
  )
}
