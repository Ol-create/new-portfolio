
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    limahealthLogo,
    truevoiceLogo,
    itanLogo,
    microverseLogo,
    limahealth,
    truevoice,
    itanpublishing,
    leddar,
    threejs,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend & API Engineer",
      icon: backend,
    },
    {
      title: "AI & Security Engineer",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Mentor (Volunteer)",
      company_name: "Microverse",
      icon: microverseLogo,
      iconBg: "#383E56",
      date: "Feb 2022 - Feb 2025",
      points: [
        "Mentored junior web developers, providing technical support through code reviews.",
        "Proposed improvements to code organization to improve code quality and overall performance.",
        "Provided advice and tips on how to maintain motivation to sustain longevity in the program.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Itan Global Publishing",
      icon: itanLogo,
      iconBg: "#E6DEDD",
      date: "Feb 2025 - Present",
      points: [
        "Built and deployed three front-end apps (Author, Reader, Admin) for a publishing platform.",
        "Converted Figma designs into responsive, scalable web applications.",
        "Implemented author onboarding, KYC, bank verification, and book uploads.",
        "Integrated Amazon S3 for file storage and deployed/maintained apps using AWS Amplify.",
      ],
    },
    {
      title: "Full-Stack Software Engineer",
      company_name: "TrueVoice",
      icon: truevoiceLogo,
      iconBg: "#383E56",
      date: "Sept 2025 - Nov 2025",
      points: [
        "Built an AI-powered voice authentication and verification platform to prevent identity fraud using biometric voice analysis, with Python, FastAPI, PyTorch, NumPy, SQLAlchemy, PostgreSQL, Docker, Nginx, and AWS.",
        "Implemented speaker embedding and voice matching pipelines for secure voice enrollment and verification.",
        "Integrated liveness detection mechanisms to mitigate replay and synthetic voice attacks.",
        "Handled audio ingestion, format normalization, transcription, and embedding extraction for reliable cross-device performance.",
        "Deployed and managed the system on AWS, configuring compute, networking, and security controls for production readiness.",
      ],
    },
    {
      title: "Full-Stack Software Engineer",
      company_name: "Lima Health",
      icon: limahealthLogo,
      iconBg: "#E6DEDD",
      date: "Sept 2025 - Present",
      points: [
        "Built a comprehensive HealthTech ecosystem that monitors student well-being through wearable data integration and AI-driven risk assessment, using Node.js, TypeScript, Next.js, React Native, PostgreSQL, Prisma, Zod, AWS, Fitbit API, and Stripe.",
        "Developed an AI risk-scoring engine to analyze health metrics, calculate user risk levels, and trigger real-time alerts to counselors for high-priority interventions.",
        "Engineered a multi-platform ecosystem, including mobile apps for Students and Counselors and web dashboards for Schools and Super Admins.",
        "Integrated Fitbit APIs for biometric data sync and Stripe for secure subscription lifecycles and transactions.",
        "Architected a secure backend with Clean Architecture, JWT authentication, email verification, and hierarchical RBAC.",
        "Deployed transactional messaging via AWS SES and enforced data integrity across RESTful endpoints using Zod schema validation.",
      ],
    },
  ];

  const projects = [
    {
      name: "Lima Health",
      description:
        "A comprehensive HealthTech ecosystem that monitors student well-being through wearable data integration and an AI-driven risk engine, with mobile apps for students/counselors and dashboards for schools and super admins.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "react-native",
          color: "pink-text-gradient",
        },
        {
          name: "postgresql",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
      ],
      image: limahealth,
      source_code_link: "#",
    },
    {
      name: "TrueVoice",
      description:
        "An AI-powered voice authentication and verification platform that prevents identity fraud using biometric voice analysis, speaker embedding, voice matching, and liveness/anti-spoofing detection.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "green-text-gradient",
        },
        {
          name: "pytorch",
          color: "pink-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "aws",
          color: "green-text-gradient",
        },
      ],
      image: truevoice,
      source_code_link: "#",
    },
    {
      name: "Itan Global Publishing",
      description:
        "Three front-end applications (Author, Reader, Admin) for a publishing platform, built from Figma designs, with author onboarding, KYC, bank verification, book uploads, and S3-backed file storage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma-to-code",
          color: "green-text-gradient",
        },
        {
          name: "aws-amplify",
          color: "pink-text-gradient",
        },
      ],
      image: itanpublishing,
      source_code_link: "#",
    },
    {
      name: "Leddar",
      description:
        "A three-sided marketplace for premium custom leather production — brands request and pay for pieces, KYC-verified artisans produce and upload sample/production videos, and admins manage job assignment, video review, and staged escrow payouts end-to-end.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "pink-text-gradient",
        },
        {
          name: "prisma",
          color: "blue-text-gradient",
        },
        {
          name: "paystack",
          color: "green-text-gradient",
        },
      ],
      image: leddar,
      source_code_link: "#",
    },
  ];

  export { services, technologies, experiences, projects };
