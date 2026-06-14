import React, { useState } from "react";
import { Check } from "lucide-react";

export default function ProductCard({ product }) {
  const tabs = [
    "features",
    ...(product.specs ? ["specs"] : []),
    ...(product.sizes ? ["sizes"] : []),
  ];

  const [tab, setTab] = useState(tabs[0]);

  return (
    <div className="bg-white border border-zinc-200 flex flex-col">
      {/* Accent bar */}
      <div className={`h-1.5 w-full ${product.colorBg}`} />

      <div className="p-6 flex-grow flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight leading-tight">
              {product.name}
            </h3>
            {product.tagline && (
              <p className="text-sm text-zinc-500 mt-0.5">{product.tagline}</p>
            )}
          </div>
          {product.grade && (
            <span
              className={`shrink-0 text-xs font-bold tracking-widest uppercase border px-2 py-1 ${product.colorText} border-current`}
            >
              {product.grade}
            </span>
          )}
        </div>

        {/* Type label */}
        <p className="text-sm text-zinc-500 mb-4">{product.type}</p>

        {/* Tabs */}
        <div className="flex border-b border-zinc-200 mb-4">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-2.5 px-3 text-xs font-bold tracking-widest uppercase cursor-pointer border-b-2 -mb-[1px] transition-colors ${
                tab === t
                  ? "text-zinc-900 border-zinc-900"
                  : "text-zinc-400 border-transparent hover:text-zinc-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex-grow">
          {tab === "specs" && product.specs && (
            <div className="flex flex-col gap-3">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between text-sm border-b border-zinc-100 pb-2 last:border-0"
                >
                  <span className="text-zinc-500">{s.label}</span>
                  <span className="font-semibold text-zinc-900">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          {tab === "features" && (
            <div className="flex flex-col gap-2.5">
              {product.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${product.colorText}`}
                  />
                  <span className="text-zinc-700">{f}</span>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-zinc-100 text-xs text-zinc-500 leading-relaxed">
                <span className="font-bold text-zinc-900 block mb-1">
                  Suitable for:
                </span>
                {product.suitable}
              </div>
            </div>
          )}

          {tab === "sizes" && product.sizes && (
            <div>
              <p className="text-xs text-zinc-500 mb-3">
                Available pack sizes:
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold bg-zinc-100 text-zinc-700 px-2.5 py-1 border border-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
