import  { memo } from 'react';
import { STATS } from '@/constants';

const StatsCard = memo(() => (
  <div className="max-w-4xl mx-auto p-10 bg-gradient-to-br from-emerald-500/90 to-teal-600/90 backdrop-blur-lg rounded-3xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-300/50">
      {STATS.map((s, i) => (
        <div key={i} className="py-4 md:py-0">
          <div className="text-6xl font-bold text-white">{s.number}</div>
          <div className="text-xl text-emerald-100">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
));

StatsCard.displayName = 'StatsCard';

export default StatsCard;