import React, { useState } from "react";
import { Check } from "lucide-react";

export default function ProductCard({ product }) {
  const [tab, setTab] = useState("specs");

  return (
    <div className="bg-white border border-zinc-200 flex flex-col">
      <div className="bg-zinc-50 pt-10 pb-6 px-6 flex justify-center items-end h-[300px] relative border-b border-zinc-100">
        <div className="absolute top-4 left-4 bg-white border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-500 tracking-widest uppercase shadow-sm">
          {product.type.split(" — ")[0]}
        </div>
        <img
          src={product.imageName}
          alt={product.name}
          className="h-[220px] w-auto object-contain drop-shadow-md"
        />
      </div>

      <div className={`h-1.5 w-full ${product.colorBg}`} />

      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-zinc-900 tracking-tight mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-500 mb-2">{product.tagline}</p>
        <p
          className={`text-xs font-bold tracking-widest uppercase mb-8 ${product.colorText}`}
        >
          {product.type}
        </p>

        <div className="flex border-b border-zinc-200 mb-6">
          {["specs", "features"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 px-4 text-xs font-bold tracking-widest uppercase cursor-pointer border-b-2 -mb-[1px] ${
                tab === t
                  ? "text-zinc-900 border-zinc-900"
                  : "text-zinc-400 border-transparent hover:text-zinc-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex-grow">
          {tab === "specs" ? (
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
          ) : (
            <div className="flex flex-col gap-3">
              {product.features.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm">
                  <Check
                    className={`w-4 h-4 mt-0.5 shrink-0 ${product.colorText}`}
                  />
                  <span className="text-zinc-700">{f}</span>
                </div>
              ))}
              <div className="mt-auto pt-6 border-t border-zinc-100 text-xs text-zinc-500 leading-relaxed">
                <span className="font-bold text-zinc-900 block mb-1">
                  Suitable for:
                </span>
                {product.suitable}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
