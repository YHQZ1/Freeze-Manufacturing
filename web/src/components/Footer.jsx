import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 pt-16 pb-8 border-t-4 border-zinc-800">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-24 pb-12 border-b border-zinc-800">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-5 text-white cursor-pointer">
              <img
                src="/logo.png"
                alt="Freeze Logo"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <span className="font-bold text-xl sm:text-2xl tracking-tight leading-tight">
                Freeze Manufacturers
                <span className="font-normal text-zinc-500">.</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Automotive fluids and lubricants for engines, gears,
              transmissions, cooling systems, workshops, and fleets. Based in
              Hyderabad, India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:gap-24">
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
                Products
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <a
                    href="#certifications"
                    className="hover:text-white cursor-pointer"
                  >
                    Certifications
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white cursor-pointer"
                  >
                    Engine Oils
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white cursor-pointer"
                  >
                    Diesel Oils
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white cursor-pointer"
                  >
                    Gear Oils & ATF
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white cursor-pointer"
                  >
                    Radiator Coolants
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="font-mono">+91 98490 21477</li>
                <li className="font-mono">+91 78744 90900</li>
                <li>Hyderabad, India</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 text-xs text-zinc-600 gap-3">
          <p>
            © {new Date().getFullYear()} Freeze Manufacturers. All
            rights reserved.
          </p>
          <p>Designed for Automotive Fluid Performance.</p>
        </div>
      </div>
    </footer>
  );
}
