"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Folder } from "lucide-react"; // Declared the Folder variable
import { FadeIn } from "./motion";

const projects = [
  {
    title: "FOTA Automation",
    description:
        "Created Python and Selenium scripts to automate the launch of FOTA campaigns and KPI tracking for Renault's firmware updates.",
    technologies: ["Python", "Selenium", "BigQuery", "Looker Studio"],
    image: "/images/project-fota.jpg",
    featured: true,
  },
  {
    title: "RAG-based Intelligent Chatbot",
    description:
        "Developed a conversational assistant using Retrieval-Augmented Generation with vector search capabilities for context-aware responses.",
    technologies: [
      "Python",
      "Flask",
      "LangChain",
      "FAISS",
      "Hugging Face",
      "OpenAI API",
    ],
    image: "/images/project-chatbot.jpg",
    featured: true,
  },
  {
    title: "Email Spam Detection",
    description:
        "Built a classification model to filter spam emails using machine learning techniques and natural language processing.",
    technologies: ["Python", "Pandas", "Scikit-learn", "NLP"],
    image: "/images/project-ml.jpg",
    featured: true,
  },
  {
    title: "Article Classification System",
    description:
        "Analysis and categorization of articles using Big Data technologies for large-scale text processing.",
    technologies: ["Hadoop", "HDFS", "Mahout"],
    image: "/images/project-bigdata.jpg",
    featured: false,
  },
  {
    title: "Road Accident Decision System",
    description:
        "Developed a BI tool for road accident analysis to aid decision-making with comprehensive visualizations and reports.",
    technologies: ["Pentaho", "Talend", "Power BI", "RStudio"],
    image: "/images/project-bi.jpg",
    featured: true,
  },
  {
    title: "Reinforcement Learning Model",
    description:
        "Built a reinforcement learning agent for video game automation using state-of-the-art RL algorithms.",
    technologies: [
      "Python",
      "Stable-Baselines3",
      "OpenAI Gym",
      "Jupyter Notebook",
    ],
    image: "/images/project-rl.jpg",
    featured: false,
  },
];

export function Projects() {
  return (
      <section id="projects" className="py-16 lg:py-24">
        <FadeIn>
          <h3 className="text-sm uppercase tracking-widest text-primary mb-8 lg:hidden">
            Projects
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
              <FadeIn
                  key={index}
                  delay={index * 100}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="h-full"
              >
                <div className="group relative h-full flex flex-col bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <ExternalLink className="absolute top-3 right-3 w-5 h-5 text-white/70 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
                  </div>

                  <div className="relative flex flex-col flex-1 p-5">
                    <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                          <span
                              key={tech}
                              className="text-xs text-muted-foreground font-mono hover:text-primary transition-colors duration-300"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
          ))}
        </div>
      </section>
  );
}
