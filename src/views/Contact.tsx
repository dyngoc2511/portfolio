import { motion } from "motion/react";
import { Linkedin, Twitter, Instagram, Send, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-[10px] uppercase tracking-[0.4em] text-secondary mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-outline-variant/30" />
              Strategic Partnership
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.05] mb-12">
              Let's Build <br />
              <span className="metallic-gradient">Something</span> <br />
              Revolutionary.
            </h1>
            <p className="text-base text-secondary max-w-sm mb-16 leading-relaxed">
              Bridging the gap between creative vision and technical execution through AI strategy and growth infrastructure.
            </p>
            
            {/* Social Bento */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://linkedin.com/in/veelav" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col p-8 bg-surface-low border border-white/5 transition-all duration-500 hover:border-white/20">
                <span className="text-[9px] text-outline-variant mb-3 uppercase tracking-widest group-hover:text-secondary">LinkedIn</span>
                <span className="font-headline text-base text-secondary group-hover:text-primary">Professional</span>
                <ArrowUpRight size={14} className="absolute top-6 right-6 text-outline-variant group-hover:text-primary transition-all" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="group relative flex flex-col p-8 bg-surface-low border border-white/5 transition-all duration-500 hover:border-white/20">
                <span className="text-[9px] text-outline-variant mb-3 uppercase tracking-widest group-hover:text-secondary">Resume</span>
                <span className="font-headline text-base text-secondary group-hover:text-primary">View CV</span>
                <ArrowUpRight size={14} className="absolute top-6 right-6 text-outline-variant group-hover:text-primary transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-low border border-white/5 p-8 md:p-16 rounded-2xl">
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-3 group">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-outline-variant group-focus-within:text-primary transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-transparent border-0 border-b border-outline-variant/30 px-0 py-3 text-primary focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/30 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-3 group">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-outline-variant group-focus-within:text-primary transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-0 border-b border-outline-variant/30 px-0 py-3 text-primary focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/30 text-sm"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 group">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-outline-variant group-focus-within:text-primary transition-colors">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-0 border-b border-outline-variant/30 px-0 py-3 text-primary focus:ring-0 focus:border-primary transition-all placeholder:text-outline-variant/30 resize-none text-sm"
                  />
                </div>
                
                <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <p className="text-[10px] text-outline-variant uppercase tracking-widest flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                    AI Strategy & Marketing Infrastructure
                  </p>
                  <button className="px-12 py-4 bg-primary text-[#3f4041] font-headline font-bold text-[11px] uppercase tracking-widest transition-all active:scale-95 hover:brightness-110">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Decorative Image */}
            <div className="mt-8 overflow-hidden aspect-[21/7] relative rounded-2xl border border-white/5">
              <img 
                src="https://picsum.photos/seed/contact/1200/400" 
                alt="Decorative" 
                className="w-full h-full object-cover grayscale opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[9px] uppercase tracking-[0.4em] text-outline-variant">Available for select projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
