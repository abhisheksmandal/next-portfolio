
export type Project = {
    title: string;
    description: string;
    image: string;
    imageHint: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    details: {
      longDescription: string;
      challenges: string[];
      solution: string;
    };
  };
  
  export const projects: Project[] = [
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
    },
    {
      title: "Serverless Architecture on AWS",
      description: "Designed a serverless API using AWS Lambda, API Gateway, and DynamoDB for a cost-effective, scalable solution.",
      image: "https://placehold.co/600x400.png",
      imageHint: "serverless architecture",
      tags: ["AWS Lambda", "API Gateway", "DynamoDB"],
      githubUrl: "#",
      liveUrl: "#",
      details: {
        longDescription: "This project involved building a highly available and scalable backend for a mobile application using a serverless approach on AWS. This architecture eliminated the need for managing servers, reduced operational costs, and provided automatic scaling based on demand.",
        challenges: [
          "Designing a cost-effective data model for DynamoDB.",
          "Handling API authorization and authentication securely using API Gateway.",
          "Managing function dependencies and versions for AWS Lambda."
        ],
        solution: "Leveraged the Serverless Framework to define and deploy the entire stack as code. API Gateway was configured with custom authorizers to protect endpoints. DynamoDB was designed with a single-table approach to optimize query performance and cost. Lambda functions were written in Python and packaged with their dependencies for deployment."
      }
    },
    {
      title: "Monitoring with Prometheus & Grafana",
      description: "Established a comprehensive monitoring and alerting stack for a Kubernetes cluster using Prometheus and Grafana.",
      image: "https://placehold.co/600x400.png",
      imageHint: "data dashboard",
      tags: ["Prometheus", "Grafana", "Alertmanager"],
      githubUrl: "#",
      liveUrl: "#",
      details: {
        longDescription: "This project focused on providing deep visibility into the health and performance of applications running on Kubernetes. A robust monitoring solution was built using Prometheus for time-series data collection and Grafana for visualization, with Alertmanager for handling alerts.",
        challenges: [
          "Scraping metrics from a dynamic set of Kubernetes pods and services.",
          "Creating meaningful and actionable Grafana dashboards for different teams.",
          "Configuring alerting rules in Prometheus to avoid alert fatigue while ensuring critical issues are flagged."
        ],
        solution: "The Prometheus Operator was used to simplify the deployment and management of Prometheus and its ecosystem components on Kubernetes. ServiceMonitors were created to automatically discover and scrape metrics from services. Grafana dashboards were built using data from Prometheus, providing insights into application and cluster performance. Alertmanager was configured with routing and silencing rules to ensure alerts reached the correct on-call engineers."
      }
    }
  ];
