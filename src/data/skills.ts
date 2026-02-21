const skills = [
  {
    name: "AWS",
    icon: "AWSIcon",
    description: "Amazon Web Services — cloud platform for scalable infrastructure and managed services.",
    details: [
      "Design and operate VPCs, networking, and security groups",
      "Provision compute with EC2, ECS and serverless with Lambda",
      "Use managed services: RDS, S3, IAM, CloudWatch, and Route 53",
      "Cost optimization and tagging strategies",
    ],
  },
  {
    name: "GCP",
    icon: "GCPIcon",
    description: "Google Cloud Platform — cloud services focused on data, ML, and scalable infrastructure.",
    details: [
      "Deploy and manage clusters on GKE",
      "Use Cloud Storage, Cloud SQL and BigQuery for data workloads",
      "Configure IAM, networking and load balancing",
      "Integrate with Cloud Build and Artifact Registry",
    ],
  },
  {
    name: "Docker",
    icon: "DockerIcon",
    description: "Container runtime and tooling for building, shipping, and running containerized applications.",
    details: [
      "Build reproducible images with multi-stage Dockerfiles",
      "Compose multi-service local development setups",
      "Apply image scanning and minimal base images",
      "Optimize layering and caching for faster CI builds",
    ],
  },
  {
    name: "Kubernetes",
    icon: "KubernetesIcon",
    description: "Container orchestration system for deploying, scaling, and operating containerized workloads.",
    details: [
      "Design and operate clusters (EKS/GKE/AKS)",
      "Author and maintain Helm charts and Operators",
      "Implement RBAC, network policies and pod security",
      "Manage autoscaling, canary deployments and rollbacks",
    ],
  },
  {
    name: "Terraform",
    icon: "TerraformIcon",
    description: "Infrastructure-as-Code tool for provisioning cloud and on-prem resources declaratively.",
    details: [
      "Write reusable modules and follow state management best practices",
      "Use workspaces and remote backends (S3, GCS, or Terraform Cloud)",
      "Plan/apply workflows in CI with policy checks",
      "Manage drift detection and resource lifecycle",
    ],
  },
  {
    name: "Ansible",
    icon: "AnsibleIcon",
    description: "Agentless automation for configuration management, provisioning, and orchestration.",
    details: [
      "Author playbooks and roles for repeatable server configuration",
      "Use Ansible Vault for secrets and credentials",
      "Integrate with CI/CD to automate deploy tasks",
      "Manage idempotency and inventory across environments",
    ],
  },
  {
    name: "Jenkins",
    icon: "JenkinsIcon",
    description: "Extensible automation server for building pipelines and integrating tooling across the SDLC.",
    details: [
      "Design pipeline-as-code with Jenkinsfiles",
      "Run agents in containers and scale build farms",
      "Integrate with SCM, artifact registries, and notification systems",
      "Secure credentials and apply least-privilege for build steps",
    ],
  },
  {
    name: "Git",
    icon: "GitIcon",
    description: "Distributed version control system for source code management and collaboration.",
    details: [
      "Branching strategies (Git Flow, trunk-based development)",
      "Code review workflows and pull request hygiene",
      "Use hooks and CI integrations for pre-commit checks",
      "Resolve merge conflicts and perform rebases safely",
    ],
  },
  {
    name: "Python",
    icon: "PythonIcon",
    description: "General-purpose programming language used for scripting, automation, and backend services.",
    details: [
      "Write automation scripts and CLIs for DevOps tasks",
      "Build web services with FastAPI or Flask",
      "Author libraries and maintain unit tests",
      "Work with virtual environments and dependency management",
    ],
  },
  {
    name: "Prometheus",
    icon: "PrometheusIcon",
    description: "Monitoring system and time-series database for scraping and alerting on metrics.",
    details: [
      "Instrument applications with client libraries to expose metrics",
      "Design scrape targets and retention policies",
      "Write alerting rules and integrate with Alertmanager",
      "Scale by federation and remote write for long-term storage",
    ],
  },
  {
    name: "Grafana",
    icon: "GrafanaIcon",
    description: "Visualization and analytics platform for metrics, logs, and traces.",
    details: [
      "Build dashboards and panels for observability",
      "Connect data sources: Prometheus, Loki, Elasticsearch",
      "Configure alerts and annotations for incident context",
      "Manage teams, permissions, and provisioning via code",
    ],
  },
]

export default skills
