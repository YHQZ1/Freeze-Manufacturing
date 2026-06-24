import React from "react";
import { Award, ExternalLink, FileCheck2 } from "lucide-react";
import { SectionLabel } from "../App";

const CERTIFICATES = [
  {
    title: "ISO 9001",
    subtitle: "Quality Management System",
    href: "/certificates/iso-9001.pdf",
  },
  {
    title: "ISO 10002",
    subtitle: "Customer Satisfaction & Complaints Handling",
    href: "/certificates/iso-10002.pdf",
  },
  {
    title: "ISO 14001",
    subtitle: "Environmental Management System",
    href: "/certificates/iso-14001.pdf",
  },
  {
    title: "ISO 22000",
    subtitle: "Food Safety Management System",
    href: "/certificates/iso-22000.pdf",
  },
  {
    title: "HACCP",
    subtitle: "Hazard Analysis & Critical Control Points",
    href: "/certificates/haccp.pdf",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="w-full bg-zinc-50 py-16 lg:py-20 border-y border-zinc-200"
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <SectionLabel>Certified Quality</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-6">
              Backed by recognized certification.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-xl">
              Freeze Manufacturers maintains documented quality, environmental,
              safety, and customer-management certifications for its operations
              and product supply standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {CERTIFICATES.map((cert) => (
              <a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-zinc-200 p-5 shadow-sm hover:border-zinc-900 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="bg-zinc-50 border border-zinc-100 p-3 text-zinc-900">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-zinc-400" />
                  <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {cert.subtitle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
