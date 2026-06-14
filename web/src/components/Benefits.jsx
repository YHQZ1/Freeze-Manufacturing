import React from "react";
import { Thermometer, ShieldCheck, Droplets, Settings } from "lucide-react";
import { SectionLabel } from "../App";

const CATEGORY_MATRIX = [
  {
    category: "Engine Oils",
    grades: "5W30 · 20W40",
    protection: "Cold starts, deposit control, fuel economy",
    applications: "Passenger cars and light diesel vehicles",
    colorText: "text-blue-700",
  },
  {
    category: "Diesel Oils",
    grades: "CF-4 · CH-4 · CI-4",
    protection: "Soot control, turbo protection, oxidation stability",
    applications: "Trucks, buses, agriculture and construction equipment",
    colorText: "text-orange-700",
  },
  {
    category: "Gear Oils & ATF",
    grades: "GL-4 · GL-5 · TQ",
    protection: "Extreme pressure, anti-shudder and smooth shifting",
    applications: "Gearboxes, differentials, axles and steering systems",
    colorText: "text-slate-700",
  },
  {
    category: "Coolants",
    grades: "OAT · HOAT · IAT",
    protection: "Heat transfer, corrosion control, boil and freeze guard",
    applications: "Modern, older and heavy-duty cooling systems",
    colorText: "text-emerald-700",
  },
];

const BENEFITS = [
  {
    icon: <Thermometer className="w-7 h-7 text-zinc-900" />,
    title: "Temperature Stability",
    desc: "Coolants manage heat transfer while multi-grade oils retain dependable flow across cold starts, traffic, highway loads, and long duty cycles.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-zinc-900" />,
    title: "Component Protection",
    desc: "Additive systems help protect engines, gears, transmissions, cooling circuits, seals, gaskets, and metal surfaces from wear and corrosion.",
  },
  {
    icon: <Droplets className="w-7 h-7 text-zinc-900" />,
    title: "Right Fluid, Right Grade",
    desc: "The range covers mineral, semi-synthetic, full synthetic, diesel, gear, automatic transmission, and coolant requirements in practical pack sizes.",
  },
  {
    icon: <Settings className="w-7 h-7 text-zinc-900" />,
    title: "Fleet Ready Supply",
    desc: "From retail packs to 50 L and 210 L bulk options, the catalog is built for workshops, distributors, fleet operators, and industrial users.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <SectionLabel>Why Freeze</SectionLabel>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-12">
          One portfolio. <br /> Protection across systems.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
          {BENEFITS.map((b) => (
            <div key={b.title}>
              <div className="mb-6 bg-zinc-50 inline-flex p-4 rounded-sm border border-zinc-100">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3 tracking-tight">
                {b.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-zinc-200 bg-white overflow-x-auto shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest whitespace-nowrap">
                  Category
                </th>
                <th className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest whitespace-nowrap">
                  Grades / Technology
                </th>
                <th className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest whitespace-nowrap">
                  Primary Protection
                </th>
                <th className="px-6 py-5 text-xs font-bold text-zinc-500 uppercase tracking-widest whitespace-nowrap">
                  Applications
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {CATEGORY_MATRIX.map((row, ri) => (
                <tr
                  key={row.category}
                  className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}
                >
                  <td
                    className={`px-6 py-4 font-bold whitespace-nowrap ${row.colorText}`}
                  >
                    {row.category}
                  </td>
                  <td className="px-6 py-4 text-zinc-600 whitespace-nowrap">
                    {row.grades}
                  </td>
                  <td className="px-6 py-4 text-zinc-600 min-w-[280px]">
                    {row.protection}
                  </td>
                  <td className="px-6 py-4 text-zinc-600 min-w-[320px]">
                    {row.applications}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
