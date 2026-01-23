"use client";

import { ExternalLink } from "lucide-react";
import { FadeIn } from "./motion";
import Image from "next/image";

const experiences = [
  {
    period: "Sep 2025 - Present",
    title: "Data Analyst",
    company: "Expleo Group",
    logo: "/expleo.png",
    project: "Project FOTA (Renault)",
    description:
      "Integration into the FOTA (Firmware Over-The-Air) project for Renault across France, Romania, and Spain. Analyzing business requirements and creating Jira tickets. Large-scale data analysis with BigQuery and creating dynamic dashboards with Looker Studio.",
    technologies: ["BigQuery", "Looker Studio", "Python", "Selenium", "Jira"],
    highlights: [
      "Automated FOTA campaign launches with Python and Selenium",
      "Created dynamic dashboards for campaign monitoring",
      "Working in Agile/Scrum environment",
    ],
  },
  {
    period: "Feb 2025 - Aug 2025",
    title: "End of Studies Internship",
    company: "Circet Maroc",
    logo: "/logo-circet--white.png",
    location: "Casablanca, Morocco",
    description:
      "Automated the generation of technical deliverables for radio sites (synoptics, reports) by designing an intelligent platform integrating AI modules.",
    technologies: [
      "Django REST Framework",
      "Celery",
      "RabbitMQ",
      "Redis",
      "OpenAI API",
      "Docker",
      "PostgreSQL",
    ],
    highlights: [
      "Designed asynchronous architecture with Celery, RabbitMQ and Redis",
      "Developed backend API with Django REST Framework",
      "Integrated AI modules for intelligent automation",
    ],
  },
  {
    period: "2024",
    title: "End of Year Internship",
    company: "TecForge",
    logo: "/tecforge.jpg",
    location: "Agadir, Morocco",
    description:
      "Developed a web application to locate pharmacies open outside regular hours.",
    technologies: ["Laravel", "Flutter", "Google Maps API", "PostgreSQL"],
    highlights: [
      "Built cross-platform mobile app with Flutter",
      "Integrated Google Maps API for geolocation",
    ],
  },
  {
    period: "2023",
    title: "Initiation Internship",
    company: "Fromital",
    logo: "/fromital-logo-d.png",
    location: "Agadir, Morocco",
    description:
      "Tracked cheese aging and managed storage conditions in a cheese cave management system.",
    technologies: ["C#", ".NET", "SQL Server"],
    highlights: [
      "Developed inventory tracking system",
      "Built reporting dashboards for conservation monitoring",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <FadeIn>
        <h3 className="text-sm uppercase tracking-widest text-primary mb-8 lg:hidden">
          Experience
        </h3>
      </FadeIn>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <FadeIn key={index} delay={index * 150}>
            <div className="group relative grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-4 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              {/* Timeline dot */}
              <div className="hidden lg:block absolute  top-6 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {exp.period}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={32}
                      height={32}
                      className="rounded-sm"
                    />
                  )}
                  <h4 className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    {exp.title} · {exp.company}
                    <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </h4>
                </div>
                {exp.project && (
                  <p className="text-sm text-primary mt-1">{exp.project}</p>
                )}
                {exp.location && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.location}
                  </p>
                )}
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
                {exp.highlights && (
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start group/item"
                      >
                        <span className="text-primary mr-2 group-hover/item:translate-x-1 transition-transform duration-300">
                          ▹
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors duration-300 cursor-default"
                      style={{ transitionDelay: `${techIndex * 30}ms` }}
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
