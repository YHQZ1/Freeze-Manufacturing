import React from "react";

export default function Footer() {
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
                Swati Chemicals
                <span className="font-normal text-zinc-500">.</span>
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
            © {new Date().getFullYear()} Swati Chemicals Cooling Solutions. All
            rights reserved.
          </p>
          <p>Designed for Industrial Performance.</p>
        </div>
      </div>
    </footer>
  );
}
