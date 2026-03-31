import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-headline font-bold tracking-tight transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-[#3f4041] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:brightness-110",
    secondary: "bg-surface-high text-primary border border-outline-variant/30 hover:bg-surface-bright",
    ghost: "text-secondary hover:text-primary",
  };

  return (
    <motion.button
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
