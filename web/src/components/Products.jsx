import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { SectionLabel } from "../App";

// ── Coolant products ─────────────────────────────────────────────────────────
const COOLANTS = [
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
      { label: "Mix Ratio", value: "1:1 with water" },
      { label: "Protection", value: "Up to −35 °C / +120 °C" },
      { label: "Service Life", value: "Up to 5 years" },
      { label: "Pack Sizes", value: "1 L · 3 L · 5 L · 20 L" },
    ],
    features: [
      "Amine, boron & silicate free",
      "Advanced corrosion protection",
      "Long-life organic coolant",
      "For cars & commercial vehicles",
    ],
    suitable: "Passenger cars, light commercial vehicles, SUVs",
    category: "Coolant",
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
      { label: "Mix Ratio", value: "1:1 with water" },
      { label: "Protection", value: "Up to −35 °C / +125 °C" },
      { label: "Service Life", value: "Up to 5 years" },
      { label: "Pack Sizes", value: "1 L · 3 L · 5 L · 20 L" },
    ],
    features: [
      "Hybrid organic acid technology",
      "Superior heat dissipation",
      "Advanced corrosion protection",
      "For all modern engine types",
    ],
    suitable: "Heavy-duty trucks, commercial fleet vehicles, diesel engines",
    category: "Coolant",
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
      { label: "Mix Ratio", value: "1:1 with water" },
      { label: "Protection", value: "Up to −35 °C / +118 °C" },
      { label: "Service Life", value: "Up to 2 years" },
      { label: "Pack Sizes", value: "1 L · 3 L · 5 L · 20 L" },
    ],
    features: [
      "Universal compatibility",
      "Anti-freeze & anti-boil",
      "Anti-corrosion protection",
      "For older & classic engines",
    ],
    suitable: "Classic cars, older engines, motorcycles, light equipment",
    category: "Coolant",
  },
];

