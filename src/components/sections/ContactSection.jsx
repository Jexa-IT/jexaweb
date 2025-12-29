import { memo } from "react";
import { Send } from "lucide-react";
import SocialCard from "../cards/SocialCard";
import { SOCIAL_LINKS } from "../../constants";

const ContactSection = memo(
  ({ formData, onFormChange, onFormSubmit, isSubmitting }) => {
    return (
      <section id="contact" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-gray-300">
              Ready to transform your ideas into reality?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-emerald-500/30 p-8 h-full">
              <form onSubmit={onFormSubmit}>
                <div className="space-y-6">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onFormChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500 disabled:cursor-not-allowed transition-all"
                    placeholder="Your name"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onFormChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500 disabled:cursor-not-allowed transition-all"
                    placeholder="your@email.com"
                  />
                  <input
                    required
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={onFormChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500  disabled:cursor-not-allowed transition-all"
                    placeholder="Your mobile number"
                  />
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={onFormChange}
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border border-emerald-500/30 rounded-lg text-white resize-none focus:outline-none focus:border-emerald-500  disabled:cursor-not-allowed transition-all"
                    placeholder="Tell us about your project..."
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-6 flex flex-col h-full">
              {SOCIAL_LINKS.map((item, i) => (
                <SocialCard key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";

export default ContactSection;
