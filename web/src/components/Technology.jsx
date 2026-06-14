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
              Formulated for <br /> Everyday Reliability.
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed max-w-2xl">
              <p>
                The Freeze range now covers the key fluids a vehicle or fleet
                depends on: crankcase lubrication, diesel engine protection,
                gear and axle load handling, automatic transmission response,
                and cooling-system heat transfer.
              </p>
              <p>
                Each product is built around the job it performs, from API-rated
                engine oils and GL-rated gear oils to OAT, HOAT, and IAT
                coolants. The result is a practical catalog for workshops,
                distributors, and operators who need dependable fluids without
                juggling multiple brands.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                label: "API",
                name: "Engine & Diesel Oil Grades",
                desc: "Mineral, semi-synthetic, and full synthetic oils selected for wear protection, cleanliness, cold-start flow, and fleet duty cycles.",
                color: "border-blue-600",
                textColor: "text-blue-700",
              },
              {
                label: "GL",
                name: "Gear & Transmission Protection",
                desc: "Extreme-pressure gear oils and ATF support smooth shifting, load carrying, anti-shudder response, and protection under heavy contact stress.",
                color: "border-slate-600",
                textColor: "text-slate-700",
              },
              {
                label: "OAT",
                name: "Coolant Technologies",
                desc: "OAT, HOAT, and IAT coolant options cover modern, heavy-duty, and older systems with corrosion control, heat transfer, and boil/freeze protection.",
                color: "border-emerald-500",
                textColor: "text-emerald-700",
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
