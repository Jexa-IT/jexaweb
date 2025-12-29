import{ memo } from 'react';

const ServiceCard = memo(({ icon: Icon, title, description }) => (
  <div className="group relative p-8 bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-emerald-500/30 hover:border-emerald-500 active:border-emerald-500 transition-all duration-500 hover:scale-105 active:scale-105 hover:shadow-[0_20px_60px_rgba(16,185,129,0.5)] active:shadow-[0_20px_60px_rgba(16,185,129,0.5)] overflow-hidden cursor-pointer touch-manipulation">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-600/0 group-hover:from-emerald-500/10 group-hover:to-teal-600/10 group-active:from-emerald-500/10 group-active:to-teal-600/10 transition-all duration-500 rounded-2xl"></div>
    
    <div className="relative z-10">
      <div className="text-emerald-400 mb-6  transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-1 group-hover:rotate-6 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] group-active:scale-110 group-active:translate-y-1 group-active:rotate-6 group-active:brightness-125 group-active:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 group-active:text-emerald-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-300 group-hover:text-gray-200 group-active:text-gray-200 transition-colors duration-300">{description}</p>
    </div>
    
    <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/0 group-hover:bg-emerald-500/20 group-active:bg-emerald-500/20 blur-2xl transition-all duration-500 rounded-full"></div>
    <div className="absolute bottom-0 left-0 w-20 h-20 bg-teal-500/0 group-hover:bg-teal-500/20 group-active:bg-teal-500/20 blur-2xl transition-all duration-500 rounded-full"></div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;