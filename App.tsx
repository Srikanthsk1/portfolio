
import React, { useState, useMemo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { PROJECTS, EXPERIENCES } from './constants';


const LandingPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('All');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ['All', ...Array.from(tags)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTag === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="flex flex-col">
      {/* SECTION: HERO - Midnight Navy */}
      <div className="bg-[#010413]">
        <Hero />
      </div>
      
      <div className="section-separator" />

      {/* SECTION: SKILLS - Charcoal Slate */}
      <div className="bg-[#080c1d]">
        <Skills />
      </div>
      <div className="section-separator" />

      {/* SECTION: CERTIFICATIONS - Deep Space Blue */}
      <div className="bg-[#020617]">
        <Certifications />
      </div>

      <div className="section-separator" />
      
      {/* SECTION: PROJECTS - Rich Obsidian */}
      <section id="projects" className="py-20 md:py-32 relative bg-[#010413]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                Case <span className="gradient-text">Studies</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
                Selected implementations in machine learning and data engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 md:px-5 md:py-2 rounded-lg text-[9px] font-bold fira-code transition-all duration-300 border-2 ${
                    activeTag === tag
                      ? 'bg-cyan-500 text-slate-950 border-cyan-500 shadow-lg'
                      : 'border-white/5 text-slate-500 hover:border-cyan-500/30 hover:text-cyan-400'
                  }`}
                >
                  {tag.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-500 glass rounded-[30px]">
                <p className="text-lg font-bold uppercase tracking-widest">No matching results</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="section-separator" />
      
      {/* SECTION: EXPERIENCE - Indigo Night */}
      <section id="experience" className="py-20 md:py-32 relative bg-[#0a1025]">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 md:mb-20 leading-tight">
              Work <span className="gradient-text">Roadmap</span>
            </h2>
            
            <div className="space-y-16">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-16 border-l border-slate-800 group transition-all duration-500">
                  <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors" />
                  
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-2">
                      <h3 className="text-2xl md:text-4xl font-black text-slate-100 group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                      <span className="text-[9px] fira-code text-cyan-400/60 font-black uppercase tracking-widest bg-cyan-500/5 px-4 py-1.5 rounded-full border border-cyan-500/10 w-fit">{exp.period}</span>
                    </div>
                    <div className="text-indigo-400 fira-code font-bold text-xs md:text-sm tracking-widest uppercase">
                      @ {exp.company}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 flex gap-4 text-base md:text-lg leading-relaxed font-light">
                        <span className="text-cyan-500/40 mt-1.5 flex-shrink-0 text-sm">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* SECTION: CONTACT - Deep Navy */}
      <div className="bg-[#020617]">
        <Contact />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#020617]">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        
        <footer className="py-20 md:py-32 border-t border-white/5 bg-[#010413]">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="text-4xl md:text-6xl font-black mb-8 fira-code tracking-tighter text-white">
              Ready for <span className="gradient-text">Deployment?</span>
            </div>
            <p className="text-slate-500 max-w-xl mx-auto mb-12 text-base md:text-lg font-light leading-relaxed">
              Available for entry-level opportunities, AI research collaborations, and open-source contributions.
            </p>
            <div className="flex justify-center gap-12 mb-12">
               <a 
                 href="https://github.com/Srikanthsk1" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-all font-bold fira-code uppercase tracking-widest text-xs group"
               >
                 <span className="text-xl group-hover:scale-125 transition-transform">🐙</span>
                 GitHub
               </a>
               <a 
                 href="https://www.linkedin.com/in/srikanth-m1/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-all font-bold fira-code uppercase tracking-widest text-xs group"
               >
                 <span className="text-xl group-hover:scale-125 transition-transform">🔗</span>
                 LinkedIn
               </a>
            </div>
            <div className="text-slate-700 text-[8px] sm:text-[10px] font-black tracking-[0.5em] uppercase flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-slate-800/50"></span>
              Neural Interface v2025
              <span className="w-12 h-px bg-slate-800/50"></span>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
