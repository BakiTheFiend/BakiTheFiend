"use client";

import Image from "next/image";
import { FadeIn } from "./motion";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <FadeIn>
        <h3 className="text-sm uppercase tracking-widest text-primary mb-8 lg:hidden">
          About
        </h3>
      </FadeIn>
      
      {/* About Image */}
      <FadeIn delay={50}>
        <div className="relative w-full h-48 mb-8 rounded-lg overflow-hidden group">
          <Image
            src="/images/about-illustration.jpg"
            alt="Data Analytics Workspace"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-xs uppercase tracking-widest text-primary">About Me</span>
          </div>
        </div>
      </FadeIn>
      
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <FadeIn delay={100}>
          <p>
            I&apos;m a Data Analyst passionate about turning complex data into
            clear, actionable insights. My work sits at the intersection of{" "}
            <span className="text-foreground font-medium hover:text-primary transition-colors cursor-default">
              business intelligence
            </span>
            ,{" "}
            <span className="text-foreground font-medium hover:text-primary transition-colors cursor-default">
              data engineering
            </span>
            , and{" "}
            <span className="text-foreground font-medium hover:text-primary transition-colors cursor-default">
              process automation
            </span>
            , creating solutions that help organizations make smarter decisions.
          </p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <p>
            Currently, I work at{"   "}

              <span className="text-foreground font-medium hover:text-primary transition-colors cursor-default">
                Expleo Group
              </span>
            {"   "}
            on the FOTA (Firmware Over-The-Air) project for Renault, where I analyze
            large-scale data with BigQuery, create dynamic dashboards with Looker
            Studio, and automate campaign launches using Python and Selenium.
          </p>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p>
            I hold an Engineering degree in{" "}
            <span className="text-foreground font-medium hover:text-primary transition-colors cursor-default">
              Computer Science with a Business Intelligence specialization
            </span>{" "}
            from Faculte des Sciences et Techniques d&apos;Errachidia. My
            technical toolkit spans from traditional BI tools like Power BI and
            Pentaho to modern cloud platforms like GCP and Azure.
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <p>
            When I&apos;m not crunching numbers, I&apos;m exploring new AI
            technologies, building intelligent automation solutions, or working on
            machine learning projects.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
