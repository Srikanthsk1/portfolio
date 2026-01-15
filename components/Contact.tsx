import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-[#020617]">
      {/* Background blur circles */}
      <div className="absolute top-1/2 left-0 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left info */}
          <div className="lg:w-[35%] space-y-6 lg:sticky lg:top-32 text-center lg:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter text-white select-none">
                Initiate <br className="hidden lg:block" />
                <span className="gradient-text">Connection.</span>
              </h2>
              <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-transparent rounded-full mx-auto lg:mx-0" />
            </div>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
              Looking for a dedicated entry-level AI developer? Let's connect and discuss how I can contribute to your roadmap.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-4 justify-center lg:justify-start group cursor-default select-none">
                <div
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_16px_#06b6d4]"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Secure Handshake</p>
                  <p className="text-base font-bold text-slate-200 group-hover:text-cyan-400 transition-colors fira-code">
                    srikanthmanio2@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-[65%] w-full">
            <div
              className="glass p-8 md:p-10 rounded-[24px] relative overflow-hidden group
                         shadow-[0_0_30px_rgba(8,145,178,0.6)] border border-cyan-500/40
                         bg-[#0a1624] transition-transform duration-300 ease-in-out
                         hover:shadow-[0_0_40px_#06b6d4] hover:scale-[1.03]"
            >
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8" noValidate>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wide select-none"
                    >
                      Identifier
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-[#112233] border border-cyan-600 rounded-lg px-5 py-3 outline-none
                                 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-80
                                 text-sm text-white placeholder:text-cyan-500 font-semibold
                                 shadow-md hover:shadow-cyan-500/70 transition-shadow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wide select-none"
                    >
                      Return Path
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-[#112233] border border-cyan-600 rounded-lg px-5 py-3 outline-none
                                 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-80
                                 text-sm text-white placeholder:text-cyan-500 font-semibold
                                 shadow-md hover:shadow-cyan-500/70 transition-shadow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wide select-none"
                  >
                    Data Stream (Message)
                  </label>
                  <textarea
                    id="message"
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly outline your inquiry..."
                    className="w-full bg-[#112233] border border-cyan-600 rounded-lg px-5 py-3 outline-none
                               focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-80
                               text-sm text-white placeholder:text-cyan-500 font-semibold
                               shadow-md hover:shadow-cyan-500/70 transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 rounded-lg font-black transition-all transform flex items-center justify-center gap-2.5 text-[12px] uppercase tracking-widest
                    ${
                      submitted
                        ? 'bg-green-500 text-white cursor-default shadow-[0_0_20px_#22c55e]'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg active:scale-95 hover:shadow-[0_0_25px_#06b6d4]'
                    }`}
                  aria-live="polite"
                  aria-disabled={isSubmitting || submitted}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : submitted ? (
                    'Transmitted'
                  ) : (
                    <>
                      Execute Handshake
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
