import React from 'react';
import python from '../src/assets/python.png';
import sql from '../src/assets/sql.png';
import ds from '../src/assets/ds.png';
import Bi from '../src/assets/Bi.png';
import html from '../src/assets/html_and_css.jpeg';
import figma from '../src/assets/figma.jpeg';
import researc from '../src/assets/research.png';
const CERTIFICATIONS = [
  {
    title: "python for Data Science",
    issuer: "360DigiTMG",
    imageUrl: python,
    icon: "🐍",
    certId: "360DTMGIN46174",
    date: "Jun 23 2025",
    link: "https://drive.google.com/file/d/1RPaeda-l0gJ8vTgW-G4wcMf-wa9Tkot4/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  },
  {
    title: "SQL",
    issuer: "360DigiTMG",
    imageUrl: sql,
    icon: "💾",
    certId: "360DTMGIN46871",
    date: "August 20, 2025",
    link: "https://drive.google.com/file/d/18QtoNIfJsbk_R_CRpOIrvWOn740bUZkA/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  },
  {
    title: "Power BI",
    issuer: "360DigiTMG",
    imageUrl: Bi,
    icon: "📊",
    certId: "360DTMGIN46871",
    date: "September 2, 2025",
    link: "https://drive.google.com/file/d/1gIKjUyk_-RiG8xPO9hWTm_aRPelz-jal/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  },
  {
    title: "Data Science",
    issuer: "360DigiTMG",
    imageUrl: ds,
    icon: "📊",
    certId: "360DTMGIN47671",
    date: "October 4, 2025",
    link: "https://drive.google.com/file/d/1iekiWByYN8ok1VPnE8-v8soWjc6Y1cAn/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  },
  {
    title: "HTML & CSS",
    issuer: "Guvi",
    imageUrl: html,
    icon: "📊",
    certId: "3n9123z47g69j51A4m5",
    date: "September 17 2024",
    link: "https://www.linkedin.com/posts/srikanth-m1_im-happy-to-share-that-ive-obtained-a-new-activity-7241654624514908160-hAgb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEI20KgBRrj9-b6wac7i0IdfRCi1HbnaP3A",
    verifyLink: "https://www.guvi.in/certificate?id=n9i23z47g69j51A4m5"
  },
  {
    title: "Figma",
    issuer: "Udemy",
    imageUrl: figma,
    icon: "📊",
    certId: "UC-c0457d78-59da-4e7-98db-dca3b0a6606c",
    date: "May 8, 2024",
    link: "https://drive.google.com/file/d/1iekiWByYN8ok1VPnE8-v8soWjc6Y1cAn/view?usp=sharing",
    verifyLink: "ude.my/UC-c0457d78-59da-41e7-98db-dca3b0a6606c"
  },
  {
    title: "Ai driven respiratory disease classification",
    issuer: "Harcourt Butler Technical University ",
    imageUrl: researc,
    icon: "📊",
    certId: "HBTU-RDC-2025-09",
    date: "Jan 1, 2025",
    link: "https://drive.google.com/file/d/1nbuNhT_DK8dSHxM1NeVN2MAS82HzA5mT/view?usp=drive_link",
    verifyLink: ""
  },
  {
    title: "AI driven Sperm Analysis and Grading System",
    issuer: "360DigiTMG",
    imageUrl:Bi ,
    icon: "📊",
    certId: "360DTMGIN47671",
    date: "October 4, 2025",
    link: "https://drive.google.com/file/d/1iekiWByYN8ok1VPnE8-v8soWjc6Y1cAn/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  }

];

const Certifications: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black mb-6 flex items-center gap-4">
            <span className="font-mono text-cyan-400 text-2xl">02.</span>
            <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 to-transparent mb-8" />
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Professional validations and technical achievements that fuel my growth.
          </p>
        </div>

        {/* HORIZONTAL CAROUSEL WITH CONTROLS */}
        <div className="relative group">
          {/* SCROLL CONTAINER */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 rounded-2xl border border-slate-700/40 bg-slate-950/40 backdrop-blur-sm px-6 py-6"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* GRADIENT MASKS */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none rounded-l-2xl" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none rounded-r-2xl" />

            {/* CARDS */}
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="group/card flex-shrink-0 w-80 rounded-xl border border-slate-700/40 bg-slate-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1"
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover grayscale brightness-70 group-hover/card:grayscale-0 group-hover/card:brightness-100 group-hover/card:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-slate-950/70 backdrop-blur-md border border-slate-600/50 flex items-center justify-center text-2xl group-hover/card:bg-cyan-500/30 group-hover/card:border-cyan-500/70 transition-all duration-300 group-hover/card:scale-110">
                    {cert.icon}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-4">
                  {/* TITLE & ISSUER */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-100 group-hover/card:text-cyan-300 transition-colors leading-tight line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400/80 uppercase tracking-widest">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* DIVIDER */}
                  <div className="h-px bg-gradient-to-r from-slate-700/30 to-transparent" />

                  {/* METADATA */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-semibold uppercase">Date</span>
                      <span className="text-slate-300 font-medium">{cert.date}</span>
                    </div>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-slate-500 font-semibold uppercase">ID</span>
                      <span className="text-slate-300 font-mono text-[10px] text-right truncate">{cert.certId}</span>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="pt-2 flex gap-2">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/70 border border-slate-600/50 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300"
                    >
                      View
                    </a>
                    {cert.verifyLink && (
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 hover:text-cyan-300 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                      >
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SCROLL BUTTONS */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-6 md:-translate-x-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-6 md:translate-x-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;