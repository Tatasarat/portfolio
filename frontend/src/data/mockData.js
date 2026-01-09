// Mock data for Tata Sarat's Portfolio

export const personalInfo = {
  name: "Tata Sarat",
  title: "Aspiring Software Engineer",
  tagline: "Building Scalable Systems & AI Solutions",
  location: "Hyderabad, Telangana",
  email: "tatasarat725@gmail.com",
  phone: "+91-8143956724",
  github: "https://github.com/tatasarat",
  linkedin: "https://linkedin.com/in/tatasarat",
  leetcode: "https://leetcode.com/tatasarat",
  photo: "https://customer-assets.emergentagent.com/job_6ad33d6e-edba-44e2-be84-cda972756c4e/artifacts/1v3d8z59_GATEphoto.jpeg",
  resumeUrl: "https://customer-assets.emergentagent.com/job_6ad33d6e-edba-44e2-be84-cda972756c4e/artifacts/8ht92x01_resume_product-2.pdf"
};

export const about = {
  summary: "Final-year B.Tech student passionate about scalable systems and AI. Experienced in ML, computer vision, and full-stack deployment. Strong foundation in Data Structures & Algorithms with real-world hackathon exposure.",
  highlights: [
    "ML & Computer Vision Enthusiast",
    "Full-Stack Developer",
    "Cloud Tools & CI/CD Expert",
    "Competitive Programmer"
  ]
};

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    institution: "B V Raju Institute of Technology",
    duration: "2023 - Present",
    score: "CGPA: 7.36",
    icon: "graduation-cap"
  },
  {
    id: 2,
    degree: "Intermediate (XII)",
    institution: "Bhaskar Bhavan Junior College",
    duration: "2021 - 2023",
    score: "920/1000",
    icon: "book-open"
  },
  {
    id: 3,
    degree: "Class X",
    institution: "Sri Chaitanya School",
    duration: "2020 - 2021",
    score: "GPA: 10/10",
    icon: "award"
  }
];

export const skills = {
  languages: ["Python", "Java", "HTML", "CSS", "JavaScript"],
  frameworks: ["React.js", "Django", "Flask"],
  libraries: ["NumPy", "Pandas", "Matplotlib", "OpenCV", "YOLOv5"],
  databases: ["SQL", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "GitHub Actions", "LaTeX"]
};

export const projects = [
  {
    id: 1,
    title: "Smart Vision Luggage Identifier",
    description: "Built a vision system to detect luggage using YOLOv5 with a Flask-based UI and GitHub CI/CD pipeline. Implemented end-to-end computer vision solution with automated deployment.",
    technologies: ["Flask", "YOLOv5", "OpenCV", "GitHub Actions", "Python"],
    github: "https://github.com/tatasarat/luggage-identifier",
    highlights: [
      "Real-time object detection",
      "CI/CD pipeline setup",
      "Flask web interface"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Plant Health Analyzer",
    description: "Computed NDVI from satellite images using remote sensing data and machine learning. Led ML strategy and achieved finalist position in Hackcelerate hackathon (Top 5%).",
    technologies: ["Python", "Machine Learning", "Sentinel Datasets", "Remote Sensing"],
    github: "https://github.com/tatasarat/plant-health-analyzer",
    highlights: [
      "Hackcelerate Finalist",
      "NDVI computation",
      "Real-time monitoring"
    ]
  },
  {
    id: 3,
    title: "Lightweight Chatbot Engine",
    description: "Created a responsive real-time chatbot with automated deployment on GitHub Pages. Implemented natural conversation flow with minimal resource usage.",
    technologies: ["Python", "JavaScript", "GitHub Pages", "API Integration"],
    github: "https://github.com/tatasarat/chatbot-engine",
    highlights: [
      "Real-time responses",
      "Automated deployment",
      "Lightweight architecture"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "Hackcelerate Finalist",
    description: "Top 5% finalist in national-level hackathon",
    year: "2024",
    icon: "trophy"
  },
  {
    id: 2,
    title: "Oracle Dev Gym: Brownz Trophy",
    description: "Awarded for exceptional performance in Oracle development challenges",
    year: "2024",
    icon: "award"
  },
  {
    id: 3,
    title: "Perfect GPA in Class X",
    description: "Achieved 10/10 GPA demonstrating academic excellence",
    year: "2021",
    icon: "star"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Microsoft Certified: AI Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "#"
  },
  {
    id: 2,
    title: "Foundations of Generative AI",
    issuer: "Udacity",
    date: "2024",
    credentialUrl: "https://udacity.com/certificate"
  },
  {
    id: 3,
    title: "Relational & SQL Databases",
    issuer: "IBM",
    date: "2024",
    credentialUrl: "#"
  }
];

export const leadership = [
  "Led YOLO-based luggage detection system end-to-end",
  "Set up CI/CD pipelines using GitHub Actions",
  "Drove ML strategy in real-time plant monitoring hackathon project"
];

export const codingStats = {
  leetcode: {
    problemsSolved: 150,
    rank: "Knight",
    contestRating: 1650
  },
  github: {
    repositories: 25,
    contributions: 500,
    stars: 45
  }
};
