import {
  Agronomix,
  Librestream,
  GenovixMobile,
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
    "Computer scientist with wide a range of skills, interests and experience. Currently focused on full-stack development.",
  summary:
    "I have over 5 years of experience working with different technology stacks in team and self-directed environments, and I have taken part in successfully seeing multiple products/projects from inception to release. I also have a strong understanding of the Agile methodology, Data structures and algorithms, as well as Object-oriented design, and I learn and pickup new technologies and tools quickly.",
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
      company: "LibreStream Technologies",
      link: "https://librestream.com/",
      badges: ["Remote", "Full-time"],
      title: "Software Developer",
      logo: Librestream,
      start: "October 2022",
      end: "January 2024",
      description:
        "Leveraged Cloud based WebRTC technology, .NET Runtime, C#, Javascript and WASM in Collaboration with multiple agile teams to build and launch a Onsight NOW. A SaaS product equipped with AI assistant features for supporting field service workers.",
    },
    {
      company: "Agronomix Software Inc.",
      link: "https://www.agronomix.com/",
      badges: ["Hybrid", "Full-time"],
      title: "Software Developer/Mobile and Cloud Implementation Consultant",
      logo: Agronomix,
      start: "September 2019",
      end: "December 2022",
      description:
        "Leveraged SQLite, C# and AWS cloud infrastructure to build, manage and improve Genovix Mobile. A client heavy cross platform (Android, ios and UWP) Mobile application for collecting and managing plant breeding data in low bandwith scenarios. Also handled setup and support for clients on relevant issues.",
    },
    {
      company: "Centre for Earth Observation Science",
      link: "https://umanitoba.ca/earth-observation-science/",
      badges: [],
      title: "Data Analyst",
      logo: UofM,
      start: "May 2018",
      end: "August 2019",
      description:
        "Writing Python scripts and building ETL tools to standardize and manage datasets across research teams.",
    },
    {
      company: "Value Partners Investments",
      link: "https://www.valuepartnersinvestments.ca/",
      badges: [],
      title: "Junior Developer",
      logo: ValuePartners,
      start: "May 2017",
      end: "December 2017",
      description: "Leveraged Python, C# and Microsoft Azure to build serverless infrastructure and automate daily processes as part of a migration from in-house servers to cloud infrastructure.",
    },
    {
      company: "OnTheStep",
      link: "https://www.onthestep.ca/",
      badges: ["Part Time", "Contract"],
      title: "Software Developer",
      logo: OnTheStep,
      start: "June 2019",
      end: "February 2020",
      description: "Working with an Agile Startup team to build back-end and front-end features for OnTheStep's in-house customer success system using node.js, Express, Angular and Typescript.",
    },
  ],
  skills: [
    {name: "C#", level: SkillLevel.High},
    {name: "Xamarin/MAUI", level: SkillLevel.High},
    {name: ".NET", level: SkillLevel.High},
    {name: "Git", level: SkillLevel.High},
    {name: "MongoDB", level: SkillLevel.Mid},
    {name: "Java", level: SkillLevel.Mid},
    {name: "HTML", level: SkillLevel.High},
    {name: "CSS", level: SkillLevel.High},
    {name: "Microsoft Azure", level: SkillLevel.High},
    {name: "AWS", level: SkillLevel.High},
    {name: "Android SDK", level: SkillLevel.High},
    {name: "SQL", level: SkillLevel.Mid},
    {name: "Typescript", level: SkillLevel.High},
    {name: "Node.js", level: SkillLevel.High},
    {name: "Data Structures and Algorithms", level: SkillLevel.High},
    {name: "Object-orientation", level: SkillLevel.High},
    {name: "Agile", level: SkillLevel.High},
    {name: "WebRTC", level: SkillLevel.High},
    {name: "Solidity", level: SkillLevel.Mid},
    {name: "Blockchain", level: SkillLevel.Mid},
    {name: "Ganache", level: SkillLevel.Mid},
    {name: "Next", level: SkillLevel.Mid},
    {name: "Express", level: SkillLevel.High},
  ],
  tinkering: [
    {name: "Rust", level: SkillLevel.Low},
    {name: "React Native", level: SkillLevel.Low},
    {name: "Docker", level: SkillLevel.Low},
    {name: "Zero Knowledge Proofs", level: SkillLevel.Low},
  ],
  projects: [
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
        "AWS S3"
      ],
      description:
        "Cross platform mobile application to support collection, and analysis of plat breeding data.",
      logo: GenovixMobile,
      link: {
        label: "Genovix",
        href: "https://apps.apple.com/ca/app/genovix-mobile/id1517751271",
      },
    },
    {
      title: "Real Estate Marketplace",
      techStack: [
        "Solidity",
        "Javascript",
        "Zero Knowledge proofs"
      ],
      description:
        "Real Estate ownership transfer marketplace",
      link: {
        label: "Real Estate Marketplace",
        href: "https://github.com/nchrisr/Realestate-Marketplace",
      },
    }
  ],
  moments: [
    {Description: "Found and reported a bug in the Python Pandas module.", url: "https://github.com/pandas-dev/pandas/issues/26929"},
    {Description: "Found and helped resolve an ios build issue with MAUI", url: "https://github.com/xamarin/xamarin-macios/issues/19229"},
  ]
}

export {RESUME_DATA, SkillLevel};
