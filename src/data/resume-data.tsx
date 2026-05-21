import {
  Agronomix,
  Librestream,
  GenovixMobile,
  MobilityHouse,
  OnTheStep,
  UofM,
  Udacity,
  ValuePartners
} from "@/images/logos";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const SkillLevel = {
  High: 1,
  Mid: 2,
  Low: 3
};

const RESUME_DATA = {
  name: "RODNEY N-CHRIS",
  initials: "RN",
  location: "Canada",
  locationLink: "https://www.google.com/maps/place/Canada",
  about:
    "Backend-leaning computer scientist interested in forward deployed engineering, finance, energy systems, sustainability, and zero-knowledge cryptography.",
  headerBadges: [
    "Python",
    "Rust",
    "Finance & markets",
    "Zero-knowledge cryptography",
  ],
  summary:
    "I have over 6 years of experience shipping products across cloud, mobile, and web stacks in team and self-directed environments. I am especially interested in forward deployment roles where I can pair backend-leaning engineering with more customer-facing work, working closely with users to solve real problems in the field. Alongside engineering, I actively study equity markets and options, writing theses on individual names and structures, and I am deepening my work in zero-knowledge proofs and privacy-preserving protocols through hands-on projects and structured study.",
  coreStack: [
    "Python",
    "Rust",
    "TypeScript",
    "AWS",
    "Docker",
  ],
  finance: {
    title: "Finance & markets",
    summary:
      "I follow public markets closely and treat investing as a discipline: researching businesses, modeling scenarios, and documenting equity and options theses. My Business Management minor and time at Value Partners Investments inform how I think about risk, operations, and software in financial contexts.",
    topics: [
      "Equity research",
      "Options & derivatives",
      "Thesis-driven investing",
      "Risk & portfolio thinking",
      "Financial software",
    ],
    theses: [
      {
        title: "Published investment theses",
        description:
          "Versioned equity research on TradeShare (e.g. ASMT, ITRI, PLTR, NRG).",
        type: "Equity" as const,
        url: "https://nchrisr.tradeshare.app/theses",
        status: "published" as const,
      },
      {
        title: "DNN $3 Call (Jan 2028)",
        description:
          "Long-dated uranium LEAP options play on Denison Mines (Phoenix ISR, supply deficit thesis).",
        type: "Options" as const,
        url: "https://nchrisr.tradeshare.app/plays/13",
        status: "published" as const,
      },
    ],
    thesesEmptyMessage:
      "Investment theses on stocks and options plays will be linked here as they are published.",
  },
  zeroKnowledge: {
    title: "Zero-knowledge & cryptography",
    summary:
      "I am focused on ZK proofs, circuits, and the protocols that use them for privacy and verifiable computation, from SNARK-based systems to application-layer designs. My Real Estate marketplace project explored ZK in a Solidity context, and I am now leveling up through dedicated study and implementation work.",
    bootcamp: {
      label: "Upcoming",
      name: "RareSkills ZK Bootcamp",
      url: "https://www.rareskills.io/zk-bootcamp",
    },
    topics: [
      "ZK proofs & circuits",
      "ZK-SNARKs / STARKs",
      "Privacy protocols",
      "Rust",
      "Solidity",
    ],
  },
  avatarUrl: "",
  personalWebsiteUrl: "https://nchrisr.github.io/web-cv/",
  contact: {
    email: "nchrisr3@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nchrisr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rodney-n-88a67b181/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      link: "https://www.umanitoba.ca/",
      logo: UofM,
      school: "University of Manitoba",
      degree: "Bachelor's Degree in Computer Science with a minor in Business Management",
      start: "2015",
      end: "2019",
    },
    {
      link: "https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309",
      logo: Udacity,
      school: "Udacity",
      degree: "Blockchain Developer Nanodegree",
      start: "2021",
      end: "2022",
    }
  ],
  work: [
    {
      company: "The Mobility House (North America)",
      link: "https://www.mobilityhouse.com/",
      badges: ["Full-time"],
      title:
        "Backend Software Engineer, Implementation & Solutions (Local Controller Specialist)",
      logo: MobilityHouse,
      start: "September 2024",
      end: "Present",
      highlights: [
        "Partner with stakeholders to troubleshoot charger deployments, guide setup, and support integration as an implementation-focused engineer.",
        "Develop and optimize core OCPP 1.6/2.x modules for charger integrations.",
        "Build and maintain Docker-containerized Rust and Python services for reliable EV charging and load management.",
        "Improve charger integration stability across multiple hardware vendors using ELK-based root cause analysis.",
        "Collaborate on V2G pilot features: bidirectional power flow, monitoring, grid export controls, and local controller decision logic.",
      ],
    },
    {
      company: "LibreStream Technologies",
      link: "https://librestream.com/",
      badges: ["Remote", "Full-time"],
      title: "Software Developer",
      logo: Librestream,
      start: "October 2022",
      end: "January 2024",
      highlights: [
        "Collaborated with multiple agile teams to plan, develop, and launch Onsight NOW, a SaaS product for field service workers.",
        "Developed and maintained scalable backend infrastructure to support AI assistant features.",
        "Increased leads for sales teams by building user-friendly, responsive interfaces for remote collaboration and AI assistant interactions using React, HTML, CSS, and JavaScript.",
        "Fixed stale interface issues and reduced web-app errors by implementing cache-busting with Webpack config and content hashes.",
        "Implemented web and mobile calling features and bug fixes from customer feedback using cloud-based WebRTC (Microsoft Azure), .NET, C#, and JavaScript.",
      ],
    },
    {
      company: "Agronomix Software Inc.",
      link: "https://www.agronomix.com/",
      badges: ["Hybrid", "Full-time"],
      title: "Software Developer/Mobile and Cloud Implementation Consultant",
      logo: Agronomix,
      start: "September 2019",
      end: "December 2022",
      highlights: [
        "Took Genovix Mobile from beta to production on Android, iOS, and UWP using C# and Xamarin.",
        "Improved data selection time on Genovix Mobile by 30% by restructuring the AWS backend.",
        "Improved data handling and loading efficiency by up to 50% through algorithmic and architectural changes.",
        "Set up continuous deployment and integration for Genovix Mobile using Azure DevOps pipelines, reducing release time from days to a few hours.",
        "Proposed and implemented new features on Genovix Mobile.",
        "Provided support for existing customers and helped with setup and implementation for new customers.",
      ],
    },
    {
      company: "Centre for Earth Observation Science ",
      link: "https://umanitoba.ca/earth-observation-science/",
      badges: [],
      title: "Data Analyst",
      logo: UofM,
      start: "May 2018",
      end: "August 2019",
      highlights: [
        "Wrote Python scripts and built ETL tools to standardize datasets across research teams.",
      ],
    },
    {
      company: "Value Partners Investments",
      link: "https://www.valuepartnersinvestments.ca/",
      badges: [],
      title: "Junior Developer",
      logo: ValuePartners,
      start: "May 2017",
      end: "December 2017",
      highlights: [
        "Built serverless infrastructure on Python, C#, and Microsoft Azure.",
        "Automated daily processes during migration from in-house servers to the cloud.",
      ],
    },
    {
      company: "OnTheStep",
      link: "https://www.onthestep.ca/",
      badges: ["Part Time", "Contract"],
      title: "Software Developer, Founding Team",
      logo: OnTheStep,
      start: "June 2019",
      end: "February 2020",
      highlights: [
        "Launched and maintained OnTheStep's mobile app as part of the founding team.",
        "Implemented features across Node.js, TypeScript, Express.js, and React Native.",
      ],
    },
  ],
  skills: [
    {name: "Python", level: SkillLevel.High},
    {name: "Rust", level: SkillLevel.High},
    {name: "Typescript/Javascript", level: SkillLevel.High},
    {name: "HTML", level: SkillLevel.High},
    {name: "CSS", level: SkillLevel.High},
    {name: "SQL", level: SkillLevel.High},
    {name: "Next.js", level: SkillLevel.High},
    {name: "React", level: SkillLevel.High},
    {name: "Node.js", level: SkillLevel.High},
    {name: "Express.js", level: SkillLevel.High},
    {name: "C#", level: SkillLevel.High},
    {name: ".NET", level: SkillLevel.High},
    {name: "Git", level: SkillLevel.High},
    {name: "AWS", level: SkillLevel.High},
    {name: "Docker", level: SkillLevel.High},
    {name: "Data Structures and Algorithms", level: SkillLevel.High},
    {name: "Object-orientation", level: SkillLevel.High},
    {name: "Agile", level: SkillLevel.High},
    {name: "Zero Knowledge Proofs", level: SkillLevel.Mid},
    {name: "Blockchain", level: SkillLevel.Mid},
    {name: "React Native", level: SkillLevel.Mid},
    {name: "Microsoft Azure", level: SkillLevel.Mid},
    {name: "Solidity", level: SkillLevel.Mid},
    {name: "MongoDB", level: SkillLevel.Mid}
  ],
  tinkering: [] as { name: string; level: number }[],
  projects: [
    {
      title: "TradeShare",
      techStack: [
        "Web application",
        "Investment research",
        "Thesis publishing",
        "Options tracking",
      ],
      description:
        "A web application where I share versioned investment theses, options plays, and market ideas.",
      link: {
        label: "TradeShare",
        href: "https://nchrisr.tradeshare.app",
      },
    },
    {
      title: "Onsight NOW",
      techStack: [
        "SaaS",
        "JavaScript",
        "Blazor WASM",
        "Microsoft Azure",
        "HTML",
        "CSS",
        "WebRTC"
      ],
      description: "A Saas platform for field service workers.",
      logo: Librestream,
      link: {
        label: "Onsight NOW",
        href: "https://librestream.com/onsight-now/",
      },
    },
    {
      title: "Genovix Mobile",
      techStack: [
        "C#",
        "Xamarin",
        ".NET",
        "SQLite",
        "SQL",
        "AWS Lambda",
        "AWS S3",
        "Android",
        "iOS"
      ],
      description:
        "A cross-platform mobile application to support collection, and analysis of plant breeding data.",
      logo: GenovixMobile,
      link: {
        label: "Genovix",
        href: "https://apps.apple.com/ca/app/genovix-mobile/id1517751271",
      },
    },
    {
      title: "Real Estate marketplace",
      techStack: [
        "Solidity",
        "Javascript",
        "Typescript",
        "Zero Knowledge proofs"
      ],
      description:
        "A decentralized Real Estate ownership transfer marketplace",
      link: {
        label: "Real-Estate Marketplace",
        href: "https://github.com/nchrisr/Realestate-Marketplace",
      },
    }
  ],
  moments: [
    {Description: "Found and reported a bug in the Python Pandas module.", url: "https://github.com/pandas-dev/pandas/issues/26929"},
    {Description: "Found and helped resolve an ios build issue with .NET MAUI", url: "https://github.com/xamarin/xamarin-macios/issues/19229"},
  ]
}

export {RESUME_DATA, SkillLevel};
