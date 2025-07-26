
import { PipelineVisualization } from "@/components/pipeline-visualization";
import { SkillShowcase } from "@/components/skill-showcase";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { posts } from "@/lib/posts";
import { projects as allProjects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { ProjectDetailsModal } from "@/components/project-details-modal";
import { JourneyTimeline } from "@/components/journey-timeline";

export default function Home() {
  const latestPosts = posts.slice(0, 2);
  const featuredProjects = allProjects.slice(0, 2);

  return (
    <div className="flex flex-col items-center space-y-20 md:space-y-32 overflow-x-hidden">
       <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/10 blur-[100px]"></div></div>
      {/* Hero Section */}
      <section id="hero" className="w-full text-center pt-20 md:pt-32">
        <div className="container mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
            DevOps Virtuoso
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
            Automating Complexity, Deploying Excellence.
          </p>
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold font-headline mb-4">Live CI/CD Pipeline</h2>
            <PipelineVisualization />
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
                <Image src="https://placehold.co/400x400.png" alt="Profile picture" width={400} height={400} className="rounded-full mx-auto shadow-lg border-4 border-primary/20" data-ai-hint="man portrait" />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">About Me</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                    I&apos;m a passionate DevOps engineer dedicated to bridging the gap between development and operations. With a knack for automation, orchestration, and optimization, I build and maintain robust, scalable, and efficient infrastructures. My goal is to empower development teams to deliver high-quality software faster and more reliably.
                </p>
            </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 text-center w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">Core Technologies</h2>
        <SkillShowcase />
      </section>

      <Separator className="my-8" />
      
      {/* Journey Preview Section */}
      <section id="journey-preview" className="container mx-auto px-4 w-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">My Journey</h2>
        <JourneyTimeline limit={3} />
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/journey">
              View Full Journey <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
      
      <Separator className="my-8" />

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 w-full animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
               <div className="overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="rounded-t-lg object-cover h-64 w-full transition-transform duration-300 group-hover:scale-105" 
                  data-ai-hint={project.imageHint} 
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild><a href={project.githubUrl}><Github /></a></Button>
                    <Button variant="ghost" size="icon" asChild><a href={project.liveUrl}><ExternalLink /></a></Button>
                  </div>
                </div>
                 <div className="mt-4">
                    <ProjectDetailsModal project={project} />
                  </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild>
                <Link href="/projects">
                View All Projects <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </section>

      <Separator className="my-8" />
      
      {/* Blog Preview Section */}
      <section id="blog" className="container mx-auto px-4 w-full animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="h-full light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="font-headline">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/blog">View All Posts <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      <Separator className="my-8" />
      
      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 w-full pb-20 md:pb-32 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Get In Touch</h2>
        <Card className="max-w-4xl mx-auto light:bg-white/40 dark:bg-card/60 light:backdrop-blur-lg p-4 md:p-8">
          <CardContent className="p-0">
            <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                <div className="md:pr-8">
                    <h3 className="text-2xl font-bold font-headline mb-4">Contact Form</h3>
                    <p className="text-muted-foreground mb-6">
                      Have a question or want to work together? Fill out the form and I&apos;ll get back to you as soon as possible.
                    </p>
                    <ContactForm />
                </div>

                <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2"></div>
                <Separator className="my-8 md:hidden" />

                <div className="flex flex-col justify-center md:pl-8">
                    <h3 className="text-2xl font-bold font-headline mb-4">Direct Contact</h3>
                    <p className="text-muted-foreground mb-6">
                    Prefer a more direct approach? Reach out via email or WhatsApp. I&apos;m always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                    <div className="space-y-4 text-lg">
                        <Button asChild size="lg" className="w-full">
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2" /> WhatsApp Me
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full">
                            <a href="mailto:contact@devopsvirtuoso.com">
                                <Mail className="mr-2" /> Mail Me
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
