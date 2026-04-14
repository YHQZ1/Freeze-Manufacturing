import React, { useState, useEffect } from "react";
import {
  Thermometer,
  ShieldCheck,
  Droplets,
  Settings,
  Phone,
  MapPin,
  Factory,
  Menu,
  X,
  Check,
  ChevronDown,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────
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
      { label: "Mix Ratio", value: "1:1 with water" },
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
      { label: "Mix Ratio", value: "1:1 with water" },
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
      { label: "Mix Ratio", value: "1:1 with water" },
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

// ─── Shared Components ───────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-6 h-[2px] bg-zinc-900" />
      <span className="text-xs font-bold tracking-widest text-zinc-900 uppercase">
        {children}
      </span>
    </div>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Products", "Technology", "Benefits", "FAQ", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors ${
        scrolled
          ? "bg-white border-b border-zinc-200 shadow-sm py-2"
          : "bg-zinc-50 py-4"
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/logo.png"
            alt="Freeze Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-zinc-900 font-bold text-xl tracking-tight">
            Swati Chemicals<span className="font-normal text-zinc-500">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 cursor-pointer"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-zinc-900 text-white px-6 py-2.5 rounded text-sm font-semibold tracking-wide hover:bg-zinc-800 cursor-pointer"
          >
            GET A QUOTE
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-zinc-900 cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 px-6 py-4 flex flex-col shadow-lg mt-2">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-zinc-800 font-medium border-b border-zinc-100 last:border-0 cursor-pointer"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="w-full bg-zinc-50 pt-32 pb-16 lg:pt-40 lg:pb-20 min-h-[85vh] flex items-center border-b border-zinc-200">
      <div className="w-full px-6 lg:px-12 xl:px-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
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

        {/* Right Product Images */}
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

// ─── Product Card ─────────────────────────────────────────────────────
function ProductCard({ product }) {
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

// ─── Products Section ────────────────────────────────────────────────
function Products() {
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

// ─── Technology Section ──────────────────────────────────────────────
function Technology() {
  return (
    <section
      id="technology"
      className="w-full bg-zinc-50 py-16 lg:py-24 border-y border-zinc-200"
    >
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <SectionLabel>Technology</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mt-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-8">
              Engineered for <br /> Thermal Control.
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed max-w-2xl">
              <p>
                Freeze coolants use long-life organic acid inhibitor systems
                that form a protective molecular layer on metal surfaces rather
                than saturating the fluid — resulting in slower depletion,
                longer service intervals, and more stable protection throughout
                the coolant's life.
              </p>
              <p>
                Our formulations are free from amines, borates, silicates and
                phosphates — reducing deposit formation, protecting non-metallic
                components, and ensuring compatibility with modern aluminium
                engine architectures.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                label: "OAT",
                name: "Organic Acid Technology",
                desc: "Carboxylate inhibitors coat metal surfaces at a molecular level. Minimum depletion, maximum longevity.",
                color: "border-emerald-500",
                textColor: "text-emerald-700",
              },
              {
                label: "HOAT",
                name: "Hybrid Organic Acid Technology",
                desc: "Combines OAT longevity with inorganic silicate fast-action protection for demanding engines.",
                color: "border-red-600",
                textColor: "text-red-700",
              },
              {
                label: "IAT",
                name: "Inorganic Additive Technology",
                desc: "Proven silicate and phosphate inhibitors. Fast-acting, widely compatible, ideal for older engine designs.",
                color: "border-blue-600",
                textColor: "text-blue-700",
              },
            ].map((t) => (
              <div
                key={t.label}
                className={`bg-white border border-zinc-200 border-l-4 ${t.color} p-6 shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase ${t.textColor}`}
                  >
                    {t.label}
                  </span>
                  <span className="text-sm font-bold text-zinc-900">
                    {t.name}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Benefits ────────────────────────────────────────────────────────
function Benefits() {
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

        {/* Specification Table */}
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

// ─── FAQ ─────────────────────────────────────────────────────────────
function FAQ() {
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

// ─── Contact ─────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Contact Info */}
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-6">
              Let's talk <br /> cooling solutions.
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-12 max-w-md">
              Whether you need bulk supply, distribution inquiries, or technical
              guidance on the right coolant for your application — our team is
              ready to help.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Phone className="w-6 h-6 text-zinc-900" />,
                  label: "Primary Phone",
                  value: "+91 97376 00900",
                },
                {
                  icon: <Phone className="w-6 h-6 text-zinc-900" />,
                  label: "Alternate Phone",
                  value: "+91 78744 90900",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-zinc-900" />,
                  label: "Business",
                  value: "Hyderabad, India",
                },
                {
                  icon: <Factory className="w-6 h-6 text-zinc-900" />,
                  label: "Industry",
                  value: "Coolant Manufacturing",
                },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="bg-zinc-50 p-3 rounded-sm border border-zinc-100 shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-1">
                      {c.label}
                    </div>
                    <div className="text-base font-semibold text-zinc-900">
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-zinc-50 border border-zinc-200 p-8 lg:p-12 shadow-sm">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                  Message received.
                </h3>
                <p className="text-zinc-600">
                  Our commercial team will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-8">
                  Request a Quote
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none text-sm text-zinc-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none text-sm text-zinc-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none text-sm text-zinc-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                    Product Interest
                  </label>
                  <select
                    value={form.product}
                    onChange={(e) =>
                      setForm({ ...form, product: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none text-sm text-zinc-900 cursor-pointer"
                  >
                    <option value="">Select a product</option>
                    <option value="green">Green Coolant (OAT)</option>
                    <option value="red">Red / Pink Coolant (HOAT)</option>
                    <option value="blue">Blue Coolant (IAT)</option>
                    <option value="all">Multiple / Unsure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 bg-white border border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none text-sm text-zinc-900 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-900 text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-zinc-800 cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full bg-zinc-950 pt-16 pb-8 border-t-4 border-zinc-800">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-12 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-3 mb-6 text-white cursor-pointer">
              <img
                src="/logo.png"
                alt="Freeze Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <span className="font-bold text-2xl tracking-tight">
                Swati Chemicals<span className="font-normal text-zinc-500">.</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Industrial grade coolant solutions engineered for maximum thermal
              control and engine protection. Based in Hyderabad, India.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 lg:gap-24">
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
                Products
              </h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li>
                  <a
                    href="#products"
                    className="hover:text-white cursor-pointer"
                  >
                    Green Coolant (OAT)
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white cursor-pointer"
                  >
                    Red / Pink Coolant (HOAT)
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white cursor-pointer"
                  >
                    Blue Coolant (IAT)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="font-mono">+91 97376 00900</li>
                <li className="font-mono">+91 78744 90900</li>
                <li>Hyderabad, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-zinc-600 gap-4">
          <p>
            © {new Date().getFullYear()} Swati Chemicals Cooling Solutions. All rights
            reserved.
          </p>
          <p>Designed for Industrial Performance.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Root Application ─────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Products />
        <Technology />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
