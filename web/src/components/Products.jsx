import React from "react";
import ProductCard from "./ProductCard";
import { SectionLabel } from "../App";

const PRODUCTS = [
  {
    id: "green",
    name: "Green Coolant",
    tagline: "Long-life organic formula",
    type: "OAT — Organic Acid Technology",
    colorText: "text-emerald-700",
    colorBg: "bg-emerald-500",
    colorBorder: "border-emerald-500",
    imageName: "/green.webp",
    specs: [
      { label: "Base", value: "Ethylene Glycol" },
      { label: "Technology", value: "OAT" },
      { label: "Mix Ratio", value: "1:5 with water" },
      { label: "Protection", value: "Up to −35 °C / +120 °C" },
      { label: "Service Life", value: "Up to 5 years" },
      { label: "Pack Size", value: "1 L" },
    ],
    features: [
      "Amine, boron & silicate free",
      "Advanced corrosion protection",
      "Long-life organic coolant",
      "For cars & commercial vehicles",
    ],
    suitable: "Passenger cars, light commercial vehicles, SUVs",
  },
  {
    id: "red",
    name: "Red / Pink Coolant",
    tagline: "High-performance extended-life formula",
    type: "HOAT — Hybrid Organic Acid Technology",
    colorText: "text-red-700",
    colorBg: "bg-red-600",
    colorBorder: "border-red-600",
    imageName: "/red.webp",
    specs: [
      { label: "Base", value: "Ethylene Glycol" },
      { label: "Technology", value: "HOAT" },
      { label: "Mix Ratio", value: "1:5 with water" },
      { label: "Protection", value: "Up to −35 °C / +125 °C" },
      { label: "Service Life", value: "Up to 5 years" },
      { label: "Pack Size", value: "1 L" },
    ],
    features: [
      "Hybrid organic acid technology",
      "Superior heat dissipation",
      "Advanced corrosion protection",
      "For all modern engine types",
    ],
    suitable: "Heavy-duty trucks, commercial fleet vehicles, diesel engines",
  },
  {
    id: "blue",
    name: "Blue Coolant",
    tagline: "Premium universal protection formula",
    type: "IAT — Inorganic Additive Technology",
    colorText: "text-blue-700",
    colorBg: "bg-blue-600",
    colorBorder: "border-blue-600",
    imageName: "/blue.webp",
    specs: [
      { label: "Base", value: "Ethylene Glycol" },
      { label: "Technology", value: "IAT" },
      { label: "Mix Ratio", value: "1:5 with water" },
      { label: "Protection", value: "Up to −35 °C / +118 °C" },
      { label: "Service Life", value: "Up to 2 years" },
      { label: "Pack Size", value: "1 L" },
    ],
    features: [
      "Universal compatibility",
      "Anti-freeze & anti-boil",
      "Anti-corrosion protection",
      "For older & classic engines",
    ],
    suitable: "Classic cars, older engines, motorcycles, light equipment",
  },
];

export default function Products() {
  return (
    <section id="products" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <SectionLabel>Product Range</SectionLabel>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
            Three formulas.
            <br />
            One standard of quality.
          </h2>
          <p className="text-zinc-600 max-w-md text-lg">
            Each variant is engineered for a specific engine type and use case.
            All available in 1 L packs for cars and commercial vehicles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
