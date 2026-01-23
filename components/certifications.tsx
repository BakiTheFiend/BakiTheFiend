"use client";

import { Award, ExternalLink } from "lucide-react";
import { FadeIn } from "./motion";

const certifications = [
  {
    name: "Huawei: Data Management and Analytics",
    url: "https://www.credly.com/badges/55ec33a0-3960-40ad-a462-f8e6b905333c", // Replace with actual certificate URL
  },
  {
    name: "Huawei: Cloud Advanced (Architecture and Technologies)",
    url: "https://www.credly.com/badges/4b846d5d-1614-4980-81a0-42b54beaf5c4", // Replace with actual certificate URL
  },
  {
    name: "Udemy: Google Cloud Platform (GCP) Fundamentals",
    url: "https://www.udemy.com/certificate/UC-9e92e21d-dd12-4c8d-bcb3-ad215756eb96/", // Replace with actual certificate URL
  },
  {
    name: "Edx: React & Redux",
    url: "https://courses.edx.org/certificates/c9a66d567023407ab8b82a6c1ae3784b", // Replace with actual certificate URL
  },
  {
    name: "Sololearn: Angular, Java",
    url: "https://www.sololearn.com/en/certificates/CC-DZUMLBLT", // Replace with actual certificate URL
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16 lg:py-24">
      <FadeIn>
        <h3 className="text-sm uppercase tracking-widest text-primary mb-8 lg:hidden">
          Certifications
        </h3>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="group p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-medium text-foreground">Certifications</h4>
          </div>
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li key={index}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground flex items-center group/item hover:text-foreground transition-colors duration-300"
                >
                  <span className="text-primary mr-2 group-hover/item:translate-x-1 transition-transform duration-300">
                    ▹
                  </span>
                  <span className="flex-1">{cert.name}</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
