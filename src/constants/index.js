export const myProjects = [
  {
    id: 1,
    title: "AgriInsight AI – AI-Powered Agricultural Assistant",
    description:
      "Full-stack React web application leveraging Google's Gemini 2.5 Flash AI to provide intelligent agricultural support for farmers through natural language conversations and image analysis.",
    subDescription: [
      "Disease Identification: AI-powered crop disease detection via image upload with treatment recommendations",
      "Real-Time Weather Analytics: Integrated Google Search API for location-based weather forecasts and agricultural impact analysis",
      "Multilingual Support: Voice recognition and text translation (English/Hindi) with speech synthesis for accessibility",
      "Video Analysis: YouTube video integration with AI-powered agricultural content analysis",
      "Smart Dashboard: Quick-action interface for pest control, soil health, and market trend inquiries",
      "Impact: Democratizes agricultural expertise by providing instant AI-driven guidance accessible to farmers in their native language",
    ],
    href: "https://github.com/imtisalsahil10/agriinsight-ai",
    liveLink: "https://agriinsight-ai.vercel.app/",
    logo: "",
    image: `${import.meta.env.BASE_URL || "/"}assets/projects/dashboard page agri.jpg`,
    images: [
      `${import.meta.env.BASE_URL || "/"}assets/projects/dashboard page agri.jpg`,
      `${import.meta.env.BASE_URL || "/"}assets/projects/video analysis.jpg`,
      `${import.meta.env.BASE_URL || "/"}assets/projects/agriinsight login page.jpg`
    ],
    tags: [
      {
        id: 1,
        name: "React 19",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "TypeScript",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/typescript.svg`,
      },
      {
        id: 3,
        name: "Gemini AI",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/googlegemini.svg`,
      },
      {
        id: 4,
        name: "Vite",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/vitejs.svg`,
      },
    ],
  },
  {
    id: 2,
    title: "InboxIntel AI - Intelligent Email Assistant",
    description:
      "Developed a full-stack AI-powered email management platform using React, Node.js, and MongoDB.",
    subDescription: [
      "AI Integration: Integrated Google Gemini AI to provide real-time email summarization, sentiment analysis, urgency scoring, and smart reply generation.",
      "Secure Authentication: Implemented OAuth 2.0 with Google for secure user authentication and managed persistent sessions using MongoDB and secure cookies.",
      "Full-Stack Architecture: Built a RESTful API with Express.js to handle Gmail API synchronization, email sending, and data storage, coupled with a responsive React frontend.",
      "Cloud Deployment: Deployed the application on Render using Infrastructure as Code (IaC) with a render.yaml blueprint, ensuring automated and scalable delivery.",
      "Data Management: Designed a MongoDB schema to efficiently cache and sync email threads, optimizing performance and reducing API quota usage.",
      "Tech Stack: React, TypeScript, Node.js, Express, MongoDB, Google Gemini AI, Gmail API, OAuth 2.0, Tailwind CSS, Render."
    ],
    href: "https://github.com/imtisalsahil10/inboxintel-ai",
    liveLink: "https://inboxintel-frontend.onrender.com",
    logo: "",
    image: `${import.meta.env.BASE_URL || "/"}assets/projects/inboxintel dashboard.jpg`,
    images: [
      `${import.meta.env.BASE_URL || "/"}assets/projects/inboxintel dashboard.jpg`,
      `${import.meta.env.BASE_URL || "/"}assets/projects/inbox reply.jpg`
    ],
    tags: [
      {
        id: 1,
        name: "React",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "TypeScript",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/typescript.svg`,
      },
      {
        id: 3,
        name: "Node.js",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/nodedotjs.svg`,
      },
      {
        id: 4,
        name: "Express",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/express.svg`,
      },
      {
        id: 5,
        name: "MongoDB",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/mongodb.svg`,
      },
      {
        id: 6,
        name: "Gemini AI",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/googlegemini.svg`,
      },
      {
        id: 7,
        name: "Tailwind CSS",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/tailwindcss.svg`,
      },
      {
        id: 8,
        name: "Render",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/render.svg`,
      },
    ],
  },
  {
    id: 3,
    title: "4 in a Row – Real-Time Multiplayer Game",
    description:
      "Architected and deployed full-stack web application with Go backend and React frontend supporting real-time gameplay via WebSockets for 1v1 matches with intelligent bot fallback.",
    subDescription: [
      "Engineered RESTful API with CORS, PostgreSQL persistence using GORM, and UUID-based player statistics tracking with automatic database migrations",
      "Containerized microservices (backend, frontend, analytics) using Docker and deployed to Render with managed PostgreSQL and Kafka event streaming for game analytics",
      "Implemented competitive AI bot using strategic win/block detection algorithms and optimized game state management with mutex-based concurrency control",
      "Key Metrics: <10s matchmaking, 30s reconnection window, real-time leaderboard with win/loss tracking",
      "Tech Stack: Go, React, PostgreSQL, Kafka, Docker, WebSockets, GORM, Render"
    ],
    href: "https://github.com/imtisalsahil10/4-in-a-row",
    liveLink: "https://emitrr-frontend.onrender.com/",
    logo: "",
    image: `${import.meta.env.BASE_URL || "/"}assets/projects/Screenshot 2025-12-23 022014.png`,
    images: [
      `${import.meta.env.BASE_URL || "/"}assets/projects/Screenshot 2025-12-23 022014.png`,
      `${import.meta.env.BASE_URL || "/"}assets/projects/Screenshot 2025-12-23 021855.png`,
      `${import.meta.env.BASE_URL || "/"}assets/projects/Screenshot 2025-12-23 021933.png`
    ],
    tags: [
      {
        id: 1,
        name: "React",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "Docker",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/docker.svg`,
      },
      {
        id: 3,
        name: "Render",
        path: `${import.meta.env.BASE_URL || "/"}assets/logos/render.svg`,
      },
    ],
  },

];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/imtisalsahil10",
    icon: "assets/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/imtisalsahil/",
    icon: "assets/socials/linkedIn.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919599563021",
    icon: "assets/socials/whatsApp.svg",
  },
];

export const experiences = [
  {
    title: "B.Tech in Computer Science & Engineering",
    job: "VIT Bhopal",
    date: "2022 - 2026",
    contents: [
      "CGPA: 8.03",
      "Focused on AI/ML, Data Structures, Algorithms, and System Design",
      "Solved 300+ problems on LeetCode and Coding Ninjas with focus on Data Structures, Algorithms, and System Design",
    ],
  },
  {
    title: "Odoo Hackathon 2025 Participant",
    job: "Team Project",
    date: "2025",
    contents: [
      "Led a team of 4 to build a complete e-commerce platform with 15+ features and an admin dashboard",
      "Implemented full-stack solution with modern web technologies",
      "Collaborated on designing user-friendly interfaces and robust backend architecture",
      "Delivered a production-ready application within hackathon timeframe",
    ],
  },
  {
    title: "Research & Development",
    job: "Academic Projects",
    date: "2024 - Present",
    contents: [
      "Published research paper on 'Evaluating LLMs for Causal Extraction from Transcribed Hindi Agricultural Data' (PReMI 2025, IIT Delhi)",
      "Developed microservices architecture for agricultural intelligence platform",
      "Implemented AI-powered email analysis using Google Gemini AI and NLP techniques",
      "Built full-stack applications using React, Node.js, Python, and modern frameworks",
    ],
  },
];
export const reviews = [
  {
    name: "LeetCode Achievement",
    username: "@coding",
    body: "Solved 300+ problems on LeetCode and Coding Ninjas with focus on Data Structures, Algorithms, and System Design.",
    img: "https://robohash.org/leetcode",
  },
  {
    name: "Research Publication",
    username: "@research",
    body: "Published paper on 'Evaluating LLMs for Causal Extraction from Transcribed Hindi Agricultural Data' at PReMI 2025, IIT Delhi.",
    img: "https://robohash.org/research",
  },
  {
    name: "Hackathon Success",
    username: "@odoo2025",
    body: "Led a team of 4 to build a complete e-commerce platform with 15+ features and an admin dashboard at Odoo Hackathon 2025.",
    img: "https://robohash.org/hackathon",
  },
  {
    name: "AI/ML Expertise",
    username: "@aiml",
    body: "Experienced with Google Gemini AI, NLP, LLMs, TensorFlow, Scikit-learn, Pandas, and NumPy for intelligent applications.",
    img: "https://robohash.org/aiml",
  },
  {
    name: "Full-Stack Developer",
    username: "@fullstack",
    body: "Proficient in React, Node.js, Express.js, Python, Java, and modern web technologies with strong cloud computing knowledge.",
    img: "https://robohash.org/fullstack",
  },
  {
    name: "Cloud Computing",
    username: "@cloud",
    body: "Certified in Cloud Computing (Coursera) with experience in Vercel, Render, and modern DevOps practices.",
    img: "https://robohash.org/cloud",
  },
];
