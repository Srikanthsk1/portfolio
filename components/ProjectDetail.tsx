import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { geminiService } from '../services/geminiService';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  const [currentImageUrl, setCurrentImageUrl] = useState<string>(project?.imageUrl || '');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
        <section
          className="text-center glass p-6 rounded-2xl max-w-md shadow-md border border-white/10"
          role="alert"
          aria-live="assertive"
        >
          <h1 className="text-2xl font-bold mb-3 text-slate-100">Project Not Found</h1>
          <p className="text-slate-400 mb-6">
            Investigating the data... but it seems this entry is missing.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-600 transition"
          >
            Return Home
          </button>
        </section>
      </main>
    );
  }

  const handleGenerateImage = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const newImageUrl = await geminiService.generateProjectImage(project.title, project.description);
      setCurrentImageUrl(newImageUrl);
    } catch {
      setError("AI Generation Link Unstable. Please retry.");
    } finally {
      setIsGenerating(false);
    }
  };

  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '');
  const hasDemo = Boolean(project.demoUrl && project.demoUrl !== '#' && project.demoUrl !== '');

  return (
    <main className="min-h-screen pt-16 pb-12 bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Return Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition font-semibold tracking-widest uppercase text-xs group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
          aria-label="Return to home"
        >
          <div className="p-1.5 glass rounded-md group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          Return
        </button>

        <div className="grid lg:grid-cols-[1fr_260px] gap-6 lg:gap-10">
          {/* Main Content */}
          <section className="space-y-6" aria-labelledby="project-title">
            {/* Tags + Title + Description */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1" aria-label="Project tags">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[7px] uppercase tracking-widest font-bold text-cyan-400 glass px-2 py-0.5 rounded-full border border-cyan-500/30 select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1
                id="project-title"
                className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white"
              >
                {project.title}
              </h1>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light line-clamp-5">
                {project.description}
              </p>
            </div>

            {/* Image Preview + AI Generate Button */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 glass bg-slate-900/50 aspect-[16/9] max-h-[400px] flex items-center justify-center group shadow-md"
              aria-label={`Project image preview for ${project.title}`}
            >
              {isGenerating ? (
                <div
                  className="flex flex-col items-center gap-3 text-center p-4"
                  role="status"
                  aria-live="polite"
                >
                  <div
                    className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"
                    aria-hidden="true"
                  />
                  <p className="text-cyan-400 fira-code text-[10px] font-semibold tracking-widest uppercase select-none">
                    Synthesizing...
                  </p>
                </div>
              ) : (
                <>
                  <img
                    src={currentImageUrl}
                    alt={`Visual representation of project ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50 pointer-events-none" />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGenerateImage();
                    }}
                    className="absolute bottom-4 right-4 glass px-3 py-2 rounded-lg text-[9px] font-bold flex items-center gap-1.5 hover:bg-cyan-500 hover:text-slate-950 transition-shadow duration-300 shadow-md"
                    aria-label="Re-render project image with AI"
                    disabled={isGenerating}
                  >
                    <span>AI RE-RENDER</span>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Analysis & Architecture */}
            <article
              className="glass p-6 md:p-8 rounded-2xl space-y-5 shadow-md border border-white/10"
              aria-labelledby="analysis-title"
            >
              <h3
                id="analysis-title"
                className="text-base md:text-lg font-bold fira-code text-cyan-400 uppercase tracking-widest select-none"
              >
                Analysis & Architecture
              </h3>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-sm md:text-base space-y-3 font-light">
                <p>
                  Built with robust data architectural principles. I employed specialized preprocessing pipelines to handle noisy signals and ensure high-fidelity model training.
                </p>
                <p>
                  Optimized for low latency while maintaining core performance metrics. Achieved high target efficiency through selective feature engineering and async task handling.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-3">
                {hasGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow sm:flex-none px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold text-[10px] uppercase tracking-widest transition-colors text-center text-cyan-400 hover:text-white shadow-sm"
                    aria-label="View source code on GitHub"
                  >
                    Source Code
                  </a>
                )}
                {hasDemo && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow sm:flex-none px-5 py-2.5 bg-cyan-500 text-slate-950 hover:bg-cyan-600 rounded-lg font-semibold text-[10px] uppercase tracking-widest transition-colors shadow-md text-center"
                    aria-label="View live project demo"
                  >
                    Live Interface
                  </a>
                )}
              </div>
            </article>
          </section>

          {/* Sidebar Performance Metrics */}
          <aside
            className="space-y-4 sticky top-20 max-h-[calc(100vh-5rem)] overflow-auto"
            aria-label="Project performance metrics"
          >
            <h3 className="text-[9px] font-bold fira-code uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-4 select-none">
              Performance Metrics
            </h3>
            <div className="grid gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="glass p-3 rounded-xl border border-white/10 space-y-1 group hover:border-cyan-500/40 transition-all shadow-sm"
                  tabIndex={0}
                  aria-label={`${metric.label} metric: ${metric.value}`}
                >
                  <span className="text-[7px] text-slate-500 uppercase tracking-widest font-bold block select-none">
                    {metric.label}
                  </span>
                  <span className="text-xl font-extrabold text-cyan-400 block group-hover:scale-105 transition-transform origin-left select-text">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Error message */}
        {error && (
          <div
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5 py-2.5 rounded-lg shadow-lg z-50 max-w-md text-center text-sm"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectDetail;
