export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 px-6 font-jakarta">
      <div className="max-w-5xl mx-auto">
        
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 pb-8 border-b border-white/10">
          
          <div className="font-extrabold text-2xl">
            Career<span className="text-primary">Elevate</span>
          </div>

        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-slate-light text-sm">
          <p>© {new Date().getFullYear()} CareerElevate. All rights reserved.</p>
          <p>Made with ❤️ for job seekers.</p>
        </div>

      </div>
    </footer>
  );
}