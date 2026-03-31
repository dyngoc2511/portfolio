import { motion } from "motion/react";
import { Play, Sparkles, ArrowLeft, ExternalLink } from "lucide-react";

interface CaseStudyProps {
  projectId: string | null;
  onBack: () => void;
}

export function CaseStudy({ projectId, onBack }: CaseStudyProps) {
  const projectData: Record<string, any> = {
    "ai-ugc-ecosystem": {
      id: "ai-ugc-ecosystem",
      title: "AI-Powered UGC Ecosystem & User Acquisition",
      category: "Growth Lead @ Deviation Lab",
      description: "Designed and deployed a comprehensive, AI-automated UGC pipeline, handling full-funnel operations from market analysis to performance auditing.",
      metrics: [
        { value: "85%", label: "Overhead Reduction" },
        { value: "100k+", label: "Views per Video" },
        { value: "1.5%", label: "Conversion Rate" },
        { value: "80%", label: "Organic Acquisition" },
      ],
      heroImage: "./cover.png",
      problem: "The Challenge",
      problemDesc: "Driving high-volume, cost-effective user acquisition in Tier 1 and US markets without depleting traditional performance marketing budgets. The core operational bottleneck was scaling high-quality video production, requiring a shift from manual creation to highly automated, AI-driven workflows capable of sustaining massive output.",
      strategy: "By integrating AI and hyper-automation tools into our creative production workflows, I developed 40+ AI micro-channels. These channels were engineered to imitate real personas (artists, movie trailers, KOCs) and specifically targeted Tier 1 and US users. I reverse-engineered short-video algorithms to build a 'viral formula,' applying it uniformly across the network.",
      showcasePhones: [
        "./IMG_0244.webp",
        "./IMG_0245.webp",
        "./IMG_0246.webp",
      ],
      impactPosts: [
        {
          platform: "TikTok",
          year: "2026",
          stats: "500K+ Views • 100K+ Likes • 19K Save",
          link: "https://www.tiktok.com/@lucikameo/video/7616341376959106312"
        },
        {
          platform: "TikTok",
          year: "2026",
          stats: "450K+ Views • 80K+ Likes • 14K Save",
          link: "https://www.tiktok.com/@lucikameo/video/7609026400040783122"
        },
        {
          platform: "TikTok",
          year: "2026",
          stats: "40K+ Views • 5000 Likes • 500 Save",
          link: "https://www.tiktok.com/@lucikameo/video/7604034819349040391"
        }
      ]
    },
    "bid-floor-optimization": {
      title: "Advanced Ad Monetization Stack",
      category: "Ads Monetization @ iKame Global",
      description: "Maximized ad revenue and optimized the monetization stack across a portfolio of global gaming hits.",
      metrics: [
        { value: "50%", label: "eCPM Increase" },
        { value: "MAX", label: "Mediation" },
        { value: "A/B", label: "Tested Setups" },
        { value: "Global", label: "Alignment" },
      ],
      heroImage: "./ikm.png",
      problem: "The Challenge",
      problemDesc: "To maximize ad revenue and optimize the existing monetization stack across iKame’s portfolio of global gaming hits without compromising the end-user experience.",
      strategy: "I conducted in-depth research and analysis on current SDK integration flows and performance metrics. Utilizing major mediation platforms (MAX, AdMob), I built a custom formula and algorithm to dynamically optimize the waterfall, ad placements, and targeting strategies. I aggressively A/B tested these setups to find the perfect balance between revenue generation and user retention.",
      keyResults: [
        { title: "Revenue Spike", desc: "Driven a 50% increase in eCPM." },
        { title: "Scaled Success", desc: "Successfully grew ARPDAU at a micro-level and scaled the strategy across flagship titles including Bike Race, Wood Nuts Puzzle, and Screw Nuts Puzzle." },
        { title: "Global Alignment", desc: "Strengthened monetization workflows by prototyping innovative SDK integrations and aligning with global ad partners." }
      ]
    },
    "short-video-viral": {
      title: "Cracking the Short-Video Viral Formula",
      category: "Independent Digital Strategist",
      description: "Organically grew a global audience from scratch by identifying and exploiting content trends on TikTok and Instagram.",
      metrics: [
        { value: "500M+", label: "Total Views" },
        { value: "100k+", label: "Baseline Views" },
        { value: "60k", label: "TikTok Followers" },
        { value: "40k+", label: "IG Followers" },
      ],
      heroType: "phones",
      phoneImages: [
        "./IMG_1640.png",
        "./kunin.png",
        "./IMG_3737.png",
      ],
      heroImage: "./da.png",
      problem: "The Challenge",
      problemDesc: "To organically grow a global audience from scratch by identifying and exploiting content trends on highly competitive short-video platforms like TikTok and Instagram.",
      strategy: "Operating entirely independently, I launched a portfolio of social channels targeting both US and Vietnamese markets. I meticulously analyzed retention graphs, hook rates, and key engagement metrics to iteratively A/B test video formats. This data-driven approach allowed me to isolate the exact variables that trigger algorithmic distribution.",
      keyResults: [
        { title: "Explosive Viewership", desc: "Achieved over 500 million total views across the network." },
        { title: "Consistent Virality", desc: "Maintained a high baseline of 100,000+ views per video." },
        { title: "Audience Growth", desc: "Scaled 8 TikTok channels from zero to between 10,000 and 60,000 followers." },
      ]
    },
    "b2b-ecommerce": {
      id: "b2b-ecommerce",
      title: "Tech-Enabled Alibaba Store",
      category: "Co-founder @ DreamCraft Ltd.",
      description: "Established a tech-forward B2B e-commerce model to modernize regional supply chains.",
      metrics: [
        { value: "20k+", label: "Products" },
        { value: "$5k+", label: "Order Value" },
        { value: "B2B", label: "Model" },
        { value: "Global", label: "Export" },
      ],
      heroType: "youtube",
      youtubeId: "TVPbcbzyOSY", // Replace with your actual YouTube video ID
      bottomCollageImages: [
        "./drc3.png",
        "./drc2.png",
        "./drc6.png",
        "./drc7.png",
        "./Screenshot 2026-03-30 182325.png",
        "./drc8.png",
        "./Screenshot 2026-03-30 182150.png",
        "./drc1.png",
        "./drc5.png",
        "./drc4.png",
      ],
      problem: "The Challenge",
      problemDesc: "The traditional handicraft industry in Ninh Binh Province was broken—local artisans were underpaid, and the market was monopolized by legacy companies lacking technical expertise. The goal was to bridge this gap using digital infrastructure.",
      strategy: "We established a tech-forward B2B e-commerce model to modernize regional supply chains. The core tech application involved advanced keyword optimizing and AI-driven product portfolio management. This included automated bulk uploads, AI image generation of handwoven products that replicated intricate details exactly, and a personalized AI sales chatbot to handle B2B client inquiries and streamline the export process.",
      keyResults: [
        { title: "Email Marketing", desc: "Successfully scaled campaigns to send 10,000 cold outreach emails per day, achieved a stellar 10% conversion rate while maintained a low bounce rate." },
        { title: "AI Image Generation", desc: "Utilized AI to generate highly detailed, accurate images of handwoven products for the digital storefront." },
        { title: "Sales & Fulfillment", desc: "Facilitated high-ticket international B2B orders valued up to $5,000, supported by a personalized AI sales chatbot." }
      ]
    },
    "product-design-ai": {
      id: "product-design-ai",
      title: "Product Design for Multi-Modal AI Apps",
      category: "Product Designer @ Various AI Startups",
      description: "Architected end-to-end user journeys and scalable design systems for a portfolio of multi-modal AI applications.",
      subProjectsTitle: "Portfolio of AI Applications",
      subProjectsDescription: "A deep dive into the design and architecture of various multi-modal AI tools.",
      subProjects: [
        {
          title: "DeepFinder: AI Profile Search",
          description: "Architected End-to-End User Journeys: Designed comprehensive user flows for a high-density search application. Developed intuitive Splash, Onboarding, and In-App Purchase (IAP) flows that balanced user education with frictionless conversion pathways.",
          images: ["./df.png"],
          link: "https://play.google.com/store/apps/details?id=com.ai.deepfinder.assistant.profilesearch"
        },
        {
          title: "AI Translator",
          description: "Designed a comprehensive AI translation app integrating diverse inputs—Text, Camera (OCR), Voice, and File Upload—into a unified, intuitive interface. Mapped out granular edge cases and user states (e.g., Quick Translation, History, Favorites, App Rating logic).",
          images: ["./TRS.png"],
          link: "#"
        },
        {
          title: "AI Girlfriend Dating",
          description: "Designed the core interaction model and visual identity for an AI-driven dating simulation, focusing on emotional engagement and conversational flow.",
          images: ["./aig1.png"],
          link: "https://play.google.com/store/apps/details?id=aigirlfriend.huggingface"
        },
        {
          title: "LucidFM - Intimate Audio Stories",
          description: "Developed a scalable vibecode onboarding and paywall system for an audio-first entertainment platform.",
          images: ["./lucid2.png"],
          link: "https://apps.apple.com/us/app/lucidfm-your-safe-place-here/id6755679513"
        },
        {
          title: "MangaVerse",
          description: "Designed an immersive reading experience for manga and webtoons.",
          images: ["./manga3.png"],
          link: "#"
        }
      ]
    },
    "study-abroad-club": {
      id: "study-abroad-club",
      title: "Vice President at Study Abroad Club (FTU)",
      category: "08/2021 – 07/2022",
      description: "Provided strategic direction and developed annual goals for 80+ team members with a portfolio of 6 different products.",
      metrics: [
        { value: "80+", label: "Team Members" },
        { value: "6", label: "Products" },
        { value: "50+", label: "Stakeholders" },
        { value: "220%", label: "Participants" },
      ],
      heroImage: "./n.png",
      problem: "The Challenge",
      problemDesc: "Managing a large student organization and driving engagement for community initiatives.",
      strategy: "Provided strategic direction and developed annual goals for 80+ team members with a portfolio of 6 different products. Built and managed agreements with 50+ key external stakeholders, exhibiting excellent consultation skills to secure funding and resources for community initiatives.",
      keyResults: [
        { title: "Community Growth", desc: "Implemented a marketing campaign for the group community, which led to an increase in engagement by 120% and an increase in group participants by 220%." }
      ],
      subProjects: [
        {
          title: "Exbroad Runway 2022",
          description: "The largest study abroad-related student competition in Northern Vietnam.",
          results: "Attracted hundreds of participants and secured major sponsorships, elevating the club's profile across the region.",
          link: "https://www.facebook.com/exbroadrunway",
          linkText: "View on Facebook",
          images: [
            "./ex.png",
            "./ex2.png",
            "./ex3.png"
          ]
        },
        {
          title: "Vietnamese Class for Exchange Student",
          description: "Cultural exchange and language program designed specifically for international students.",
          results: "Successfully integrated 50+ exchange students into the local culture, fostering a diverse and inclusive community.",
          link: "https://www.facebook.com/studyabroadclub.ftu",
          linkText: "View on Facebook",
          images: [
            "./cl.jpg",
            "./cl2.jpg",
            "./cl3.jpg"
          ]
        },
        {
          title: "Chuyen Du Hoc Community",
          description: "Implemented a marketing campaign for the group community, include of a golden week challenges, webinar and workshops collaborating with popular KOCs.",
          results: "Led to an increase in engagement by 120% and an increase in group participants by 220%.",
          link: "https://www.facebook.com/groups/250645246936939",
          linkText: "View on Facebook",
          images: [
            "./Screenshot 2026-03-30 191751.png",
            "./279158583_2158494304306961_4499888427177801078_n.jpg",
            "./Screenshot 2026-03-30 191812.png"
          ]
        },
        {
          title: "Workshop: AI-Driven K-Dance With SM Institute",
          description: "An innovative dance workshop leveraging AI technology and top-tier instructors from SM Institute.",
          results: "Delivered a unique, tech-forward cultural experience to participants, blending traditional K-Dance with modern AI analysis.",
          images: ["./pams3.jpg", "./pams.png", "./pams.png"]
        }
      ],
     
      
    },
    "community-builder": {
      id: "community-builder",
      title: "Community Builder",
      category: "2019 – 2020",
      description: "Built and managed communities on Weibo Vietnam and Reddit Vietnam.",
      heroImage: "./wb.png",
      posts: [
        {
          platform: "Weibo Vietnam",
          year: "2019",
          stats: "31.8K Likes • 2.2K Comments • 3.7K Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/528873797977333/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2020",
          stats: "21.7K Likes • 797 Comments • 1.3K Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/642877743243604/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2020",
          stats: "5.7K Likes • 676 Comments • 186 Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/631537787710933/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2020",
          stats: "16.6K Likes • 1.6K Comments • 1K Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/611143023083743/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2020",
          stats: "13K Likes • 1.1K Comments • 638 Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/604604020404310/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2020",
          stats: "22.3K Likes • 1.2K Comments • 836 Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/538940376970675/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2019",
          stats: "16.6K Likes • 1.4K Comments • 2.1K Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/468655713999142/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2019",
          stats: "18.5K Likes • 927 Comments • 992 Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/476010743263639/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2019",
          stats: "12.6K Likes • 976 Comments • 727 Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/480336169497763/"
        },
        {
          platform: "Weibo Vietnam",
          year: "2019",
          stats: "8.4K Likes • 558 Comments • 557 Shares",
          link: "https://www.facebook.com/groups/weibohouse/posts/477813253083388/"
        }
      ],
      subProjectsTitle: "Other Communities",
      subProjectsDescription: "Details of other communities built and managed.",
      subProjects: [
        {
          title: "Reddit Vietnam (2019)",
          description: "The group is archieved. But you can see all my posts here, they mostly range from 2k to 10k engagements.",
          link: "https://www.facebook.com/groups/366378530426222/user/100008044683922",
          linkText: "View All Posts",
          images: []
        }
      ]
    }
  };

  const project = projectId ? projectData[projectId] : projectData["ai-ugc-ecosystem"];

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <button 
        onClick={onBack}
        className="fixed top-24 left-8 z-40 flex items-center gap-2 text-secondary hover:text-primary transition-colors font-headline text-xs uppercase tracking-widest bg-background/50 backdrop-blur-md p-2 rounded-lg border border-white/5"
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </button>

      {/* Hero Section */}
      {project.id !== "product-design-ai" && (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-20 py-20 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold mb-6 block">Case Study // {project.category}</span>
              <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-extrabold leading-[0.9] tracking-tighter mb-8 metallic-gradient">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-secondary max-w-2xl font-light leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-8 md:pb-4">
              {project.metrics?.slice(0, 2).map((m: any, i: number) => (
                <div key={i} className="flex flex-col border-l border-outline-variant/30 pl-6">
                  <span className="text-4xl font-headline font-bold text-primary">{m.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-secondary mt-1">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Media */}
          {(project.heroImage || project.heroVideo || project.heroType) && (
            <div className="mt-20 max-w-7xl mx-auto w-full relative">
              {project.heroType === "collage" ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px] py-10 grid-flow-dense">
                  {project.collageImages?.map((img: string, idx: number) => {
                    const getGridClass = (i: number) => {
                      const classes = [
                        "col-span-2 row-span-2", // 0
                        "col-span-1 row-span-1", // 1
                        "col-span-1 row-span-1", // 2
                        "col-span-1 row-span-2", // 3
                        "col-span-1 row-span-1", // 4
                        "col-span-2 row-span-1", // 5
                        "col-span-1 row-span-1", // 6
                        "col-span-1 row-span-1", // 7
                        "col-span-1 row-span-1", // 8
                        "col-span-2 row-span-1", // 9
                      ];
                      return classes[i % 10];
                    };
                    return (
                      <div 
                        key={idx} 
                        className={`relative rounded-2xl overflow-hidden shadow-lg group ${getGridClass(idx)}`}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} collage image ${idx + 1}`} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    );
                  })}
                </div>
              ) : project.heroType === "phones" ? (
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 h-auto md:h-[600px] py-10">
                  {project.phoneImages?.map((img: string, idx: number) => (
                    <div 
                      key={idx} 
                      className={`relative w-[260px] h-[540px] rounded-[2.5rem] border-[6px] border-surface-high shadow-2xl overflow-hidden bg-surface flex-shrink-0 transition-all duration-500 hover:scale-105 hover:z-20 ${
                        idx === 1 ? "md:-translate-y-6 z-10" : "md:translate-y-6 opacity-70 hover:opacity-100"
                      }`}
                    >
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-1/3 bg-surface-high rounded-b-xl z-20"></div>
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${idx + 1}`} 
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              ) : project.heroType === "youtube" ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl relative group bg-surface-high/30 flex items-center justify-center border border-white/5">
                  {project.youtubeId ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="text-secondary flex flex-col items-center gap-4 z-10">
                      <Play size={48} className="opacity-50" />
                      <span className="font-headline tracking-widest uppercase text-sm opacity-50">YouTube Video Placeholder</span>
                    </div>
                  )}
                </div>
              ) : project.heroType === "video" ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl relative group bg-surface-high/30 flex items-center justify-center border border-white/5">
                  {project.heroVideo ? (
                    <video 
                      src={project.heroVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="text-secondary flex flex-col items-center gap-4 z-10">
                      <Play size={48} className="opacity-50" />
                      <span className="font-headline tracking-widest uppercase text-sm opacity-50">Video Placeholder (16:9)</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] group-hover:bg-black/40 transition-colors duration-500 pointer-events-none" />
                </div>
              ) : (
                <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl relative group">
                  {project.heroVideo ? (
                    <video 
                      src={project.heroVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img 
                      src={project.heroImage} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] group-hover:bg-black/40 transition-colors duration-500 pointer-events-none" />
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* Problem & Strategy */}
      {(project.problem || project.strategy) && project.id !== "study-abroad-club" && (
        <section className="py-32 px-8 bg-surface-low/30">
          <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            {project.problem && (
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-primary font-bold text-xl">!</span>
                </div>
                <h2 className="text-4xl font-headline font-bold mb-8">{project.problem}</h2>
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  {project.problemDesc}
                </p>
              </div>
            )}
            {project.strategy && (
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-primary font-bold text-xl">🚀</span>
                </div>
                <h2 className="text-4xl font-headline font-bold mb-8">The Strategy</h2>
                <p className="text-lg text-secondary leading-relaxed">
                  {project.strategy}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      )}

      {/* Execution Section */}
      {project.id === "ai-ugc-ecosystem" && (
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-headline font-bold">Execution</h2>
            </div>

            <div className="space-y-12">
              {/* First Block: Text Left, Image Right */}
              <div className="grid md:grid-cols-2 gap-12 items-center bg-surface-low/30 p-8 md:p-16 rounded-3xl border border-white/5">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-headline font-bold mb-6 leading-tight">Social Trending Bot </h3>
                  <p className="text-secondary text-lg leading-relaxed mb-8">
                    Automated trending content aggregator and analyzer for multiple social media platforms, scrapes real-time trending content from Reddit, YouTube, TikTok, X, Threads

                  </p>
                  <a 
                    href="https://github.com/dyngoc2511/trendingbot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors border border-white/10 bg-white/5 px-6 py-3 rounded-full font-headline tracking-widest uppercase text-xs"
                  >
                    Github <ExternalLink size={14} />
                  </a>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
                  <div className="relative w-full max-w-[500px]">
                    {/* Laptop Screen */}
                    <div className="relative aspect-video rounded-t-xl border-[8px] border-b-0 border-surface-high bg-surface-high overflow-hidden shadow-2xl">
                      {/* Webcam dot */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-background rounded-full z-20"></div>
                      {/* Image Placeholder */}
                      <img 
                        src="./222.png" 
                        alt="Workflow Dashboard" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Laptop Base */}
                    <div className="relative h-4 bg-surface-high rounded-b-xl w-[105%] -ml-[2.5%] shadow-xl flex justify-center">
                      <div className="w-1/4 h-1 bg-background/50 rounded-b-md"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Block: Image Left, Text Right */}
              <div className="grid md:grid-cols-2 gap-12 items-center bg-surface-low/30 p-8 md:p-16 rounded-3xl border border-white/5">
                <div className="order-1 md:order-1 flex justify-center md:justify-start w-full">
                  <div className="relative w-full max-w-[500px]">
                    {/* Laptop Screen */}
                    <div className="relative aspect-video rounded-t-xl border-[8px] border-b-0 border-surface-high bg-surface-high overflow-hidden shadow-2xl">
                      {/* Webcam dot */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-background rounded-full z-20"></div>
                      {/* Image Placeholder */}
                      <img 
                        src="./workflow.png" 
                        alt="Workflow Dashboard 2" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Laptop Base */}
                    <div className="relative h-4 bg-surface-high rounded-b-xl w-[105%] -ml-[2.5%] shadow-xl flex justify-center">
                      <div className="w-1/4 h-1 bg-background/50 rounded-b-md"></div>
                    </div>
                  </div>
                </div>
                <div className="order-2 md:order-2">
                  <h3 className="text-3xl md:text-4xl font-headline font-bold mb-6 leading-tight">Advanced AI Stack</h3>
                  <p className="text-secondary text-lg leading-relaxed">
                    Deployed a multi-model approach utilizing the newest generative video technologie (Veo3, Kling 3.0, Seedance 2.0, Sora2...), alongside fine-tuned, self-hosted models to ensure high-quality outputs 
                  </p>
                </div>
              </div>

              {/* Third Block: Text Left, Image Right */}
              <div className="grid md:grid-cols-2 gap-12 items-center bg-surface-low/30 p-8 md:p-16 rounded-3xl border border-white/5">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-headline font-bold mb-6 leading-tight">Persona Engineering at Scale</h3>
                  <p className="text-secondary text-lg leading-relaxed mb-8">
                    Scaled a network of 40+ AI-driven personas, from digital artists to niche influencers to drive organic engagement and Tier 1 conversions.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
                  <div className="relative w-full max-w-[500px]">
                    {/* Laptop Screen */}
                    <div className="relative aspect-video rounded-t-xl border-[8px] border-b-0 border-surface-high bg-surface-high overflow-hidden shadow-2xl">
                      {/* Webcam dot */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-background rounded-full z-20"></div>
                      {/* Image Placeholder */}
                      <img 
                        src="./meoo.png" 
                        alt="Workflow Dashboard 3" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Laptop Base */}
                    <div className="relative h-4 bg-surface-high rounded-b-xl w-[105%] -ml-[2.5%] shadow-xl flex justify-center">
                      <div className="w-1/4 h-1 bg-background/50 rounded-b-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </section>
      )}

      {/* Posts Section */}
      {project.posts && (
        <section className="py-32 px-8 bg-surface-low/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-headline font-bold">Community Posts</h2>
              <p className="text-secondary mt-4">Highlights of top-performing content and engagement.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.posts.map((post: any, idx: number) => (
                <div key={idx} className="bg-surface-high/50 border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                  <div className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-headline tracking-widest uppercase mb-6">
                    {post.platform} • {post.year}
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">Engagement Stats</h3>
                  <p className="text-2xl font-bold text-primary mb-8 flex-grow">{post.stats}</p>
                  
                  {post.link && (
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-primary hover:text-white transition-colors border border-white/10 bg-white/5 px-6 py-3 rounded-full font-headline tracking-widest uppercase text-xs mt-auto"
                    >
                      View Post <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section (Sub-projects) */}
      {project.subProjects && (
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-headline font-bold">{project.subProjectsTitle || "Key Initiatives & Events"}</h2>
              <p className="text-secondary mt-4">{project.subProjectsDescription || "Showcasing the main components of this project."}</p>
            </div>

            <div className="space-y-32">
              {project.subProjects.map((sub: any, idx: number) => (
                <div key={idx} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                  <div className={idx % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-2"}>
                    <h3 className="text-3xl font-headline font-bold mb-6 leading-tight text-primary">{sub.title}</h3>
                    <p className="text-secondary text-lg leading-relaxed mb-8">
                      {sub.description}
                    </p>
                    {sub.link && (
                      sub.link === "#" ? (
                        <button 
                          disabled
                          className="inline-flex items-center gap-2 text-secondary border border-white/5 bg-white/5 px-6 py-3 rounded-full font-headline tracking-widest uppercase text-xs mb-8 opacity-50 cursor-not-allowed"
                        >
                          View on Store <ExternalLink size={14} />
                        </button>
                      ) : (
                        <a 
                          href={sub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors border border-white/10 bg-white/5 px-6 py-3 rounded-full font-headline tracking-widest uppercase text-xs mb-8"
                        >
                          {sub.linkText || "View on Store"} <ExternalLink size={14} />
                        </a>
                      )
                    )}
                    {sub.results && (
                      <div className="bg-surface-high/50 border border-white/10 p-6 rounded-2xl">
                        <h4 className="text-sm font-headline uppercase tracking-widest text-primary mb-2">Key Results</h4>
                        <p className="text-secondary">{sub.results}</p>
                      </div>
                    )}
                  </div>
                  <div className={idx % 2 === 0 ? "order-1 md:order-2" : "order-1 md:order-1"}>
                    <div className={sub.images.length === 1 ? "w-full" : "grid grid-cols-2 gap-4"}>
                      {sub.images.map((img: string, i: number) => (
                        <div key={i} className={`relative rounded-2xl overflow-hidden shadow-lg group ${sub.images.length === 1 ? 'aspect-[4/3]' : (i === 2 ? 'col-span-2 aspect-[21/9]' : 'aspect-square')}`}>
                          <img 
                            src={img} 
                            alt={`${sub.title} image ${i + 1}`} 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact Section */}
      {project.id !== "study-abroad-club" && (project.keyResults || project.showcasePhones || (project.metrics && project.metrics.length > 0) || project.bottomCollageImages) && (
        <>
          <section className="py-32 px-8">
            <div className="max-w-7xl mx-auto">
          {project.bottomCollageImages && (
            <div className="mb-32">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-headline font-bold mb-4">Gallery</h2>
                <p className="text-secondary">Visual highlights from the project.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px] grid-flow-dense">
                {project.bottomCollageImages.map((img: string, idx: number) => {
                  const getGridClass = (i: number) => {
                    const classes = [
                      "col-span-2 row-span-2", // 0
                      "col-span-1 row-span-1", // 1
                      "col-span-1 row-span-1", // 2
                      "col-span-1 row-span-2", // 3
                      "col-span-1 row-span-1", // 4
                      "col-span-2 row-span-1", // 5
                      "col-span-1 row-span-1", // 6
                      "col-span-1 row-span-1", // 7
                      "col-span-1 row-span-1", // 8
                      "col-span-2 row-span-1", // 9
                    ];
                    return classes[i % 10];
                  };
                  return (
                    <div 
                      key={idx} 
                      className={`relative rounded-2xl overflow-hidden shadow-lg group ${getGridClass(idx)}`}
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} gallery image ${idx + 1}`} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {project.keyResults && (
            <div className="text-center mb-24">
              <h2 className="text-4xl font-headline font-bold mb-4">Key Results</h2>
              <p className="text-secondary">Impact and metrics achieved during the project lifecycle.</p>
            </div>
          )}
          
          {project.showcasePhones && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-24 h-auto md:h-[600px]">
              {project.showcasePhones.map((img: string, idx: number) => (
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                  key={idx} 
                  className={`relative w-[260px] h-[540px] rounded-[2.5rem] border-[6px] border-surface-high shadow-2xl overflow-hidden bg-surface flex-shrink-0 transition-all duration-500 hover:scale-105 hover:z-20 ${
                    idx === 1 ? "md:-translate-y-6 z-10" : "md:translate-y-6 opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-1/3 bg-surface-high rounded-b-xl z-20"></div>
                  <img 
                    src={img} 
                    alt={`${project.title} showcase ${idx + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          )}

          {project.keyResults && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {project.keyResults.map((result: any, idx: number) => (
                <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5">
                  <h3 className="text-xl font-bold mb-4 text-primary">{result.title}</h3>
                  <p className="text-secondary leading-relaxed">{result.desc}</p>
                </div>
              ))}
            </div>
          )}

          {project.impactPosts && (
            <div className="mb-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.impactPosts.map((post: any, idx: number) => (
                  <div key={idx} className="bg-surface-high/50 border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                    <div className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-headline tracking-widest uppercase mb-6">
                      {post.platform} • {post.year}
                    </div>
                    <h3 className="text-xl font-headline font-bold mb-2">Engagement Stats</h3>
                    <p className="text-2xl font-bold text-primary mb-8 flex-grow">{post.stats}</p>
                    
                    {post.link && (
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-primary hover:text-white transition-colors border border-white/10 bg-white/5 px-6 py-3 rounded-full font-headline tracking-widest uppercase text-xs mt-auto"
                      >
                        View Post <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.id === "b2b-ecommerce" && (
            <div className="mt-12 mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-headline font-bold mb-4">Customer Feedback</h3>
                <p className="text-secondary">What our clients say about us.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/5">
                  <img src="./IMG_3839.webp" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/5">
                  <img src="./Screenshot 2026-03-30 183251.png" alt="Feedback 2" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/5">
                  <img src="./IMG_3840.webp" alt="Feedback 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid md:grid-cols-4 gap-12 text-center pt-12 border-t border-white/5">
              {project.metrics.map((m: any, idx: number) => (
                <div key={idx} className="space-y-4">
                  <div className="text-6xl font-headline font-extrabold metallic-gradient">{m.value}</div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-secondary">{m.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-8 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <Sparkles className="text-primary mb-8 mx-auto" size={48} />
          <h2 className="text-3xl md:text-5xl font-headline font-light italic leading-tight text-primary mb-12">
            "Stay Hungry, Stay Foolish."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-outline-variant/30" />
            <p className="text-[10px] font-headline uppercase tracking-widest text-secondary">Steve Jobs</p>
            <div className="w-12 h-px bg-outline-variant/30" />
          </div>
        </div>
      </section>
        </>
      )}
    </motion.div>
  );
}
