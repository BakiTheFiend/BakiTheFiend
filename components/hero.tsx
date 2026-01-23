"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { FadeIn, FloatingElement } from "./motion";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Muichiro96",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oussama-afroukh-9241462ab/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:o.afroukhh@gmail.com",
    icon: Mail,
  },
  {
    name: "Phone",
    href: "tel:+212608785272",
    icon: Phone,
  },
];

export function Hero() {
  return (
    <header className="h-screen max-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Left Column - Fixed on Desktop */}
      <div className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/2 flex flex-col justify-center p-6 lg:p-12 relative z-10">
        <div>
          {/* Profile Image */}
          <FadeIn direction="down" delay={0}>
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 mb-6 group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
                <Image
                  src="/images/profile.jpg"
                  alt="Oussama Afroukh"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
            </div>
          </FadeIn>
          
          <FadeIn direction="down" delay={100}>
            <p className="text-primary text-sm tracking-widest uppercase mb-2">
              Welcome to my portfolio
            </p>
          </FadeIn>
          
          <FadeIn direction="left" delay={200}>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
              Oussama{" "}
              <span className="text-primary relative">
                Afroukh
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full" />
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="left" delay={300}>
            <div className="flex items-center gap-2 mt-3">
              <h2 className="text-lg lg:text-xl font-medium text-muted-foreground">
                <span className="text-foreground">Data Analyst</span> at{" "}
              </h2>
              <Image
                src="/expleo.png"
                alt="Expleo Group logo"
                width={20}
                height={20}
                className="rounded-sm"
              />
              <h2 className="text-lg lg:text-xl font-medium expleo-brand">
                Expleo Group
              </h2>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={400}>
            <p className="mt-4 max-w-md text-sm lg:text-base text-muted-foreground leading-relaxed">
              I transform raw data into actionable insights, building dashboards
              and automating workflows to drive{" "}
              <span className="text-primary font-medium">data-driven decisions</span>.
            </p>
          </FadeIn>

          {/* Navigation - Desktop Only */}
          <nav className="mt-8 hidden lg:block">
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <FadeIn key={item.name} direction="left" delay={500 + index * 100}>
                  <li>
                    <a
                      href={item.href}
                      className="group flex items-center text-muted-foreground hover:text-foreground transition-all duration-300"
                    >
                      <span className="w-6 h-px bg-muted-foreground group-hover:w-12 group-hover:bg-primary transition-all duration-300 mr-3" />
                      <span className="text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                        {item.name}
                      </span>
                    </a>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Links */}
        <FadeIn direction="up" delay={800}>
          <div className="flex items-center gap-4 mt-6 lg:mt-8">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator - Mobile */}
      <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2">
        <FloatingElement>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-6 h-6" />
          </a>
        </FloatingElement>
      </div>

      {/* Spacer for right content on desktop */}
      <div className="hidden lg:block lg:w-1/2" />
    </header>
  );
}
