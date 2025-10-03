// Portfolio Data Configuration
// This file contains all the data used throughout the portfolio website
// Edit this file to update content without touching component code

export const personalInfo = {
  name: "Poorvi Shrivastava",
  firstName: "Poorvi",
  lastName: "Shrivastava",
  title: "Software Engineer @ BP",
  welcomeMessage: "Welcome to my digital space ✨",
  tagline:
    "Crafting digital experiences with passion. Let's build something extraordinary together.",
  resumeFileName: "Poorvi_Shrivastava_Resume.pdf",
};

export const aboutData = {
  title: "About Me",
  description: [
    "I'm a passionate Fullstack Developer with a robust foundation in building scalable and efficient web applications. With comprehensive experience across the software development lifecycle, I specialize in crafting powerful backend services and dynamic, responsive frontends.",
    "My expertise lies in leveraging modern technologies like React, Node.js, and cloud platforms such as AWS to deliver high-quality, impactful software solutions. I thrive in collaborative environments and am perpetually driven to learn and apply new skills to solve complex challenges.",
  ],
  skills: {
    Languages: ["Python", "C#.NET", "JavaScript", "TypeScript", "SQL"],
    Technologies: [
      "ReactJS",
      "Node.js",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Git",
      "Flask",
      "Terraform",
      "Microservices",
    ],
  },
};

export const experienceData = {
  title: "Work Experience",
  experiences: [
    {
      company: "British Petroleum (BP)",
      role: "Fullstack Developer",
      period: "May 2024 - Present",
      points: [
        "Optimized data pipelines with AWS Lambda/DynamoDB.",
        "Developed Node.js APIs for 5,000+ daily transactions.",
        "Refactored React components, improving load times by 15%.",
      ],
    },
    {
      company: "Workbuddy",
      role: "Fullstack Software Engineer",
      period: "Feb 2023 - May 2024",
      points: [
        "Led development of a microservices platform for 20,00+ users.",
        "Designed RESTful APIs in Flask, boosting data throughput by 15%.",
        "Implemented Redis caching, cutting API latency by 20%.",
      ],
    },
    {
      company: "Accenture",
      role: "Software Engineer",
      period: "Oct 2021 - Feb 2023",
      points: [
        "Built a React/Node.js web app with Docker & Kubernetes, cutting search times by 80%.",
      ],
    },
    {
      company: "LTIMindtree",
      role: "Software Engineer",
      period: "Sep 2019 - Sep 2021",
      points: [
        "Developed C#.NET & Python microservices on Azure, improving server response by 30%.",
      ],
    },
  ],
};

export const projectsData = {
  title: "Projects",
  projects: [
    {
      name: "YouTube Clone",
      description: "React frontend with Python microservices backend.",
      link: "https://mac-youtube-clone.netlify.app/",
    },
    {
      name: "Covid Tracker",
      description:
        "Real-time COVID-19 stats dashboard using React and REST APIs.",
      link: "https://github.com/moni2197/CovidTracker",
    },
    {
      name: "Movieland",
      description:
        "Movie search site built with React and Flask microservices.",
      link: "https://movieland-m.netlify.app/",
    },
    {
      name: "Workbuddy App",
      description:
        "Hotdesking mobile app using React Native and Nodejs backend.",
      link: "https://apps.apple.com/sg/app/work-buddy/id1416853620?platform=iphone",
    },
    {
      name: "The Work Boulevard",
      description:
        "Coworking site on Kubernetes with Dockerized microservices.",
      link: "https://theworkboulevard.com/",
    },
  ],
};

export const certificationsData = {
  title: "Certifications",
  certifications: [
    "Neural Networks and Deep Learning by Andrew Ng",
    "Improving Deep Neural Networks by Andrew Ng",
    "Structuring Machine Learning Projects",
    "Microsoft Azure AZ-900",
    "Python for Data Science, AI and Development",
  ],
};

export const contactData = {
  title: "Get In Touch",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.",
  email: "moni2685@gmail.com",
  buttonText: "Say Hello",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/moni2197?tab=overview&from=2023-12-01&to=2023-12-31",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohnish-chandiramani/",
      icon: "Linkedin",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/moni2110/",
      icon: "Code",
    },
  ],
};

export const navigationData = {
  logo: "P.",
  sections: [
    { id: "home", name: "Home", icon: "Home" },
    { id: "about", name: "About", icon: "User" },
    { id: "experience", name: "Experience", icon: "Briefcase" },
    { id: "projects", name: "Projects", icon: "Lightbulb" },
    { id: "certifications", name: "Certifications", icon: "Award" },
    { id: "contact", name: "Contact", icon: "Mail" },
  ],
};
