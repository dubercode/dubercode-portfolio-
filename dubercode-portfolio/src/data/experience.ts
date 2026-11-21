
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: "Globant",
    role: "Senior DevOps Engineer / Cloud Engineer / Agentic AI Engineer",
    period: "May 2025 – Jun 2026",
    description:
      "Cloud infrastructure, platform engineering and AI-powered automation across multicloud environments.",
    achievements: [
      "Supported cloud infrastructure across AWS, Azure and GCP using Terraform and Git-based IaC workflows.",
      "Created Kubernetes manifests and GitOps deployment workflows with ArgoCD.",
      "Designed and implemented a Relay Proxy for the LaunchDarkly feature flag platform.",
      "Designed AI solutions using autonomous agents and LLMs to optimize business processes and support decision-making."
    ],
    technologies: [
      "Terraform", "Azure", "AWS", "GCP", "GitHub Actions",
      "Kubernetes", "ArgoCD", "Agentic AI", "LLMs"
    ]
  },
  {
    company: "Kyndryl Colombia",
    role: "Senior Associate DevOps Engineer",
    period: "Aug 2023 – May 2025",
    description:
      "Enterprise DevOps automation, cloud infrastructure and DataOps delivery.",
    achievements: [
      "Developed CI/CD pipelines, including pipelines for DataOps workloads, using Azure DevOps and GitHub Actions.",
      "Managed Infrastructure as Code and cloud configuration automation using Terraform and Ansible.",
      "Automated environments and supported development teams with deployment and configuration troubleshooting.",
      "Collaborated with SRE, database administration and operations teams."
    ],
    technologies: [
      "Azure Cloud", "Azure DevOps", "GitHub Actions",
      "Terraform", "Ansible", "DataOps", "CI/CD"
    ]
  },
  {
    company: "Aria PSW",
    role: "Senior Azure DevOps Engineer",
    period: "Sep 2022 – Jul 2023",
    description:
      "Azure infrastructure automation and reusable Infrastructure as Code templates.",
    achievements: [
      "Managed Azure resources using modular Bicep templates, including virtual machines.",
      "Standardized infrastructure with reusable Terraform configurations.",
      "Defined version-control strategies and collaborated with software development teams."
    ],
    technologies: [
      "Azure", "Azure DevOps", "Bicep",
      "Terraform", "Python", "AWS", "EC2", "S3", "IAM"
    ]
  },
  {
    company: "Cirion Technologies (CenturyLink)",
    role: "DevOps Architect",
    period: "Nov 2020 – Aug 2022",
    description:
      "Network automation, software-defined networking and infrastructure architecture.",
    achievements: [
      "Defined Git version-control strategies for software-defined networking solutions.",
      "Configured Cisco routing and switching equipment and supported last-mile service delivery."
    ],
    technologies: [
      "Git", "Python", "Cisco ACI", "SDN",
      "MPLS", "Juniper", "Fortinet"
    ]
  },
  {
    company: "CenturyLink",
    role: "Service Delivery Manager",
    period: "Nov 2019 – Nov 2020",
    description:
      "Managed IT and telecommunications service delivery in SLA-driven environments.",
    achievements: [
      "Managed service delivery, SLA compliance, incidents and technical escalations.",
      "Coordinated IPVPN installation, support and cloud connectivity services."
    ],
    technologies: [
      "ITIL", "SLA Management", "IPVPN",
      "Incident Management", "Cloud Connectivity"
    ]
  },
  {
    company: "ITS InfoComunicaciones",
    role: "Infrastructure Engineer",
    period: "Sep 2016 – Nov 2019",
    description:
      "Enterprise network infrastructure and hybrid connectivity operations.",
    achievements: [
      "Supported on-premise networks, IP addressing and subnetting.",
      "Configured BGP for WAN connectivity and provided second-level technical support."
    ],
    technologies: [
      "Cisco", "VMware", "Fortinet", "AWS",
      "BGP", "WAN", "IP Networking"
    ]
  },
  {
    company: "VTU de Colombia",
    role: "Network Engineer",
    period: "Aug 2014 – Jul 2016",
    description:
      "Network and technology support in enterprise operational environments.",
    achievements: [
      "Provided network and technology support.",
      "Investigated and escalated incidents with SRE, infrastructure, security and database teams."
    ],
    technologies: [
      "Networking", "Infrastructure Operations",
      "Incident Management", "Technical Support"
    ]
  }
];
