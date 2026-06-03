import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-zinc-50 pt-32 pb-16 lg:pt-40 lg:pb-20 min-h-[85vh] flex items-center border-b border-zinc-200">
      <div className="w-full px-6 lg:px-12 xl:px-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>
          <div className="inline-flex items-center bg-zinc-200/60 px-3 py-1.5 rounded-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-zinc-800 uppercase">
              Engineered for Thermal Control
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-extrabold text-zinc-900 leading-[1.05] tracking-tight mb-8">
            Cooling Solutions <br className="hidden md:block" />
            <span className="text-zinc-500">That Last Longer.</span>
          </h1>

          <p className="text-lg text-zinc-600 leading-relaxed max-w-xl mb-10">
            Freeze Radiator Coolants are formulated with long-life organic acid
            technology — delivering superior corrosion protection, optimal heat
            transfer, and extended service life for industrial applications and
            commercial vehicles.
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
              { n: "3", label: "Product Variants" },
              { n: "5yr", label: "Max Service Life" },
              { n: "−35°C", label: "Freeze Protection" },
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

        <div className="flex justify-center lg:justify-end items-end gap-4 lg:gap-8 pt-10 lg:pt-0">
          {[
            {
              src: "/blue.webp",
              label: "Blue",
              cap: "bg-blue-600",
              h: "h-[240px] lg:h-[300px] xl:h-[360px]",
            },
            {
              src: "/green.webp",
              label: "Green",
              cap: "bg-emerald-500",
              h: "h-[280px] lg:h-[360px] xl:h-[420px]",
            },
            {
              src: "/red.webp",
              label: "Red",
              cap: "bg-red-600",
              h: "h-[240px] lg:h-[300px] xl:h-[360px]",
            },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-4">
              <img
                src={b.src}
                alt={`Freeze ${b.label} Coolant`}
                className={`${b.h} w-auto object-contain drop-shadow-xl`}
              />
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 tracking-widest uppercase">
                <span className={`w-2.5 h-2.5 rounded-full ${b.cap}`} />
                {b.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
