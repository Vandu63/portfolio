import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Vandana Yadav — AI/ML Engineer & MTech Student",
  author: "Vandana Yadav",
  description:
    "MTech student specializing in Artificial Intelligence & Machine Learning, passionate about building intelligent systems using Python, deep learning, and data-driven solutions.",
  lang: "en",
  siteLogo: "/avatar-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "/projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "X (Twitter)", href: "https://x.com/yourhandle" },
    { text: "Github", href: "https://github.com/vandu63" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/yourprofile/",
    },
  ],
  socialImage: "/og-image.png",
  canonicalURL: "https://yourportfolio.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Vandana Yadav",
    specialty: "AI/ML Engineer",
    summary: `Currently pursuing MTech in Artificial Intelligence & Machine Learning. Passionate about building intelligent systems, exploring deep learning, and applying Python-powered solutions to solve real-world problems.`,
    email: "vandana33yadav@gmail.com",
  },
  experience: [
    {
      company: "Company Name",
      position: "Backend Developer",
      startDate: "Nov 2025",
      endDate: "Present",
      summary: [
        "Building Agent AI workflows, integrating AI models, and orchestrating asynchronous tasks using Node.js and NestJS while maintaining clean architecture.",
        "Working in agile environments helped me prioritize tasks effectively, deliver incremental improvements, and adapt quickly to evolving AI-driven requirements.",
        "Strengthened my ability to debug complex AI-related issues, from model response inconsistencies to performance bottlenecks in agent pipelines.",
      ],
    },
    {
      company: "Previous Company",
      position: "Node.js Developer",
      startDate: "Sept 2023",
      endDate: "May 2025",
      summary: [
        "Gained hands-on experience in building REST APIs, Websockets using Node.js and NestJS, implementing clean architecture, and integrating third-party services.",
        "Working in agile environments taught me how to prioritize tasks, deliver iteratively, and adapt to changing requirements.",
        "Sharpened ability to troubleshoot complex issues, whether it was a bug in the code or a performance bottleneck.",
      ],
    },
  ],
  projects: [
    {
      name: "Project One",
      summary:
        "A full-featured AI-powered platform with advanced search, tracking, and personalized recommendations.",
      linkPreview: "https://yourproject.com",
      linkSource: "https://github.com/yourusername",
      image: "/project1.png",
      slug: "project-one",
      description:
        "A robust, full-featured platform engineered for enthusiasts. It integrates AI-driven semantic queries, allowing users to find content via natural language descriptions. The platform empowers users to curate their personal journey with dedicated lists, while an intelligent recommendation engine analyzes behavior to suggest perfectly matched content.",
      myRole: "Full Stack Developer (MERN) | Self-initiated side project",
      techStack: [
        "NestJS",
        "TypeScript",
        "Embeddings",
        "MongoDB Atlas",
        "OpenAI API",
        "Render",
        "Vercel",
        "React",
        "Tailwind CSS",
        "Docker",
      ],
      features: [
        "AI-Powered Semantic Search: Find content using natural language queries.",
        "Smart Recommendation Engine: Personalized suggestions based on your behavior.",
        "Comprehensive Tracking: Manage your lists effortlessly.",
        "Instant Availability Check: Check content availability with a single click.",
        "Modern Responsive Design: A premium, mobile-optimized interface.",
        "Secure User Profiles: Account management with data sync across devices.",
        "Sign in with Google: Seamless authentication experience.",
      ],
    },
    {
      name: "Project Two",
      summary:
        "A SaaS platform for productivity that automates workflows using AI.",
      linkPreview: "https://anotherproject.com",
      linkSource: "https://github.com/yourusername",
      image: "/project2.png",
      slug: "project-two",
      description:
        "An innovative SaaS platform that transforms processes using AI. The platform helps organizations and individuals convert their workflows into easily digestible steps, which can then be assigned to organization members as tasks to automate and enhance their productivity.",
      myRole: "Backend Developer (Node.js/NestJS)",
      techStack: [
        "NestJS",
        "Express.js",
        "MongoDB",
        "OpenAI API",
        "FFmpeg",
        "AWS S3",
        "Stripe",
        "Node-cron",
        "JWT",
        "Firebase Messaging",
      ],
      features: [
        "AI-powered analysis and transcription",
        "Automatic generation of step-by-step guides",
        "Real-time processing status updates",
        "Multi-format export options (PDF, HTML)",
        "User dashboard with task management",
        "Organization member management",
        "Subscription-based pricing model",
      ],
      challenges: [
        "Managing AI model memory for large inputs to generate accurate responses",
        "Processing large files efficiently",
        "Implementing accurate AI transcription and content analysis",
        "Designing a scalable architecture for file processing and storage",
        "Integrating secure payment processing with subscription management",
      ],
      learnings: [
        "Optimizing memory usage in AI models when processing large inputs",
        "Advanced file processing and manipulation techniques",
        "Integration of AI services for content analysis and generation",
        "Implementation of SaaS business models with recurring billing",
        "Secure payment gateway integration and compliance best practices",
      ],
    },
    {
      name: "Project Three",
      summary:
        "A comprehensive financial platform for property transactions in Australia.",
      linkPreview: "https://thirdproject.com",
      linkSource: "https://github.com/yourusername",
      image: "/project3.png",
      slug: "project-three",
      description:
        "A comprehensive platform designed to assist users in achieving property-related goals. It features seamless account creation, dynamic questionnaires, document uploads with OCR analysis, borrowing capacity calculations, and integrations with external services for data verification and risk assessment.",
      myRole: "Backend Developer (Node.js/NestJS)",
      techStack: [
        "NestJS",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "AWS Textract",
        "Twilio",
        "JWT",
        "Firebase Messaging",
      ],
      features: [
        "Account creation with mobile number verification via SMS OTP",
        "Dynamic questionnaires for collecting personal and financial details",
        "Multi-applicant support with role-based access",
        "Document upload system with OCR for analysis",
        "Borrowing capacity calculator based on collected data",
        "Admin backend for user management and analytics",
        "In-app messaging with file attachments and notifications",
      ],
      challenges: [
        "Replicating Microsoft Excel's financial functions in JavaScript",
        "Implementing secure and compliant data processing for financial documents",
        "Handling dynamic questionnaires and modular financial products",
        "Coordinating multi-applicant workflows with role handovers",
        "Integrating OCR for accurate extraction of varied document formats",
      ],
      learnings: [
        "Developing scalable backend architectures for financial applications",
        "Integrating third-party APIs for OTP, bank data, and OCR",
        "Implementing secure authentication with JWT, OTP, and biometrics",
        "Building machine learning components for financial data categorization",
        "Optimizing database management for handling user profiles and documents",
      ],
    },
  ],
  about: {
    description: `
      Hi, I'm Vandana Yadav — currently pursuing MTech in Artificial Intelligence & Machine Learning. I work primarily with Python and its powerful ecosystem of libraries to build intelligent, data-driven solutions. My interests span machine learning, deep learning, and AI research. I'm passionate about leveraging cutting-edge technology to solve real-world problems and make a meaningful impact through innovation.
    `,
    image: "/avatar-big.jpg",
  },
};
