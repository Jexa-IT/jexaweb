import  { memo } from "react";

const ProjectCard = memo(({ title, description, image }) => (
  <div className="group relative bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-emerald-500/30 overflow-hidden hover:border-emerald-500 active:border-emerald-500 transition-all duration-500 hover:scale-105 active:scale-105 hover:shadow-[0_20px_60px_rgba(16,185,129,0.5)] active:shadow-[0_20px_60px_rgba(16,185,129,0.5)] cursor-pointer touch-manipulation">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-600/0 group-hover:from-emerald-500/10 group-hover:to-teal-600/10 group-active:from-emerald-500/10 group-active:to-teal-600/10 transition-all duration-500 rounded-2xl pointer-events-none"></div>

    {/* Responsive mockup container */}
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-3 sm:p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40"></div>
    </div>

    <div className="relative p-5 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-emerald-400 group-active:text-emerald-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-300 group-hover:text-gray-200 group-active:text-gray-200 transition-colors duration-300 line-clamp-2">
        {description}
      </p>
    </div>

    <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/0 group-hover:bg-emerald-500/20 group-active:bg-emerald-500/20 blur-2xl transition-all duration-500 rounded-full"></div>
    <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-500/0 group-hover:bg-teal-500/20 group-active:bg-teal-500/20 blur-2xl transition-all duration-500 rounded-full"></div>
  </div>
));

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
