import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub , FaExternalLinkAlt } from "react-icons/fa";
import "../Assets/Project.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal Portfolio Website built with React showcasing my projects, skills, and experience with modern UI/UX and animations.",
    tech: ["React", "Framer Motion", "CSS"],
    live : "https://main-portfolio-liart-five.vercel.app/",
    github: "https://github.com/amitkumar0072/Main-Portfolio",
    image: "/projects/portfolio.png",
  },

  {
    title: "SkillBridge AI",
    description: "An AI career companion that analyzes resumes, finds skill gaps, and generates personalized learning roadmaps for target roles.",
    tech: ["React", "MongoDB", "OpenAI API", "Prompt Engineering", "Node.js", "Recharts"],
    live: "https://career-ai-three-bay.vercel.app/",
    github: "https://github.com/amitkumar0072/Main-Portfolio",
    image: "/projects/portfolio.png",
  },

  {
    title: "Stocklen AI",
    description: "StockLens AI is a MERN-based AI stock analysis platform that lets users chat with an intelligent assistant to gain real-time market insights.",

    tech: ["MERN", "Socket.io", "JWT", "CI/CD"],
    live: "https://stock-analyst-chat-gpt.vercel.app/",
    github: "https://github.com/amitkumar0072/StocklensAI",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Ravindra Bhawan(IITR)",
    description: "Built a responsive React.js web platform for Ravindra Bhawan, IIT Roorkee, showcasing hostel information, notices, amenities, and contact details.",
    tech: ["Node.js", "OpenAI", "Socket.io"],
    live: "https://www.iitr.ac.in/ravindrabhawan/",
    github: "https://github.com/amitkumar0072/RavindraBhawan",
    image: "/projects/ai.png",
  }, 
  {
    title: "Blogify",
    description: "Full-stack blog platform using React and Node.js that allows users to securely create, read, update, and delete blog posts.",
    tech: ["Node.js", "React.js", "MongoDB"],
    // live: "",
    github: "https://github.com/amitkumar0072/BlogsApp",
    image: "/projects/ai.png",
  }, 

  {
    title: "AI Chatbot",
    description: "An AI chatbot application powered by a large language model (LLM) that provides intelligent and context-aware responses to user queries in real-time.",
    tech: ["React.js", "Node.js", "Express.js", "OPENAI"],
    /*live: "",*/
    github: "https://github.com/amitkumar0072/StocklensAI",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Seekho.ai",
    description: "Coming Soon...",
    tech: ["Python","FAST API", "OpenAI", "Socket.io","TypeScript"],
    /*live: "",*/
    github: "https://github.com/amitkumar0072/Seekho.ai",
    image: "/projects/ai.png",
  },

  
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="projects-title"
      >
        🚀 My <span>Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <TiltCard key={i} project={project} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
}

// New TiltCard component
function TiltCard({ project, delay }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateMax = 10; // max rotation in deg
    setRotateY(((x - centerX) / centerX) * rotateMax);
    setRotateX(-((y - centerY) / centerY) * rotateMax);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <div className="project-img">{/* <img src={project.image} alt={project.title} /> */}</div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live <FaExternalLinkAlt />
          </a> 
          <a href={project.github} target="_blank" rel="noreferrer">
            Code <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
