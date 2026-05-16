import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";
import clsx from "clsx";

type Tab = "freshers" | "experienced";

const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: "freshers", label: "Freshers", icon: "🎓" },
  { key: "experienced", label: "Experienced", icon: "💼" },

];

export default function Services() {
  const [active, setActive] = useState<Tab>("freshers");

  return (
    <section id="services" className="py-12 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="What We Offer"
          title="Services Tailored to<br/>Your Career Stage"
          desc="More visibility. More callbacks. Better opportunities."
        />

        {/* Tabs */}
        <div className="flex gap-2 bg-white border border-border rounded-xl p-1.5 w-fit flex-wrap mb-8 shadow-card">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={clsx(
                "flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-lg transition-all",
                active === tab.key
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate hover:text-navy"
              )}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES[active].map((svc) => (
            <div
              key={svc.title}
              className="bg-white border border-border rounded-2xl p-5 card-hover group relative overflow-hidden shadow-card"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-xl mb-4">
                {svc.icon}
              </div>
              <h3 className="font-bold text-sm text-navy mb-2">{svc.title}</h3>
              <p className="text-slate text-xs leading-relaxed mb-4">{svc.desc}</p>
              <div className="font-extrabold text-primary text-base">
                {svc.price}{" "}
                <span className="text-slate font-normal text-xs">/ {svc.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}