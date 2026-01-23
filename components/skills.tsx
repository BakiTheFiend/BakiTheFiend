"use client";

import {
  Database,
  Code,
  BarChart3,
  Cloud,
  Cog,
  Users,
  Globe,
  Award,
} from "lucide-react";
import { FadeIn } from "./motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "PHP", "C#", "Java", "R", "C/C++"],
  },
  {
    title: "BI & Data Analysis",
    icon: BarChart3,
    skills: [
      "Power BI",
      "Looker Studio",
      "BigQuery",
      "Pentaho",
      "Talend",
      "RStudio",
    ],
  },
  {
    title: "Big Data Technologies",
    icon: Database,
    skills: ["Apache Hadoop", "Apache Spark", "Apache Mahout", "HDFS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQL Server"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Google Cloud Platform", "Azure", "Docker"],
  },
  {
    title: "Frameworks",
    icon: Cog,
    skills: [
      "Django REST",
      "Laravel",
      "React",
      "Angular",
      "Node.js",
      "NestJS",
    ],
  },
];

const softSkills = [
  "Problem-Solving",
  "Teamwork",
  "Adaptability",
  "Communication",
  "Time Management",
  "Leadership",
];

const languages = [
  { name: "French", level: "Fluent", percentage: 95 },
  { name: "Arabic", level: "Fluent", percentage: 95 },
  { name: "English", level: "Intermediate", percentage: 70 },
];

const certifications = [
  "Certified AWS Cloud Practitioner",
  "Google Data Analytics Professional Certificate",
  "Oracle Certified Professional, Java SE 11 Developer",
];

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <FadeIn>
        <h3 className="text-sm uppercase tracking-widest text-primary mb-8 lg:hidden">
          Skills
        </h3>
      </FadeIn>

      {/* Technical Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 auto-rows-fr">
        {skillCategories.map((category, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="group h-full p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="inline-flex px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default whitespace-nowrap"
                    style={{ transitionDelay: `${skillIndex * 30}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Soft Skills & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        <FadeIn delay={100}>
          <div className="group h-full p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-medium text-foreground">Soft Skills</h4>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="inline-flex px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors duration-300 cursor-default whitespace-nowrap"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="group h-full p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-medium text-foreground">Languages</h4>
            </div>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${lang.percentage}%`,
                        transitionDelay: `${index * 200 + 500}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
