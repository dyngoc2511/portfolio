import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  key?: React.Key;
  title: string;
  category: string;
  description: string;
  image?: string;
  size?: "large" | "small";
  onClick?: () => void;
}

export function ProjectCard({ title, category, description, image, size = "small", onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`group relative rounded-xl overflow-hidden border border-outline-variant/10 bg-surface-low transition-colors hover:bg-surface-high ${
        onClick ? "cursor-pointer" : ""
      } ${
        size === "large" ? "md:col-span-2 aspect-[8/3]" : "aspect-[4/3]"
      }`}
    >
      {image && (
        <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
      )}
      
      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
        <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold mb-2 block">
          {category}
        </span>
        <h3 className={`font-headline font-bold text-on-surface mb-3 leading-tight ${
          size === "large" ? "text-3xl" : "text-xl"
        }`}>
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-md mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
          {description}
        </p>
        
        {onClick && (
          <div className="flex items-center gap-2 text-primary font-headline text-xs uppercase tracking-widest">
            <span>Case Study</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
