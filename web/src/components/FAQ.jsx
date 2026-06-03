import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "../App";

const FAQS = [
  {
    q: "Can I mix red, green and blue coolants?",
    a: "No. Different coolant technologies use incompatible inhibitor chemistries. Mixing can cause inhibitor precipitation, reduce protection, and potentially clog the cooling system. Always flush thoroughly before switching types.",
  },
  {
    q: "What dilution ratio should I use?",
    a: "All Freeze coolants are supplied as concentrate. A 50:50 mix with clean water is recommended for year-round protection. Use distilled or de-mineralised water where possible.",
  },
  {
    q: "How often should I change coolant?",
    a: "OAT (Green) and HOAT (Red) formulas last up to 5 years or 200,000 km. IAT (Blue) should be replaced every 2 years or 50,000 km. Always check the reservoir level every 6 months.",
  },
  {
    q: "Is it suitable for electric vehicles?",
    a: "Yes. Our Green and Red coolants are compatible with EV battery-cooling circuits and electric motor cooling loops where Ethylene Glycol-based coolant is specified.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="w-full bg-zinc-50 py-16 lg:py-24 border-t border-zinc-200"
    >
      <div className="w-full px-6 lg:px-12 xl:px-16 grid lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6">
            Common questions.
          </h2>
          <p className="text-zinc-600">
            Find quick answers to common queries regarding formulation, mixing,
            and application.
          </p>
        </div>

        <div className="lg:col-span-8 border-t border-zinc-200 divide-y divide-zinc-200 bg-white shadow-sm px-6 lg:px-10">
          {FAQS.map((f, i) => (
            <div key={i} className="py-2">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-base font-semibold text-zinc-900 pr-8">
                  {f.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 shrink-0 ${
                    open === i ? "rotate-180 text-zinc-900" : ""
                  }`}
                />
              </button>
              <div className={open === i ? "block pb-8" : "hidden"}>
                <p className="text-sm text-zinc-600 leading-relaxed pr-8">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
