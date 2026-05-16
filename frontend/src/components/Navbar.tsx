import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={clsx("fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 font-jakarta", scrolled ? "bg-white shadow-sm border-b border-border" : "bg-white/95 backdrop-blur-sm")}>
        <a href="#" className="font-extrabold text-xl text-navy">
          Career<span className="text-primary">Elevate</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNav(link.href)} className="text-slate hover:text-navy text-sm font-medium transition-colors">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => handleNav("#contact")} className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all shadow-orange">
          Get Started →
        </button>

        <button className="md:hidden text-navy" onClick={() => setMenuOpen((p) => !p)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={clsx("fixed top-[64px] left-0 right-0 z-40 bg-white border-b border-border px-6 py-5 flex flex-col gap-4 transition-all duration-300 md:hidden font-jakarta", menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none")}>
        {NAV_LINKS.map((link) => (
          <button key={link.href} onClick={() => handleNav(link.href)} className="text-left text-navy font-medium text-base hover:text-primary transition-colors">
            {link.label}
          </button>
        ))}
        <button onClick={() => handleNav("#contact")} className="mt-2 bg-primary text-white font-bold text-sm px-5 py-3 rounded-lg w-full">
          Get Started →
        </button>
      </div>
    </>
  );
}