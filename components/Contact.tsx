import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Enhanced Background Effects */}
      <div className="absolute top-1/4 left-0 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left Info Section */}
          <div className="lg:w-[38%] space-y-8 lg:sticky lg:top-32 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/60 backdrop-blur-md rounded-full border border-cyan-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-400/90">
                  Open to Opportunities
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-white">
                Initiate <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Connection.
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full mx-auto lg:mx-0" />
            </div>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
              Looking for a dedicated entry-level AI developer? Let's connect and discuss how I can contribute to your roadmap.
            </p>

            {/* Enhanced Email Display */}
            <div className="pt-4">
              <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-cyan-500/20">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">
                      Direct Contact
                    </p>
                    <p className="text-sm md:text-base font-bold text-slate-200 group-hover:text-cyan-400 transition-colors font-mono">
                      srikanthmanio2@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-2">Response Time</p>
                <p className="text-lg font-black text-cyan-400">24 Hours</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 border border-white/5">
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-2">Availability</p>
                <p className="text-lg font-black text-green-400">Immediate</p>
              </div>
            </div>
          </div>

          {/* Enhanced Form Section */}
          <div className="lg:w-[62%] w-full">
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 rounded-[28px] relative overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.25)] transition-all duration-500">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
              
              <div className="relative z-10 space-y-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Your Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-slate-950/50 border-2 border-slate-700/50 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 text-base text-white placeholder:text-slate-500 transition-all duration-300 hover:border-slate-600"
                    />
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Email Address
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-slate-950/50 border-2 border-slate-700/50 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 text-base text-white placeholder:text-slate-500 transition-all duration-300 hover:border-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-slate-950/50 border-2 border-slate-700/50 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 text-base text-white placeholder:text-slate-500 transition-all duration-300 hover:border-slate-600 resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || submitted}
                  className={`w-full py-5 rounded-xl font-black transition-all transform flex items-center justify-center gap-3 text-sm uppercase tracking-widest shadow-2xl
                    ${
                      submitted
                        ? 'bg-green-500 text-white cursor-default shadow-[0_0_30px_rgba(34,197,94,0.4)]'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-slate-500 text-center pt-2">
                  Your information is secure and will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;