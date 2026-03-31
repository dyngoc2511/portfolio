export function Footer() {
  return (
    <footer className="w-full py-12 px-8 mt-20 border-t border-outline-variant/15 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-secondary">
            © 2026 SCARLETT DANG. ALL RIGHTS RESERVED.
          </p>
        </div>
        
        <div className="flex gap-8">
          {[
            { name: "LinkedIn", url: "https://linkedin.com/in/veelav" },
            { name: "GitHub", url: "#" },
            { name: "Read.cv", url: "#" }
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url !== "#" ? "_blank" : undefined}
              rel={link.url !== "#" ? "noopener noreferrer" : undefined}
              className="font-body text-[10px] uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
