import { SITE_CONFIG } from "@/lib/constants";

const stats = [

];

export default function Hero() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative px-6 pt-28 pb-16 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-50 rounded-full blur-[80px] opacity-40 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-blink" />
          Career Acceleration Services 
        </div>

        {/* Headline */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-navy mb-5">
          Your Career Profile Should
          <br />
          <span className="text-gradient">Open Doors,</span>
          <br />
          Not Close Them
        </h1>

        <p className="text-slate text-lg max-w-xl mx-auto mb-8 font-light">
          Everything you need to get noticed — Resume, LinkedIn, and Naukri optimisation in one place.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => handleNav("#services")}
            className="bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-xl shadow-orange transition-all hover:-translate-y-0.5 text-sm"
          >
            Explore Services
          </button>
         
        </div>
      </div>
    </section>
  );
}