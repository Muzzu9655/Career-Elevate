import { STEPS, PLATFORMS } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";

export default function HowItWorks() {
  return (
    <section id="how" className="py-12 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="The Process"
          title="From Intake to Inbox<br/>in 24–48 Hours"
          desc="A simple, transparent process — no back-and-forth confusion."
        />

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-full h-px bg-border z-0" />
              )}
              <div className="relative z-10 w-12 h-12 rounded-full border-2 border-primary bg-orange-50 flex items-center justify-center font-extrabold text-primary text-sm mx-auto mb-3">
                {step.num}
              </div>
              <h3 className="font-bold text-sm text-navy mb-1">{step.title}</h3>
              <p className="text-slate text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Platforms We Optimise For
          </p>
          <div className="flex flex-wrap gap-3">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-navy shadow-card">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}