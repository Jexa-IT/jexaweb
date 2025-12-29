import { memo } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = memo(({ onNavigate }) => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center px-4 pt-20"
  >
    <div className="text-center max-w-5xl mx-auto space-y-8 bg-slate-900/80 backdrop-blur-lg p-12 rounded-3xl border border-emerald-500/30 shadow-[0_0_80px_rgba(16,185,129,0.25),0_0_120px_rgba(16,185,129,0.15),inset_0_0_80px_rgba(16,185,129,0.08)]">
      <h1 className="text-5xl md:text-7xl font-bold text-white">
        We Build <span className="text-emerald-400">Scalable</span> Digital{" "}
        <span className="text-emerald-400">Solutions</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-2 text-lg text-gray-300">
        <span>Mobile Apps</span>
        <span className="text-emerald-500">•</span>
        <span>Web Apps</span>
        <span className="text-emerald-500">•</span>
        <span>UI/UX</span>
        <span className="text-emerald-500">•</span>
        <span>Cloud</span>
        <span className="text-emerald-500">•</span>
        <span>Testing</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => onNavigate("projects")}
          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all"
        >
          View Projects <ArrowRight className="inline ml-2" />
        </button>
        <button
          onClick={() => onNavigate("contact")}
          className="px-8 py-4 bg-white/10 border-2 border-emerald-500 text-white rounded-full font-semibold hover:bg-white/20 transition-all"
        >
          Get Quote
        </button>
      </div>
    </div>
  </section>
));

HeroSection.displayName = "HeroSection";

export default HeroSection;
