import React, { useState } from "react";
import { Phone, MapPin, Check, Mail } from "lucide-react";
import { SectionLabel } from "../App";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send inquiry");
      }

      setSent(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionLabel>Contact</SectionLabel>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-6">
              Let's talk <br /> fluid requirements.
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed mb-12 max-w-md">
              Whether you need bulk supply, distribution inquiries, or technical
              guidance on the right oil, coolant, gear fluid, or ATF — our team
              is ready to help.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Phone className="w-6 h-6 text-zinc-900" />,
                  label: "Primary Phone",
                  value: "+91 98490 21477",
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
                  icon: <Mail className="w-6 h-6 text-zinc-900" />,
                  label: "Email",
                  value: (
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=info@freeze.net.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      info@freeze.net.in
                    </a>
                  ),
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
                      Email *
                    </label>

                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-zinc-300 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none text-sm text-zinc-900"
                    />
                  </div>
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
                    <option value="eco-4t">ECO 4T 20W40</option>
                    <option value="semi-4t">Semi Synth 4T 20W40</option>
                    <option value="semi-5w30">Semi Synth 5W30</option>
                    <option value="synth-5w30">Synth 5W30</option>
                    <option value="20w40-cf4">20W40 Diesel Oil (CF-4)</option>
                    <option value="turbo-15w40">
                      Turbo 15W40 Diesel Oil (CH-4)
                    </option>
                    <option value="15w40-ci4">15W40 Diesel Oil (CI-4)</option>
                    <option value="gear-90">Gear 90 (GL-4)</option>
                    <option value="gear-140">Gear 140 (GL-4)</option>
                    <option value="gear-ep-80w90">Gear EP 80W90 (GL-5)</option>
                    <option value="gear-320">Gear 320 Industrial</option>
                    <option value="atf-tq">ATF (TQ)</option>
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
                  disabled={loading}
                  className="w-full bg-zinc-900 text-white py-4 font-bold tracking-widest uppercase text-sm hover:bg-zinc-800 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
