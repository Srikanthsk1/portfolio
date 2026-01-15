import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

// Mock project data for demonstration
const mockProject = {
  id: '1',
  title: 'AI-Powered Sentiment Analysis',
  description: 'Real-time sentiment analysis using BERT and transformers for social media monitoring and brand intelligence.',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  tags: ['NLP', 'PyTorch', 'BERT', 'FastAPI'],
  githubUrl: 'https://github.com',
  demoUrl: 'https://demo.com',
  metrics: [
    { label: 'Accuracy', value: '94.2%', data: [65, 72, 78, 85, 88, 92, 94] },
    { label: 'Speed', value: '2.1s', data: [5, 4.5, 3.8, 3.2, 2.8, 2.3, 2.1] },
    { label: 'F1-Score', value: '0.93', data: [0.75, 0.80, 0.84, 0.87, 0.90, 0.92, 0.93] },
    { label: 'Latency', value: '120ms', data: [200, 180, 160, 145, 135, 125, 120] }
  ]
};

interface ProjectCardProps {
  project?: typeof mockProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project = mockProject }) => {
  const handleCardClick = () => {
    console.log('Navigate to project:', project.id);
  };

  const hasGithub = project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '';
  const hasDemo = project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '';

  return (
    <div
      onClick={handleCardClick}
      className="bg-slate-900/40 backdrop-blur-md group rounded-[24px] overflow-hidden transition-all duration-500 border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] cursor-pointer flex flex-col h-full hover:-translate-y-1"
    >
      {/* IMAGE */}
      <div className="relative h-32 sm:h-36 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-3 left-4 flex gap-2">
          {project.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="text-[7px] sm:text-[8px] uppercase tracking-widest font-bold text-cyan-400 bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-slate-400 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2 font-light">
          {project.description}
        </p>

        {/* METRICS */}
        <div className="grid grid-cols-2 gap-3 mb-4 mt-auto">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-2 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-colors"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[7px] text-slate-500 uppercase tracking-widest font-bold">
                  {metric.label}
                </span>
                <span className="text-[8px] font-bold text-cyan-400">
                  {metric.value}
                </span>
              </div>
              <div className="h-5">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={metric.data.map(d => ({ v: d }))}>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke="#22d3ee"
                      fill="#22d3ee"
                      fillOpacity={0.1}
                      strokeWidth={1.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center pt-3 border-t border-white/5">
          <div className="flex items-center gap-2">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 bg-slate-900/60 backdrop-blur-sm rounded-lg text-slate-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition shadow-none hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
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
                className="p-1.5 bg-slate-900/60 backdrop-blur-sm rounded-lg text-slate-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition shadow-none hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          <div className="flex items-center gap-1.5 group/btn">
            <span className="hidden sm:inline text-[8px] font-bold tracking-widest text-slate-500 uppercase">
              Details
            </span>
            <div className="p-1.5 bg-slate-900/60 backdrop-blur-sm rounded-lg group-hover/btn:bg-cyan-500 group-hover/btn:text-slate-950 border border-white/5 group-hover/btn:border-cyan-500 transition shadow-none group-hover/btn:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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