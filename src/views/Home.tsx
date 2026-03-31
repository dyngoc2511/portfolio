import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react";

interface HomeProps {
  onNavigate: (view: string, projectId?: string) => void;
  scrollTarget?: string | null;
  onScrollComplete?: () => void;
}

export function Home({ onNavigate, scrollTarget, onScrollComplete }: HomeProps) {
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  
  // Handle scrolling when scrollTarget changes
  useEffect(() => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        // Add a small delay to ensure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          if (onScrollComplete) onScrollComplete();
        }, 100);
      }
    }
  }, [scrollTarget, onScrollComplete]);

  const projects = [
    {
      id: "ai-ugc-ecosystem",
      title: "AI-Powered UGC Ecosystem",
      category: "Growth Lead @ Deviation Lab",
      description: "Conceptualized and built an automated UGC ecosystem powered entirely by AI to drive high-volume, cost-effective user acquisition.",
      size: "large" as const,
      image: import.meta.env.BASE_URL + "cover.png"
    },
    {
      id: "product-design-ai",
      title: "Product Design for Multi-Modal AI Apps",
      category: "Product Designer @ Various AI Startups",
      description: "Architected end-to-end user journeys and scalable design systems for a portfolio of multi-modal AI applications.",
      image: import.meta.env.BASE_URL + "App_graphic_white_202603301111.jpeg"
    },
    {
      id: "short-video-viral",
      title: "Cracking the Short-Video Viral Formula",
      category: "Independent Digital Strategist",
      description: "Organically grew a global audience from scratch by identifying and exploiting content trends on TikTok and Instagram.",
      image: import.meta.env.BASE_URL + "da.png"
    },
    {
      id: "b2b-ecommerce",
      title: "Tech-Enabled Alibaba Store",
      category: "Co-founder @ DreamCraft Ltd.",
      description: "Established a tech-forward B2B e-commerce model to modernize regional supply chains in the handicraft industry.",
      image: import.meta.env.BASE_URL + "banner 2.png"
    },
    {
      id: "bid-floor-optimization",
      title: "Advanced Ad Monetization Optimization",
      category: "Ads Monetization @ iKame Global",
      description: "Maximized ad revenue and optimized the monetization stack across a portfolio of global gaming hits.",
      image: import.meta.env.BASE_URL + "ikm.png"
    }
  ];

  const timeline = [
    {
      company: "Deviation Lab",
      role: "Growth Lead",
      period: "10/2025 - Present",
      location: "HANOI, VN",
      description: "Directed end-to-end User Acquisition management and high-volume creative production using Agile Scrum frameworks. Developed an AI-powered UGC ecosystem and integrated hyper-automation tools to streamline workflows.",
      achievements: [
        "Drove organic traffic accounting for 75% of total user acquisition.",
        "Reduced manual operational overhead by 85% and significantly boosted team efficiency."
      ]
    },
    {
      company: "DreamCraft Ltd.",
      role: "Entrepreneur & Co-Founder",
      period: "04/2025 - 09/2025",
      location: "HANOI, VN",
      description: "Built and managed the company's Alibaba store, overseeing websites and a database of 20,000+ products. Managed B2B agreements and negotiated pricing with regional suppliers to optimize procurement costs.",
      achievements: [
        "Successfully facilitated and fulfilled order values up to $5,000.",
        "Optimized procurement costs for a 20,000+ product e-commerce database."
      ]
    },
    {
      company: "iKame Global",
      role: "Ads Monetization Specialist",
      period: "01/2024 - 01/2025",
      location: "HANOI, VN",
      description: "Conducted A/B tests to optimize waterfall, ad placements, and targeting strategies across multiple Ad Mediation platforms. Researched and prototyped innovative SDK integration flows to maximize ad revenue and user experience.",
      achievements: [
        "Achieved a 50% increase in ARPDAU for top titles like Bike Race and Wood Nuts.",
        "Collaborated globally to optimize monetization strategies."
      ]
    },
    {
      company: "Rocket Studio (OneSoft)",
      role: "User Acquisition",
      period: "11/2023 - 01/2024",
      location: "HANOI, VN",
      description: "Managed performance across multiple ad networks and platforms including AppsFlyer, Facebook, and Google. Utilized ASO tools like Insightrackr and Sensor Tower to conduct keyword research and analyze competitors.",
      achievements: [
        "Iteratively improved critical metrics including ROAS, CPI, CTR, and LTV.",
        "Tracked app rankings and optimized store presence."
      ]
    },
    {
      company: "Mai Dermatology Clinic",
      role: "Performance Marketing Executive",
      period: "05/2022 - 10/2023",
      location: "HANOI, VN",
      description: "Developed and executed performance marketing strategies across Facebook to drive website traffic and monthly revenue. Ideated and designed ad creatives aligned with campaign objectives to maximize engagement.",
      achievements: [
        "Resulted in a 135% increase in website traffic.",
        "Achieved a 125% increase in monthly revenue."
      ]
    },
    {
      company: "Hebela Global Trading Ltd.",
      role: "SEO Marketing Intern",
      period: "05/2022 - 10/2023",
      location: "HANOI, VN",
      description: "Conducted keyword research to identify relevant search terms, optimizing on-page elements like title tags, meta descriptions, and header tags, and creating high-quality content optimized for target keywords.",
      achievements: [
        "Increased website traffic by 35%",
        "Brought the article on targeted keywords to the top 3 Google searches within 2 weeks."
      ]
    },
    {
      company: "HM Global",
      role: "Idea Creator",
      period: "05/2021 - 12/2021",
      location: "HANOI, VN",
      description: "Conducted comprehensive market research and competitor analysis to identify emerging trends and high-converting design concepts. Managed and optimized product listings across major e-commerce platforms including Shopify and Teespring.",
      achievements: [
        "Analyzed deep consumer insights to develop highly profitable product ideas.",
        "Optimized storefronts across multiple major e-commerce platforms."
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-8 md:px-20 py-20 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold mb-6 block"
            >
              Product Strategy & Creative Execution
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-extrabold leading-[0.9] tracking-tighter mb-8 metallic-gradient"
            >
              Hi, I'm Scarlett
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-secondary max-w-2xl font-light leading-relaxed"
            >
              A digital strategist bridging high-scale technical infrastructure with viral creative vision.
            </motion.p>
          </div>
          
          <div className="md:col-span-6 flex justify-center md:justify-end mt-12 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-[400px] aspect-[3/4] relative group [perspective:1000px]"
            >
              <div className="w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] glass-panel rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
                  <img src={import.meta.env.BASE_URL + "dyn.png"} alt="Scarlett" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] glass-panel rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
                  <img src={import.meta.env.BASE_URL + "scarlett-back.png"} alt="Scarlett Back" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary/30"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-20">
            <h2 className="text-4xl font-headline font-bold tracking-tight">FEATURED PROJECTS</h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">SELECTED WORKS</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard 
                key={idx} 
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                size={project.size as any}
                onClick={() => onNavigate("case-study", project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section id="professional-timeline" className="py-32 px-8 bg-surface-low/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-20">
            <h2 className="text-4xl font-headline font-bold tracking-tight">PROFESSIONAL TIMELINE</h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">2021 — PRESENT</span>
          </div>

          <div className="relative">
            <div className={`space-y-20 ${!isTimelineExpanded ? 'overflow-hidden relative' : ''}`}>
              {(isTimelineExpanded ? timeline : timeline.slice(0, 2)).map((item, idx) => (
                <div key={idx} className="grid md:grid-cols-12 gap-12 border-t border-outline-variant/10 pt-12 group">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-headline font-bold text-primary transition-colors duration-300 group-hover:text-white">{item.company}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-secondary mt-2">{item.role}</p>
                  </div>
                  
                  <div className="md:col-span-6">
                    <p className="text-secondary leading-relaxed mb-8 transition-colors duration-300 group-hover:text-primary">{item.description}</p>
                    <ul className="space-y-4">
                      {item.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-4 text-sm text-secondary">
                          <span className="text-primary mt-1">★</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:col-span-3 text-right">
                    <p className="font-headline font-bold text-sm text-primary">{item.period}</p>
                    <p className="text-[9px] uppercase tracking-widest text-secondary mt-1">{item.location}</p>
                  </div>
                </div>
              ))}
              
              {/* Fade out effect when collapsed */}
              {!isTimelineExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#101010] to-transparent pointer-events-none" />
              )}
            </div>
            
            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
                className="flex flex-col items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
              >
                <span className="text-[10px] uppercase tracking-[0.2em]">
                  {isTimelineExpanded ? 'Show Less' : 'View Full Timeline'}
                </span>
                {isTimelineExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-20">
            <h2 className="text-4xl font-headline font-bold tracking-tight">EDUCATION</h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">ACADEMIC BACKGROUND</span>
          </div>

          <div className="space-y-20">
            <div className="grid md:grid-cols-12 gap-12 border-t border-outline-variant/10 pt-12 group">
              <div className="md:col-span-5">
                <h3 className="text-2xl font-headline font-bold text-primary transition-colors duration-300 group-hover:text-white">FOREIGN TRADE UNIVERSITY</h3>
                <p className="text-[10px] uppercase tracking-widest text-secondary mt-2">DAI HOC NGOAI THUONG HN</p>
              </div>
              
              <div className="md:col-span-4">
                <p className="text-secondary leading-relaxed transition-colors duration-300 group-hover:text-primary">The Degree of Bachelor in International Finance</p>
              </div>
              
              <div className="md:col-span-3 text-right">
                <p className="font-headline font-bold text-sm text-primary">09/2020 - 08/2024</p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-12 border-t border-outline-variant/10 pt-12 group">
              <div className="md:col-span-5">
                <h3 className="text-2xl font-headline font-bold text-primary transition-colors duration-300 group-hover:text-white">LANGUAGES</h3>
                <p className="text-[10px] uppercase tracking-widest text-secondary mt-2">PROFICIENCY</p>
              </div>
              
              <div className="md:col-span-7">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-secondary transition-colors duration-300 group-hover:text-primary">
                    <span className="text-primary">★</span>
                    <span><strong className="text-white font-headline tracking-wide font-medium">Vietnamese</strong> — Native</span>
                  </li>
                  <li className="flex items-center gap-4 text-secondary transition-colors duration-300 group-hover:text-primary">
                    <span className="text-primary">★</span>
                    <span><strong className="text-white font-headline tracking-wide font-medium">English</strong> — Full Professional Proficiency</span>
                  </li>
                  <li className="flex items-center gap-4 text-secondary transition-colors duration-300 group-hover:text-primary">
                    <span className="text-primary">★</span>
                    <span><strong className="text-white font-headline tracking-wide font-medium">Chinese</strong> — HSK4</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Projects */}
      <section id="extracurricular-projects" className="py-32 px-8 bg-surface-low/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-baseline mb-20">
            <h2 className="text-4xl font-headline font-bold tracking-tight">EXTRACURRICULAR PROJECTS</h2>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">COMMUNITY & LEADERSHIP</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Vice President at Study Abroad Club (FTU)"
              category="08/2021 – 07/2022"
              description="Provided strategic direction and developed annual goals for 80+ team members"
              image={import.meta.env.BASE_URL + "pams.png"}
              onClick={() => onNavigate("case-study", "study-abroad-club")}
            />
            <ProjectCard 
              title="Community Builder (RedditVN & WeiboVN)"
              category="2019 – 2020"
              description="Built and managed communities on Weibo Vietnam and Reddit Vietnam."
              image={import.meta.env.BASE_URL + "wb.png"}
              onClick={() => onNavigate("case-study", "community-builder")}
            />
            <ProjectCard 
              title="Top 21 Peaking Point 2021"
              category="2021"
              description="Achieved Top 21 in Peaking Point 2021."
              image={import.meta.env.BASE_URL + "pkp.png"}
              onClick={() => window.open("https://docs.google.com/presentation/d/1WSHBlZ9syM5QBk_BidJKtRDZwBlktfXw/edit?slide=id.p1#slide=id.p1", "_blank")}
            />
            <ProjectCard 
              title="Top 6 King Of Marketing 2022"
              category="2022"
              description="Achieved Top 6 in King Of Marketing 2022."
              image={import.meta.env.BASE_URL + "vuamkt.jpg"}
              onClick={() => window.open("https://docs.google.com/presentation/d/1q-v6eRTA9DMrvlN_zryuJCFGWewT8JwQ/edit?slide=id.p1#slide=id.p1", "_blank")}
            />
            <ProjectCard 
              title="Marketing - AYAN 2020"
              category="2020"
              description="The ASEAN Youth Advocates Network is an international youth-led, non-profit, and non-governmental organization established to pave the way for the ASEAN youth to experience involvement in their localities through a series of advocacy-based initiatives.."
              image={import.meta.env.BASE_URL + "ayan.png"}
            />
            <ProjectCard 
              title="Organizer - Green Summer Project 2019"
              category="2019"
              description="Les Coeurs D'or is the second season of the Green Summer Project, a volunteer project focused on charity and human kindness, founded by a group of high school and university students in Hanoi."
              image={import.meta.env.BASE_URL + "les.png"}
            />
            <ProjectCard 
              title="Content Creator - The Glow Project 2019"
              category="2019"
              description="The Glow Project is a project by high school and university students in Hanoi aimed at changing people's perceptions and understanding of body-shaming."
              image={import.meta.env.BASE_URL + "glw.png"}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
