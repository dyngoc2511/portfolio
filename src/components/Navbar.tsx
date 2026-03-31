import { motion } from "motion/react";

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Navbar({ currentView, onNavigate }: NavbarProps) {
  const navItems = [
    { id: "experience", label: "Experience" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div 
          className="text-xl font-black tracking-tighter text-primary uppercase font-headline cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          2026 Portfolio
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`font-headline font-semibold text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative pb-1 ${
                currentView === item.id ? "text-primary" : "text-secondary hover:text-primary"
              }`}
            >
              {item.label}
              {currentView === item.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <button 
          onClick={() => onNavigate("contact")}
          className="bg-primary text-[#3f4041] px-8 py-2.5 rounded-full font-headline font-bold text-sm tracking-tight hover:scale-95 active:scale-90 transition-transform shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        >
          Let's Connect
        </button>
      </div>
    </nav>
  );
}
