import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"
      aria-label="Technical skills and proficiencies"
    >
      {/* Background blur circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 flex items-center gap-4">
            <span className="fira-code text-cyan-400 text-lg md:text-xl font-medium" aria-hidden="true">
              01.
            </span>
            <span className="sr-only">Section</span> Technical Arsenal
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
            Technologies and frameworks I've mastered through intensive academic study and hands-on experimentation.
          </p>
        </div>

        <div className="space-y-20 md:space-y-24" role="list">
          {categories.map(cat => (
            <div key={cat} className="space-y-8" role="listitem">
              {/* Category header with underline */}
              <div className="flex items-center gap-6">
                <h3
                  className="text-cyan-400 font-black tracking-[0.4em] text-[10px] md:text-xs uppercase whitespace-nowrap select-none"
                  aria-label={`Skill category: ${cat}`}
                >
                  {cat}
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-cyan-400/20 to-transparent" />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" role="list">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div key={skill.name} className="group relative" role="listitem">
                    <div
                      className="glass relative p-6 md:p-8 rounded-[24px] border border-white/5 hover:border-cyan-500/60 transition-all duration-500 flex flex-col gap-6 hover:-translate-y-2 bg-slate-900/60 backdrop-blur-md shadow-lg hover:shadow-cyan-500/30"
                      tabIndex={0}
                      aria-label={`${skill.name} skill with proficiency ${skill.proficiency} percent`}
                    >
                      {/* Icon and proficiency */}
                      <div className="flex justify-between items-start">
                        <div
                          className="w-12 h-12 rounded-xl bg-slate-950/70 flex items-center justify-center text-3xl shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                          aria-hidden="true"
                        >
                          <span>{skill.icon}</span>
                        </div>
                        <div
                          className="fira-code text-[10px] font-black text-cyan-400/75 group-hover:text-cyan-400 transition-colors bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20 select-none"
                          aria-label={`Proficiency: ${skill.proficiency} percent`}
                        >
                          {skill.proficiency}%
                        </div>
                      </div>

                      {/* Skill name and progress bar */}
                      <div className="space-y-4">
                        <h4 className="text-lg md:text-xl font-black text-slate-200 group-hover:text-white transition-colors select-none">
                          {skill.name}
                        </h4>

                        {/* Accessible progress bar */}
                        <div
                          className="relative h-1.5 w-full bg-slate-950/50 rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={skill.proficiency}
                          aria-label={`${skill.name} proficiency level`}
                        >
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-[2500ms] ease-out"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
