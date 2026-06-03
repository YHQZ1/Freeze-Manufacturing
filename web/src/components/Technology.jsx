import React from "react";
import { SectionLabel } from "../App";

export default function Technology() {
  return (
    <section
      id="technology"
      className="w-full bg-zinc-50 py-16 lg:py-24 border-y border-zinc-200"
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <SectionLabel>Technology</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mt-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8">
              Engineered for <br /> Thermal Control.
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed max-w-2xl">
              <p>
                Freeze coolants use long-life organic acid inhibitor systems
                that form a protective molecular layer on metal surfaces rather
                than saturating the fluid — resulting in slower depletion,
                longer service intervals, and more stable protection throughout
                the coolant's life.
              </p>
              <p>
                Our formulations are free from amines, borates, silicates and
                phosphates — reducing deposit formation, protecting non-metallic
                components, and ensuring compatibility with modern aluminium
                engine architectures.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                label: "OAT",
                name: "Organic Acid Technology",
                desc: "Carboxylate inhibitors coat metal surfaces at a molecular level. Minimum depletion, maximum longevity.",
                color: "border-emerald-500",
                textColor: "text-emerald-700",
              },
              {
                label: "HOAT",
                name: "Hybrid Organic Acid Technology",
                desc: "Combines OAT longevity with inorganic silicate fast-action protection for demanding engines.",
                color: "border-red-600",
                textColor: "text-red-700",
              },
              {
                label: "IAT",
                name: "Inorganic Additive Technology",
                desc: "Proven silicate and phosphate inhibitors. Fast-acting, widely compatible, ideal for older engine designs.",
                color: "border-blue-600",
                textColor: "text-blue-700",
              },
            ].map((t) => (
              <div
                key={t.label}
                className={`bg-white border border-zinc-200 border-l-4 ${t.color} p-6 shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase ${t.textColor}`}
                  >
                    {t.label}
                  </span>
                  <span className="text-sm font-bold text-zinc-900">
                    {t.name}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
