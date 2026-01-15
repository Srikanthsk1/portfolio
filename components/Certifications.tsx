import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-6">
            <span className="fira-code text-cyan-400 text-lg">02.</span>
            Certifications
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Professional validations and technical achievements that fuel my growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="glass rounded-[26px] border border-white/5 hover:border-cyan-500/60 transition-all duration-500 group overflow-hidden flex flex-col bg-[#0a101f] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >
              {/* IMAGE */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 glass w-10 h-10 rounded-lg flex items-center justify-center text-xl border-white/10 group-hover:scale-105 transition-all">
                  {cert.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col gap-3 flex-grow">
                <div>
                  <h4 className="text-sm md:text-base font-black text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-[9px] text-indigo-400 font-black uppercase tracking-[0.25em] mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* META */}
                <div className="py-2 border-y border-white/5 space-y-1">
                  <div className="flex justify-between text-[9px] fira-code">
                    <span className="text-slate-600 font-bold uppercase">ID</span>
                    <span className="text-slate-400">{cert.certId}</span>
                  </div>
                  <div className="flex justify-between text-[9px] fira-code">
                    <span className="text-slate-600 font-bold uppercase">Date</span>
                    <span className="text-slate-300">{cert.date}</span>
                  </div>
                </div>

                {/* ACTIONS – CENTER ALIGNED */}
                <div className="mt-auto flex justify-center gap-3 pt-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-24 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition flex items-center justify-center"
                  >
                    View
                  </a>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-24 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/20 hover:border-cyan-500 text-[9px] font-black uppercase tracking-widest transition flex items-center justify-center"
                  >
                    Verify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
