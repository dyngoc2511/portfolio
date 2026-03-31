/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./views/Home";
import { CaseStudy } from "./views/CaseStudy";
import { Contact } from "./views/Contact";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    if (!scrollTarget) {
      window.scrollTo(0, 0);
    }
  }, [currentView, selectedProjectId, scrollTarget]);

  const handleNavigate = (view: string, projectId?: string) => {
    if (projectId) {
      setSelectedProjectId(projectId);
      setCurrentView("case-study");
      setScrollTarget(null);
    } else if (view === "resume") {
      setCurrentView("resume");
      setSelectedProjectId(null);
      setScrollTarget("professional-timeline");
    } else if (view === "others") {
      setCurrentView("others");
      setSelectedProjectId(null);
      setScrollTarget("extracurricular-projects");
    } else {
      setCurrentView(view);
      setSelectedProjectId(null);
      setScrollTarget(null);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "home":
      case "experience":
      case "resume":
      case "others":
        return <Home onNavigate={handleNavigate} scrollTarget={scrollTarget} onScrollComplete={() => setScrollTarget(null)} />;
      case "case-study":
        return <CaseStudy projectId={selectedProjectId} onBack={() => handleNavigate("home")} />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main>
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
