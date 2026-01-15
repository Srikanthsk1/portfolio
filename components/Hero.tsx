import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-[100vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-12 overflow-hidden"
    >
      {/* Background Circles */}
      <div
        className="absolute top-[10%] right-[26%] w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[90px] pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute top-[45%] right-[18%] w-[200px] h-[200px] bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900/40 backdrop-blur-md rounded-full border border-cyan-500/15 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] font-bold text-cyan-400/90">
                Data Scientist• AI Developer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">
                Fresh Insights. <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Future Logic.
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-light text-slate-400 font-mono tracking-tight">
                Fresher <span className="text-slate-300">Data Scientist & AI Engineer.</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Hi, I'm <span className="text-white font-bold">Srikanth.M</span>. I leverage modern{' '}
              <span className="text-cyan-400">Deep Learning</span> architectures to solve complex
              data puzzles. Graduate from Tech University, ready for deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start pt-4">
              <a
                href="https://drive.google.com/file/d/1pIaUuRzxHJXpA0ySKr_BL3tLnmU_vMGE/view?usp=sharing"
                className="group relative px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-lg transition-all transform hover:scale-[1.05] shadow-xl shadow-cyan-500/20 flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 uppercase tracking-widest text-[11px]">Download resume</span>
                <svg
                  className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Srikanthsk1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-slate-900/40 backdrop-blur-md rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/40 transition-all duration-300 group/icon"
                >
                  <svg
                    className="w-6 h-6 transition-transform group-hover/icon:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/srikanth-m1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-slate-900/40 backdrop-blur-md rounded-lg flex items-center justify-center text-slate-400 hover:text-indigo-400 border border-white/5 hover:border-indigo-500/40 transition-all duration-300 group/icon"
                >
                  <svg
                    className="w-6 h-6 transition-transform group-hover/icon:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            <div className="relative group">
              <div className="relative w-[300px] h-[420px] sm:w-[350px] sm:h-[460px] lg:w-[400px] lg:h-[500px] rounded-[36px] overflow-hidden bg-slate-900/40 backdrop-blur-md border-2 border-white/5 transition-all duration-700 hover:border-cyan-500/30 shadow-2xl hover:shadow-cyan-500/20">
                <img
                  src="src/assets/bannerImg.png"
                  alt="Srikanth Portrait"
                  className="w-full h-full object-cover brightness-[1.05] group-hover:scale-105 transition-all duration-1000 grayscale-[15%] group-hover:grayscale-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/400x500?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-col gap-1">
                    <div className="font-mono text-[9px] text-cyan-400 font-bold uppercase tracking-[0.5em] mb-2">
                      Available to Hire
                    </div>
                    <div className="text-2xl font-black text-white tracking-tight uppercase">
                      SRIKANTH .M
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-[18%] bg-slate-900/60 backdrop-blur-xl px-5 py-3 rounded-xl border border-cyan-500/15 shadow-xl hidden lg:block group-hover:-translate-y-1 transition-transform duration-300">
                <div className="space-y-1">
                  <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                    CODE
                  </p>
                  <p className="text-[11px] font-black text-white tracking-widest uppercase">
                    FOR EVER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;