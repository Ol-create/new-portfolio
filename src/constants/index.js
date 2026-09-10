
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
    python,
    nextjs,
    postgresql,
    aws,
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
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
      name: "PostgreSQL",
      icon: postgresql,
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
    {
      name: "AWS",
      icon: aws,
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
        "A HealthTech ecosystem that turns wearable biometric data into real-time student wellbeing scores. A dedicated Python/FastAPI microservice serves a scikit-learn model — trained on heart rate, EDA, temperature, and motion data — for stress prediction, backing a Node.js/Express/Prisma/PostgreSQL API that powers a React Native (Expo) app for students and counselors and a Next.js admin dashboard for schools.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
      ],
      image: limahealth,
      source_code_link: "#",
      demo_on_request: true,
    },
    {
      name: "TrueVoice",
      description:
        "A B2B voice-biometric verification API: client companies enroll and verify users' voices through a challenge-response flow, guarded by an ensemble anti-spoofing pipeline (AASIST + LCNN + CQCC-GMM) and SpeechBrain speaker embeddings. Supports multiple languages and per-company API tokens, rate-limited and deployed serverless on AWS Lambda.",
      tags: [
        {
          name: "fastapi",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "green-text-gradient",
        },
        {
          name: "speechbrain",
          color: "pink-text-gradient",
        },
        {
          name: "supabase",
          color: "blue-text-gradient",
        },
        {
          name: "aws-lambda",
          color: "green-text-gradient",
        },
      ],
      image: truevoice,
      source_code_link: "#",
      demo_on_request: true,
    },
    {
      name: "Itan Global Publishing",
      description:
        "Four Next.js frontends (Author/Publish, Reader, Audiobook, Admin) for a live ebook and audiobook publishing platform, built from Figma designs and backed by a Rails API. Covers author onboarding, KYC, Paystack payouts, Sanity-CMS-driven content, and a shadcn/Radix UI component system.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "shadcn-ui",
          color: "pink-text-gradient",
        },
        {
          name: "paystack",
          color: "blue-text-gradient",
        },
        {
          name: "sentry",
          color: "green-text-gradient",
        },
      ],
      image: itanpublishing,
      source_code_link: "#",
      live_links: [
        { label: "Authors", link: "https://publish.itan.app/" },
        { label: "Readers", link: "http://itan.app/" },
      ],
    },
    {
      name: "Leddar",
      description:
        "A three-sided marketplace for premium custom leather production — brands request and pay for pieces via Paystack, KYC-verified artisans (NIN/CAC/address checks via QoreID) produce them and upload sample/production videos to S3, and admins manage job assignment, video review, and staged escrow payouts, with PDF invoices and a Swagger-documented API across three Next.js portals and a Node/Express/Prisma backend.",
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
          name: "express",
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
      live_links: [
        { label: "Landing", link: "https://myleddar.com/" },
        { label: "Artisan", link: "https://artisan.myleddar.com/" },
        { label: "Brand", link: "https://brand.myleddar.com/" },
      ],
    },
  ];

  export { services, technologies, experiences, projects };
