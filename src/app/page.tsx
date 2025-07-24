

import { PipelineVisualization } from "@/components/pipeline-visualization";
import { SkillShowcase } from "@/components/skill-showcase";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { posts } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { ProjectDetailsModal } from "@/components/project-details-modal";

export default function Home() {
  const latestPosts = posts.slice(0, 2);
  
  const projects = [
    {
      title: "Automated K8s Deployment Pipeline",
      description: "A fully automated CI/CD pipeline using Jenkins, Docker, and Kubernetes for a microservices application.",
      image: "https://placehold.co/600x400.png",
      imageHint: "abstract technology",
      tags: ["Jenkins", "Kubernetes", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      details: {
        longDescription: "This project showcases a comprehensive CI/CD pipeline designed to automate the deployment of a complex microservices-based application. The pipeline integrates Jenkins for orchestration, Docker for containerization, and Kubernetes for container management, ensuring rapid, reliable, and repeatable deployments.",
        challenges: [
          "Ensuring seamless integration between Jenkins, Docker, and a managed Kubernetes cluster.",
          "Managing container image versions and rollouts/rollbacks efficiently.",
          "Implementing automated testing at multiple stages of the pipeline to maintain code quality."
        ],
        solution: "A Jenkinsfile was scripted to define the pipeline as code, creating a version-controlled and reproducible workflow. Docker images are built and pushed to a private registry, tagged with commit hashes for traceability. Kubernetes manifests are templatized to allow for environment-specific configurations, and deployments are handled using a blue-green strategy to minimize downtime."
      }
    },
    {
      title: "Infrastructure as Code with Terraform",
      description: "Managed complex cloud infrastructure on AWS using Terraform, promoting reusable modules and state management.",
      image: "https://placehold.co/600x400.png",
      imageHint: "cloud infrastructure",
      tags: ["AWS", "Terraform", "VPC"],
      githubUrl: "#",
      liveUrl: "#",
      details: {
        longDescription: "This project involved creating and managing a scalable and secure AWS infrastructure for a high-traffic web application. By leveraging Terraform, the entire infrastructure—from VPCs and subnets to EC2 instances and RDS databases—is defined as code, enabling version control, collaboration, and automated provisioning.",
        challenges: [
          "Designing a modular and reusable Terraform structure to avoid code duplication.",
          "Managing Terraform state securely and collaboratively across a team.",
          "Integrating the IaC workflow into a CI/CD pipeline for automated infrastructure updates."
        ],
        solution: "The infrastructure was broken down into logical, reusable Terraform modules (e.g., networking, compute, database). Terraform Cloud was utilized for remote state management and locking, preventing conflicts. The CI/CD pipeline was configured to run `terraform plan` on pull requests and `terraform apply` on merge to master, ensuring all changes are peer-reviewed and automated."
      }
    }
  ];


  return (
    <div className="flex flex-col items-center space-y-20 md:space-y-32 overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="w-full text-center pt-20 md:pt-32">
        <div className="container mx-auto px-4">
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
      <section id="about" className="container mx-auto px-4 w-full">
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
      <section id="skills" className="container mx-auto px-4 text-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">Core Technologies</h2>
        <SkillShowcase />
      </section>

      <Separator className="my-8" />

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-t-lg" data-ai-hint={project.imageHint} />
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
      </section>

      <Separator className="my-8" />
      
      {/* Blog Preview Section */}
      <section id="blog" className="container mx-auto px-4 w-full">
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
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </section>

      <Separator className="my-8" />
      
      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 w-full pb-20 md:pb-32">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <Card className="light:bg-white/40 dark:bg-card/60 light:backdrop-blur-lg p-4 md:p-8">
            <CardContent className="p-0">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