// ── Oil / Lubricant products ─────────────────────────────────────────────────
// Unified schema: colorBg / colorText (same as coolants), grade, sizes, no imageName
const OIL_PRODUCTS = [
  // Bike / 4T
  {
    id: "eco-4t",
    name: "ECO 4T 20W40",
    tagline: "Economy mineral 4-stroke formula",
    grade: "API SL",
    category: "Bike Oil",
    type: "4-Stroke Motorcycle Oil",
    colorBg: "bg-amber-500",
    colorText: "text-amber-700",
    features: [
      "Mineral base formulation",
      "Wet clutch compatible",
      "Economy-grade protection",
      "Smooth gear shifts",
    ],
    sizes: ["900ml", "1L"],
    suitable: "Standard 4-stroke motorcycles & scooters",
  },
  {
    id: "semi-4t",
    name: "Semi Synth 4T 20W40",
    tagline: "Semi-synthetic 4-stroke blend",
    grade: "API SN",
    category: "Bike Oil",
    type: "4-Stroke Motorcycle Oil",
    colorBg: "bg-amber-500",
    colorText: "text-amber-700",
    features: [
      "Semi-synthetic blend",
      "Wet clutch compatible",
      "Enhanced engine protection",
      "Reduced oil consumption",
    ],
    sizes: ["900ml", "1L"],
    suitable: "Performance motorcycles & modern scooters",
  },
  // Engine Oils (passenger car)
  {
    id: "semi-5w30",
    name: "Semi Synth 5W30",
    tagline: "Multi-grade semi-synthetic PCMO",
    grade: "API SN",
    category: "Engine Oil",
    type: "Passenger Car Motor Oil",
    colorBg: "bg-blue-600",
    colorText: "text-blue-700",
    features: [
      "Semi-synthetic formulation",
      "Multi-grade cold-start protection",
      "Fuel economy additive package",
      "Sludge & deposit control",
    ],
    sizes: ["1L", "3L", "3.5L", "4L", "4.5L", "5L", "50L", "210L"],
    suitable: "Petrol & light diesel passenger cars",
  },
  {
    id: "synth-5w30",
    name: "Synth 5W30",
    tagline: "Full synthetic low-SAPS formula",
    grade: "API SP · A5/B5",
    category: "Engine Oil",
    type: "Fully Synthetic PCMO",
    colorBg: "bg-blue-600",
    colorText: "text-blue-700",
    features: [
      "100% full synthetic base",
      "Latest API SP rating",
      "A5/B5 fuel economy spec",
      "Extended drain intervals",
    ],
    sizes: ["3L", "3.5L", "4L", "4.5L", "5L", "50L", "210L"],
    suitable: "Modern petrol & diesel cars requiring low-SAPS oils",
  },
  // Diesel / Commercial
  {
    id: "20w40-cf4",
    name: "20W40",
    tagline: "Wide-range diesel engine oil",
    grade: "CF-4",
    category: "Diesel",
    type: "Diesel Engine Oil",
    colorBg: "bg-orange-500",
    colorText: "text-orange-700",
    features: [
      "High-speed four-stroke diesel",
      "Soot dispersal & oxidation stability",
      "Anti-wear additive package",
      "Wide viscosity range",
    ],
    sizes: ["500ml", "1L", "3L", "5L", "7.5L", "10L", "20L", "50L", "210L"],
    suitable: "Trucks, buses, agricultural & construction equipment",
  },
  {
    id: "turbo-15w40",
    name: "Turbo 15W40",
    tagline: "Turbocharged & EGR-compatible diesel oil",
    grade: "CH-4",
    category: "Diesel",
    type: "Turbocharged Diesel Oil",
    colorBg: "bg-orange-500",
    colorText: "text-orange-700",
    features: [
      "Turbocharged engine protection",
      "Soot & sludge control",
      "Anti-wear & anti-oxidation",
      "Compatible with EGR engines",
    ],
    sizes: [
      "500ml",
      "1L",
      "3L",
      "3.5L",
      "5L",
      "7.5L",
      "8.5L",
      "10L",
      "15L",
      "20L",
      "50L",
      "210L",
    ],
    suitable: "Turbocharged commercial vehicles & fleet operators",
  },
  {
    id: "15w40-ci4",
    name: "15W40",
    tagline: "Heavy-duty extended drain diesel oil",
    grade: "CI-4",
    category: "Diesel",
    type: "Heavy-Duty Diesel Oil",
    colorBg: "bg-orange-500",
    colorText: "text-orange-700",
    features: [
      "High-output diesel engines",
      "EGR & DPF compatible",
      "Extended drain capable",
      "Thermal & oxidation stability",
    ],
    sizes: ["7.5L", "10L", "50L", "210L"],
    suitable: "Heavy-duty trucks, mining & construction fleet",
  },
  // Gear Oils
  {
    id: "gear-90",
    name: "Gear 90",
    tagline: "EP-rated manual gearbox oil",
    grade: "GL-4",
    category: "Gear Oil",
    type: "Manual Gearbox Oil",
    colorBg: "bg-slate-600",
    colorText: "text-slate-700",
    features: [
      "EP additive package",
      "Anti-wear protection",
      "Smooth gear engagement",
      "Corrosion & rust inhibition",
    ],
    sizes: ["500ml", "1L", "5L", "10L", "20L", "50L", "210L"],
    suitable: "Manual gearboxes, axles & transfer cases",
  },
  {
    id: "gear-140",
    name: "Gear 140",
    tagline: "High-viscosity heavy gear oil",
    grade: "GL-4",
    category: "Gear Oil",
    type: "Heavy Gear Oil",
    colorBg: "bg-slate-600",
    colorText: "text-slate-700",
    features: [
      "High viscosity grade",
      "Extreme pressure protection",
      "Heavy load gear sets",
      "Thermal stability",
    ],
    sizes: ["500ml", "1L", "5L", "10L", "20L", "50L", "210L"],
    suitable: "Heavy-duty axles, industrial gearboxes & differentials",
  },
  {
    id: "gear-ep-80w90",
    name: "Gear EP 80W90",
    tagline: "Hypoid & limited-slip differential oil",
    grade: "GL-5",
    category: "Gear Oil",
    type: "Extreme Pressure Gear Oil",
    colorBg: "bg-slate-600",
    colorText: "text-slate-700",
    features: [
      "GL-5 extreme pressure rated",
      "Hypoid differential protection",
      "Multi-grade cold-flow",
      "Anti-scoring additive",
    ],
    sizes: ["1L", "5L", "10L", "20L", "50L", "210L"],
    suitable: "Hypoid differentials, limited-slip axles",
  },
  {
    id: "gear-320",
    name: "Gear 320",
    tagline: "Long-drain industrial enclosed gear oil",
    grade: "Industrial",
    category: "Gear Oil",
    type: "Industrial Gear Oil",
    colorBg: "bg-slate-600",
    colorText: "text-slate-700",
    features: [
      "Enclosed industrial gear systems",
      "Oxidation resistant",
      "Long drain interval formulation",
      "Anti-foam & anti-rust",
    ],
    sizes: ["210L"],
    suitable: "Industrial enclosed gear drives & reducers",
  },
  // ATF
  {
    id: "atf-tq",
    name: "ATF",
    tagline: "Multi-vehicle automatic transmission fluid",
    grade: "TQ",
    category: "ATF",
    type: "Automatic Transmission Fluid",
    colorBg: "bg-violet-600",
    colorText: "text-violet-700",
    features: [
      "Automatic & CVT transmissions",
      "Power steering compatible",
      "Anti-shudder properties",
      "Oxidation & wear protection",
    ],
    sizes: ["500ml", "1L", "5L", "10L", "15L", "20L", "50L", "210L"],
    suitable: "Automatic gearboxes, power steering systems",
  },
];

