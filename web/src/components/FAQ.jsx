import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "../App";

const FAQS = [
  {
    q: "What products does Freeze Manufacturers supply?",
    a: "The Freeze range includes engine oils, 4T bike oils, heavy-duty diesel oils, gear oils, automatic transmission fluid, and red, green, and blue radiator coolants.",
  },
  {
    q: "How do I choose the right grade?",
    a: "Match the product to the vehicle manufacturer's recommended viscosity, API or GL rating, coolant technology, and application. Share the vehicle or fleet details with our team if you need help selecting the right option.",
  },
  {
    q: "Do you supply bulk packs for workshops and fleets?",
    a: "Yes. Many oils and fluids are available in workshop and fleet-friendly pack sizes, including 20 L, 50 L, and 210 L options depending on the product.",
  },
  {
    q: "Can I mix different coolant colors or oil grades?",
    a: "Avoid mixing different coolant technologies or lubricant grades unless the vehicle manufacturer allows it. For coolant changes, flush thoroughly before switching types. For oils and ATF, use the specified grade and rating.",
  },
  {
    q: "Are the coolants still part of the range?",
    a: "Yes. Coolants remain a core Freeze product line, now offered alongside engine oils, diesel oils, gear oils, bike oils, and ATF as part of the broader automotive fluids portfolio.",
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
            Find quick answers about product selection, pack sizes, compatibility,
            and applications across the complete Freeze range.
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
