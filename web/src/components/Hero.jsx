import React from "react";
import { Car, Cog, Droplets, Gauge, ShieldCheck } from "lucide-react";

const SYSTEMS = [
  {
    label: "Engine Oil",
    detail: "5W30 · 20W40",
    icon: <Gauge className="w-5 h-5" />,
    accent: "bg-blue-600",
  },
  {
    label: "Bike Oil",
    detail: "4T 20W40",
    icon: <ShieldCheck className="w-5 h-5" />,
    accent: "bg-amber-500",
  },
  {
    label: "Gear Oil",
    detail: "GL-4 · GL-5",
    icon: <Cog className="w-5 h-5" />,
    accent: "bg-zinc-700",
  },
  {
    label: "Coolant",
    detail: "OAT · HOAT · IAT",
    icon: <Droplets className="w-5 h-5" />,
    accent: "bg-emerald-600",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-zinc-50 pt-32 pb-16 lg:pt-40 lg:pb-20 min-h-[85vh] flex items-center border-b border-zinc-200">
      <div className="w-full px-6 lg:px-12 xl:px-16 grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center bg-zinc-200/60 px-3 py-1.5 rounded-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-zinc-800 uppercase">
              Automotive Fluids & Lubricants
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-extrabold text-zinc-900 leading-[1.05] tracking-tight mb-8">
            Complete Fluid Care <br className="hidden md:block" />
            <span className="text-zinc-500">For Every Drive.</span>
          </h1>

          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-10">
            Freeze Manufacturers started with trusted radiator coolants and has
            grown into a 15-product range spanning engine oils, bike oils,
            diesel oils, gear oils, ATF, and long-life coolants for passenger,
            commercial, and industrial applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-zinc-900 text-white px-8 py-3.5 rounded text-sm font-bold tracking-widest uppercase hover:bg-zinc-800 cursor-pointer"
            >
              View Products
            </a>
            <a
              href="#technology"
              className="bg-transparent text-zinc-900 px-8 py-3.5 rounded text-sm font-bold tracking-widest uppercase border-2 border-zinc-900 hover:bg-zinc-100 cursor-pointer"
            >
              Our Technology
            </a>
          </div>

          <div className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-zinc-200">
            {[
              { n: "15", label: "Products" },
              { n: "6", label: "Fluid Categories" },
              { n: "210L", label: "Bulk Pack Options" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-zinc-900 tracking-tight">
                  {s.n}
                </div>
                <div className="text-sm font-medium text-zinc-500 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-white border border-zinc-200 shadow-sm p-6 lg:p-8">
            <div className="border border-zinc-200 bg-zinc-50 min-h-[420px] flex flex-col justify-between p-6 relative overflow-hidden">
              <div className="grid grid-cols-2 gap-3">
                {SYSTEMS.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-zinc-200 p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="text-zinc-900">{item.icon}</div>
                      <span className={`h-1.5 w-8 ${item.accent}`} />
                    </div>
                    <div className="text-sm font-bold text-zinc-900">
                      {item.label}
                    </div>
                    <div className="text-xs font-medium text-zinc-500 mt-1">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 pt-8 border-t border-zinc-200">
                <div className="absolute left-1/2 top-0 h-8 w-px bg-zinc-300" />
                <div className="mx-auto w-full max-w-sm bg-white border border-zinc-200 px-8 py-7 shadow-sm">
                  <div className="flex items-center justify-center gap-4">
                    <Car className="w-16 h-16 text-zinc-900" />
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-zinc-500">
                        Complete Range
                      </div>
                      <div className="text-3xl font-extrabold text-zinc-900 leading-none mt-2">
                        15
                      </div>
                      <div className="text-sm font-medium text-zinc-500 mt-1">
                        products across vehicle systems
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-6">
                {["Workshop", "Fleet", "Retail"].map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-zinc-200 py-3 text-center text-xs font-bold tracking-widest uppercase text-zinc-500"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
