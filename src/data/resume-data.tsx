import {
  AgentsHarness,
  Agronomix,
  CrabShare,
  Librestream,
  GenovixMobile,
  MobilityHouse,
  OnTheStep,
  TradeShare,
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
    "Backend-leaning computer scientist interested in forward deployed engineering, AI-integrated systems (RAG, MCP), finance, energy systems, sustainability, and zero-knowledge cryptography.",
  headerBadges: [
    "Python",
    "Rust",
    "Node.js",
    "React",
    "Next.js",
    "Finance & markets",
    "Zero-knowledge cryptography",
  ],
  summary:
    "I have over 6 years of experience building and shipping products across cloud, mobile, and web stacks in team and self-directed environments. I am especially interested in forward deployment roles where I can pair my engineering skills with more customer-facing work, working closely with users to solve real problems in the field. I am also interested in building AI-integrated systems, including retrieval-augmented generation (RAG) and Model Context Protocol (MCP) tooling. Alongside engineering, I actively study equity markets and options, writing and sharing my thoughts on individual names and opportunities. I also have a strong interest in zero-knowledge proofs and privacy-preserving protocols, and I am working to deepen that knowledge through projects and structured study.",
  coreStack: [
    "Python",
    "Rust",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "AWS",
    "Docker",
  ],
  finance: {
    title: "Finance & markets",
    summary:
      "I follow public markets closely, researching businesses, modeling scenarios, and documenting equity and options theses. My Business Management minor and time at Value Partners Investments inform how I think about risk, operations, and software in financial contexts.",
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
          "Equity research with potential for asymetric long term returns on TradeShare.",
        type: "Equities" as const,
        url: "https://nchrisr.tradeshare.app/theses",
        status: "published" as const,
      },
      {
        title: "Published Option Play ideas",
        description:
          "Options plays with potential for asymetric medium to long term returns on TradeShare.",
        type: "Options" as const,
        url: "https://nchrisr.tradeshare.app/plays",
        status: "published" as const,
      },
    ],
    thesesEmptyMessage:
      "Investment theses on stocks and options plays will be linked here as they are published.",
  },
  zeroKnowledge: {
    title: "Zero-knowledge & cryptography",
    summary:
      "I am very interested in ZK proofs, circuits, and the protocols that use them for privacy and verifiable computation, from SNARK-based systems to application-layer designs. I would like to work on real-world ZK applications in the future.",
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
      "Circom",
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
      end: "Completed",
    },
    {
      link: "https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309",
      logo: Udacity,
      school: "Udacity",
      degree: "Blockchain Developer Nanodegree",
      start: "2021",
      end: "Completed",
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
      end: "October 2026",
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
        "Learned cloud computing and financial markets while supporting an investment management firm.",
        "Automated analysis of stock price data and trends by building a serverless system on Microsoft Azure using cloud storage, processing queues, Python, C#, and price history from a RESTful API.",
        "Automated daily and monthly processes using Logic Apps, Azure Functions, and Python scripts.",
      ],
    },
    {
      company: "OnTheStep",
      link: "https://www.onthestep.ca/",
      badges: [],
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
    {name: "C#", level: SkillLevel.High},
    {name: ".NET", level: SkillLevel.High},
    {name: "Git", level: SkillLevel.High},
    {name: "AWS", level: SkillLevel.High},
    {name: "Docker", level: SkillLevel.High},
    {name: "Data Structures and Algorithms", level: SkillLevel.High},
    {name: "Object-orientation", level: SkillLevel.High},
    {name: "Zero Knowledge Proofs", level: SkillLevel.Mid},
    {name: "Circom", level: SkillLevel.Mid},
    {name: "Blockchain", level: SkillLevel.Mid},
    {name: "Microsoft Azure", level: SkillLevel.Mid},
    {name: "Solidity", level: SkillLevel.Mid}
  ],
  aiCoding: {
    title: "AI-assisted coding",
    summary:
      "Proficient at shipping with coding agents: scoping work, delegating it, and reviewing every change before it lands. I also build the guardrails around them, like risk-tiered reviews and dependency checks.",
    tools: [
      { name: "Claude Code", kind: "terminal" as const },
      { name: "Codex", kind: "agent" as const },
      { name: "Cursor", kind: "editor" as const },
    ],
  },
  tinkering: [] as { name: string; level: number }[],
  projects: [
    {
      title: "TradeShare",
      techStack: ["TypeScript", "Next.js", "React", "Node.js"],
      description:
        "A multi-tenant web application I built to share investment theses, options plays, and market ideas. Paid users can query thesis details by prompting.",
      logo: TradeShare,
      link: {
        label: "TradeShare",
        href: "https://nchrisr.tradeshare.app",
      },
    },
    {
      title: "CrabShare",
      techStack: ["Rust", "axum", "tokio", "WebRTC", "JavaScript"],
      description:
        "A privacy-first file and text sharing tool for devices on the same network. Peers find each other by subnet and transfer directly over encrypted WebRTC; the server never sees what is shared.",
      openSource: true,
      logo: CrabShare,
      link: {
        label: "CrabShare",
        href: "https://github.com/nchrisr/CrabShare",
      },
    },
    {
      title: "Coding agents harness",
      techStack: ["Python", "TypeScript", "Shell", "Claude Code", "Codex", "Gemini CLI"],
      description:
        "A portable, repo-agnostic harness for coding agents: risk-tiered reviews, built-in dependency security checks and an upgrade loop that feeds lessons from every project back in.",
      openSource: true,
      logo: AgentsHarness,
      link: {
        label: "Coding agents harness",
        href: "https://github.com/nchrisr/coding-agents-harness",
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
      description: "A Saas platform for field service workers. I worked on this during my time at LibreStream Technologies",
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
  ],
  moments: [
    {
      kind: "pull-request" as const,
      label: "Merged PR",
      repo: "colbymchenry/codegraph",
      description:
        "Fixed the MCP server hiding tools named in an explicit CODEGRAPH_MCP_TOOLS allowlist on small repos.",
      url: "https://github.com/colbymchenry/codegraph/pull/3463",
      points: [
        {
          text: "On repos under 500 files, a small-repo filter silently dropped tools the allowlist named, so the listed and callable tools disagreed.",
          url: "https://github.com/colbymchenry/codegraph/issues/3462",
        },
        {
          text: "Changed the filter to trim only the default tool set, so an explicit allowlist always wins.",
          url: "https://github.com/colbymchenry/codegraph/pull/3463",
          badge: "Merged",
        },
        {
          text: "Added a regression test that fails without the fix and passes with it.",
        },
      ],
    },
    {
      kind: "issue" as const,
      label: "Bug report · fixed",
      repo: "pandas-dev/pandas",
      description:
        "Found and reported a data-corruption bug in how pandas shifts mixed-type DataFrames.",
      url: "https://github.com/pandas-dev/pandas/issues/26929",
      points: [
        {
          text: "DataFrame.shift(axis=1) moved text columns into the next text column instead of the adjacent one.",
          url: "https://github.com/pandas-dev/pandas/issues/26929",
          badge: "Fixed",
        },
        {
          text: "Narrowed the reproduction down with maintainers until the cause was clear.",
        },
        {
          text: "Shared a workaround for anyone hitting it before the fix landed.",
        },
      ],
    },
    {
      kind: "issue" as const,
      label: "3 bug reports · 2 fixed",
      repo: "Azure/azure-sdk-for-js",
      description:
        "Found and reported bugs in the Azure Communication Services web calling SDK.",
      url: "https://github.com/Azure/azure-sdk-for-js/issues?q=is%3Aissue+author%3Anchrisr",
      points: [
        {
          text: "A participant who joined muted still showed as unmuted to the caller.",
          url: "https://github.com/Azure/azure-sdk-for-js/issues/26255",
          badge: "Fixed",
        },
        {
          text: "The screen-share preview video was missing the camera preview's styling, attributes and event handling.",
          url: "https://github.com/Azure/azure-sdk-for-js/issues/27475",
          badge: "Fixed",
        },
        {
          text: "Removing a participant who had not yet connected left them in the call.",
          url: "https://github.com/Azure/azure-sdk-for-js/issues/25909",
        },
      ],
    },
    {
      kind: "issue" as const,
      label: "Regression report · resolved",
      repo: "xamarin/xamarin-macios",
      description:
        "Found and helped resolve an iOS build regression in .NET MAUI.",
      url: "https://github.com/xamarin/xamarin-macios/issues/19229",
      points: [
        {
          text: "Building a MAUI iOS app from Windows, paired to an Apple silicon Mac, failed with missing arm64 symbols once a native-binding package was added.",
          url: "https://github.com/xamarin/xamarin-macios/issues/19229",
        },
        {
          text: "Supplied build logs and repro details until the maintainer reproduced it and confirmed the regression.",
        },
        {
          text: "Tested the proposed workarounds and confirmed the one that worked while a fix was prepared.",
          badge: "Resolved",
        },
      ],
    },
  ]
}

export {RESUME_DATA, SkillLevel};
