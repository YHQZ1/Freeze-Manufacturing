import React from "react";
import { Thermometer, ShieldCheck, Droplets, Settings } from "lucide-react";
import { SectionLabel } from "../App";

const PRODUCTS = [
  {
    id: "green",
    name: "Green Coolant",
    colorText: "text-emerald-700",
    specs: [
      { value: "Ethylene Glycol" },
      { value: "OAT" },
      { value: "1:5 with water" },
      { value: "Up to −35 °C / +120 °C" },
      { value: "Up to 5 years" },
      { value: "1 L" },
    ],
    type: "OAT — Organic Acid Technology",
  },
  {
    id: "red",
    name: "Red / Pink Coolant",
    colorText: "text-red-700",
    specs: [
      { value: "Ethylene Glycol" },
      { value: "HOAT" },
      { value: "1:5 with water" },
      { value: "Up to −35 °C / +125 °C" },
      { value: "Up to 5 years" },
      { value: "1 L" },
    ],
    type: "HOAT — Hybrid Organic Acid Technology",
  },
  {
    id: "blue",
    name: "Blue Coolant",
    colorText: "text-blue-700",
    specs: [
      { value: "Ethylene Glycol" },
      { value: "IAT" },
      { value: "1:5 with water" },
      { value: "Up to −35 °C / +118 °C" },
      { value: "Up to 2 years" },
      { value: "1 L" },
    ],
    type: "IAT — Inorganic Additive Technology",
  },
];

const BENEFITS = [
  {
    icon: <Thermometer className="w-7 h-7 text-zinc-900" />,
    title: "Thermal Control",
    desc: "Engineered to maintain optimal operating temperature from −35 °C to +125 °C across all seasons and driving conditions.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-zinc-900" />,
    title: "Corrosion Protection",
    desc: "Inhibitor packages protect aluminium, cast iron, steel, copper, brass and rubber components inside the cooling circuit.",
  },
  {
    icon: <Droplets className="w-7 h-7 text-zinc-900" />,
    title: "Boil & Freeze Guard",
    desc: "Raises the boiling point and lowers the freezing point of the coolant mixture, preventing overheating and cracking.",
  },
  {
    icon: <Settings className="w-7 h-7 text-zinc-900" />,
    title: "Pump & Seal Safe",
    desc: "Free from amines, borates, silicates and phosphates — safe for water-pump seals, gaskets and hoses.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <SectionLabel>Why Freeze</SectionLabel>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-12">
          Built for performance. <br /> Designed to protect.
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
                  Specification
                </th>
                {PRODUCTS.map((p) => (
                  <th
                    key={p.id}
                    className={`px-6 py-5 font-bold ${p.colorText} whitespace-nowrap`}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {[
                {
                  label: "Technology",
                  key: "type",
                  transform: (v) => v.split(" — ")[0],
                },
                { label: "Mix Ratio", key: "specs", idx: 2 },
                { label: "Protection Range", key: "specs", idx: 3 },
                { label: "Service Life", key: "specs", idx: 4 },
              ].map((row, ri) => (
                <tr
                  key={row.label}
                  className={ri % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}
                >
                  <td className="px-6 py-4 font-semibold text-zinc-900 whitespace-nowrap">
                    {row.label}
                  </td>
                  {PRODUCTS.map((p) => (
                    <td
                      key={p.id}
                      className="px-6 py-4 text-zinc-600 whitespace-nowrap"
                    >
                      {row.key === "type"
                        ? row.transform(p.type)
                        : p.specs[row.idx].value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
