import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { Project } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const hasGithub = project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '';
  const hasDemo = project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '';

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="glass group rounded-[20px] overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_15px_#22d3ee] cursor-pointer flex flex-col h-full"
    >
      {/* IMAGE */}
      <div className="relative h-24 sm:h-28 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
        <div className="absolute bottom-2 left-3 flex gap-1">
          {project.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="text-[6px] sm:text-[7px] uppercase tracking-widest font-bold text-cyan-400 glass px-2 py-0.5 rounded-md border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-bold mb-1 group-hover:text-cyan-400 transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-slate-400 text-[10px] sm:text-xs mb-2 leading-relaxed line-clamp-2 font-light">
          {project.description}
        </p>

        {/* METRICS */}
        <div className="grid grid-cols-2 gap-2 mb-3 mt-auto">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-1.5 rounded-lg border border-white/5"
            >
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[6px] text-slate-500 uppercase tracking-widest font-bold">
                  {metric.label}
                </span>
                <span className="text-[7px] font-bold text-cyan-400">
                  {metric.value}
                </span>
              </div>
              <div className="h-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={metric.data.map(d => ({ v: d }))}>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#22d3ee"
                      fill="#22d3ee"
                      fillOpacity={0.08}
                      strokeWidth={1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 glass rounded-md text-slate-400 hover:text-cyan-400 transition shadow-none hover:shadow-[0_0_8px_#22d3ee]"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 glass rounded-md text-slate-400 hover:text-cyan-400 transition shadow-none hover:shadow-[0_0_8px_#22d3ee]"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          <div className="flex items-center gap-1 group/btn">
            <span className="hidden sm:inline text-[7px] font-bold tracking-widest text-slate-500 uppercase">
              Details
            </span>
            <div className="p-1 glass rounded-md group-hover:bg-cyan-500 group-hover:text-slate-950 transition shadow-none group-hover:shadow-[0_0_12px_#22d3ee]">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