const CATEGORIES = [
  "All",
  "Engine Oil",
  "Bike Oil",
  "Diesel",
  "Gear Oil",
  "Coolant",
  "ATF",
];

// ── Main Products section ────────────────────────────────────────────────────
export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allProducts = [...OIL_PRODUCTS, ...COOLANTS];
  const totalCount = allProducts.length;

  const filteredOils =
    activeCategory === "All"
      ? OIL_PRODUCTS
      : activeCategory === "Coolant"
        ? []
        : OIL_PRODUCTS.filter((p) => p.category === activeCategory);

  const filteredCoolants =
    activeCategory === "All" || activeCategory === "Coolant" ? COOLANTS : [];

  const hasResults = filteredOils.length > 0 || filteredCoolants.length > 0;

  return (
    <section id="products" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <SectionLabel>Product Range</SectionLabel>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
            {totalCount} products.
            <br />
            One standard of quality.
          </h2>
          <p className="text-zinc-600 max-w-md text-lg">
            From engine oils and gear lubricants to coolants and ATF — every
            grade engineered for reliable performance and long engine life.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="-mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto no-scrollbar mb-10 border-b border-zinc-200 pb-0">
          <div className="flex flex-nowrap sm:flex-wrap gap-2 min-w-max sm:min-w-0">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? totalCount
                : cat === "Coolant"
                  ? COOLANTS.length
                  : OIL_PRODUCTS.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 pb-3 px-4 text-xs font-bold tracking-widest uppercase cursor-pointer border-b-2 -mb-[1px] transition-colors ${
                  activeCategory === cat
                    ? "text-zinc-900 border-zinc-900"
                    : "text-zinc-400 border-transparent hover:text-zinc-600"
                }`}
              >
                {cat}
                <span
                  className={`ml-1.5 font-normal ${
                    activeCategory === cat ? "text-zinc-500" : "text-zinc-300"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
          </div>
        </div>

        {/* Product grid */}
        {hasResults ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {filteredOils.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            {filteredCoolants.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-400 text-sm py-12">
            No products in this category.
          </p>
        )}
      </div>
    </section>
  );
}
