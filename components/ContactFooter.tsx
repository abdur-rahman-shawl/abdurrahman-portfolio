"use client";

export default function ContactFooter() {
  return (
    <>
      <section className="relative w-full bg-[var(--background)] py-32 md:py-48 px-6 border-t border-[var(--foreground)]/10 z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-4">
             <div className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase font-bold">/// Initialization</div>
             <h2 className="font-sans font-bold text-5xl md:text-8xl text-[var(--foreground)] uppercase tracking-tighter leading-none">
                Deploy A <br/><span className="font-serif italic text-[var(--accent)]">Conversation.</span>
             </h2>
          </div>

          <form className="flex flex-col gap-6 md:gap-8 w-full mt-4 md:mt-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-[var(--foreground)]/20 py-4 font-mono text-base md:text-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:opacity-40 rounded-none"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-[var(--foreground)]/20 py-4 font-mono text-base md:text-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:opacity-40 rounded-none"
              />
            </div>
            <textarea 
              rows={4} 
              placeholder="System specifications / Inquiries" 
              className="w-full bg-transparent border-b border-[var(--foreground)]/20 py-4 font-mono text-base md:text-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none placeholder:opacity-40 rounded-none"
            />
            <button className="magnetic-btn self-start bg-[var(--foreground)] text-[var(--background)] px-8 md:px-10 py-4 md:py-5 rounded-full font-sans font-bold uppercase tracking-tight hover:bg-[var(--accent)] transition-colors mt-6 text-xs md:text-sm">
              Execute Transmission
            </button>
          </form>
        </div>
      </section>

      <footer className="relative w-full bg-[#111111] text-[var(--primary)] pt-20 pb-10 px-6 rounded-t-[3rem] md:rounded-t-[4rem] z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 font-mono text-sm">
           
           <div className="col-span-1 sm:col-span-2 flex flex-col justify-between">
              <div>
                <div className="font-sans font-bold text-2xl md:text-3xl tracking-tight uppercase mb-4 text-[var(--background)]">Abdur_</div>
                <p className="opacity-60 max-w-sm leading-relaxed text-xs md:text-sm">Translating frontier AI into sophisticated software systems.</p>
              </div>
              <div className="mt-12 flex items-center gap-3 border border-[var(--primary)]/20 px-5 py-3 rounded-full w-max bg-[var(--foreground)] relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[var(--primary)]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                 <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                 <span className="opacity-80 text-xs tracking-widest uppercase">System Operational</span>
              </div>
           </div>

           <div className="flex flex-col gap-4">
              <div className="text-[var(--accent)] font-bold mb-2 tracking-widest uppercase text-xs">Directory</div>
              <a href="#features" className="hover:text-[var(--accent)] transition-colors duration-300 w-max text-xs opacity-80 hover:opacity-100">Features</a>
              <a href="#philosophy" className="hover:text-[var(--accent)] transition-colors duration-300 w-max text-xs opacity-80 hover:opacity-100">Philosophy</a>
              <a href="#protocol" className="hover:text-[var(--accent)] transition-colors duration-300 w-max text-xs opacity-80 hover:opacity-100">Projects</a>
           </div>

           <div className="flex flex-col gap-4">
              <div className="text-[var(--accent)] font-bold mb-2 tracking-widest uppercase text-xs">Connections</div>
              <a href="#" className="hover:text-[var(--accent)] transition-colors duration-300 w-max text-xs opacity-80 hover:opacity-100">GitHub</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors duration-300 w-max text-xs opacity-80 hover:opacity-100">LinkedIn</a>
              <a href="#" className="hover:text-[var(--accent)] transition-colors duration-300 w-max text-xs opacity-80 hover:opacity-100">Twitter</a>
           </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[var(--primary)]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] md:text-xs opacity-40 font-mono tracking-widest uppercase">
           <div>&copy; {new Date().getFullYear()} Abdur Rahman. All rights reserved.</div>
           <div>BRUTALIST_SIGNAL // v1.0.0</div>
        </div>
      </footer>
    </>
  );
}
