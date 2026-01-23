"use client";

import { Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, FloatingElement } from "./motion";

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <FadeIn>
        <h3 className="text-sm uppercase tracking-widest text-primary mb-8 lg:hidden">
          Contact
        </h3>
      </FadeIn>

      <div className="max-w-2xl">
        <FadeIn delay={100}>
          <h4 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get In{" "}
            <span className="text-primary relative inline-block">
              Touch
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 rounded-full" />
            </span>
          </h4>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I&apos;m currently looking for new opportunities in data analysis and
            business intelligence. Whether you have a question, want to discuss a
            project, or just want to say hi, I&apos;ll try my best to get back to
            you!
          </p>
        </FadeIn>

        <div className="space-y-4 mb-8">
          <FadeIn delay={300} direction="left">
            <a
              href="mailto:o.afroukhh@gmail.com"
              className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <span className="p-2 bg-card rounded-lg border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                o.afroukhh@gmail.com
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={400} direction="left">
            <a
              href="tel:+212608785272"
              className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <span className="p-2 bg-card rounded-lg border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                <Phone className="w-5 h-5" />
              </span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                +212 608 785 272
              </span>
            </a>
          </FadeIn>

          <FadeIn delay={500} direction="left">
            <div className="group flex items-center gap-4 text-muted-foreground">
              <span className="p-2 bg-card rounded-lg border border-border">
                <MapPin className="w-5 h-5" />
              </span>
              <span>Morocco</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={600}>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            <a href="mailto:o.afroukhh@gmail.com">
              <Send className="w-4 h-4 mr-2" />
              Say Hello
            </a>
          </Button>
        </FadeIn>
      </div>

      {/* Back to top button */}
      <FadeIn delay={700}>
        <FloatingElement className="fixed bottom-8 right-8 z-50">
          <a
            href="#"
            className="p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 block"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </FloatingElement>
      </FadeIn>

      {/* Footer */}
      <FadeIn delay={800}>
        <footer className="mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Designed & Built by{" "}
            <span className="text-primary hover:text-foreground transition-colors duration-300 cursor-default">
              Oussama Afroukh
            </span>
          </p>
        </footer>
      </FadeIn>
    </section>
  );
}
