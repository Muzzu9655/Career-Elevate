import { WHY_US } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";

const ATS_BARS = [
  { label: "Before ResumeEdge", value: 34, color: "#ef4444" },
  { label: "After ResumeEdge", value: 91, color: "linear-gradient(90deg,#f97316,#f59e0b)" },
  { label: "LinkedIn SSI Score", value: 78, color: "#0077b5" },
  { label: "Naukri Visibility", value: 85, color: "linear-gradient(90deg,#f87022,#f59e0b)" },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Why CareerElevate"
          title="Not Just a Resume —<br/>A Career Asset"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Why list */}
          <div className="flex flex-col gap-3">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex gap-4 items-start bg-white border border-border rounded-xl p-4 shadow-card hover:border-primary/30 hover:shadow-card-hover transition-all">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-sm text-navy mb-1">{item.title}</h3>
                  <p className="text-slate text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ATS Visual */}
          <div className="bg-surface border border-border rounded-2xl p-6 lg:sticky lg:top-24 shadow-card">
            <h3 className="font-bold text-base text-navy mb-6">ATS Score Comparison</h3>
            <div className="flex flex-col gap-4">
              {ATS_BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-slate text-xs">{bar.label}</span>
                    <span className="text-primary font-semibold text-xs">{bar.value}%</span>
                  </div>
                  <div className="bg-surface2 rounded-full h-2 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: bar.value + "%", background: bar.color }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
              <div className="font-extrabold text-3xl text-primary">2.5×</div>
              <div className="text-slate text-xs mt-1">
                Average increase in recruiter views
                <br />within the first 30 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}