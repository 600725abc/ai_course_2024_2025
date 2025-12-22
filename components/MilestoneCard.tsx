
import React from 'react';
import { Milestone } from '../types';

interface MilestoneCardProps {
  milestone: Milestone;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone }) => {
  return (
    <article className="group relative flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 last:mb-0">
      {/* Date Marker */}
      <div className="flex-shrink-0 w-full sm:w-40 pt-1">
        <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600 font-sans">
            {milestone.date.split('/')[0]}
          </span>
          <time className="text-2xl font-serif font-bold text-slate-800 tabular-nums">
            {milestone.date.split('/').slice(1).join('/')}
          </time>
        </div>
      </div>

      {/* Content Card */}
      <div className="relative flex-grow bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-100 group-focus-within:ring-2 group-focus-within:ring-blue-500">
        {/* Decorator Dot */}
        <div className="absolute top-8 -left-3 hidden sm:block">
          <div className="w-6 h-6 rounded-full border-4 border-slate-50 bg-blue-600 shadow-sm" />
        </div>
        
        <ul className="space-y-4">
          {milestone.items.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-slate-700 leading-relaxed font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default MilestoneCard;
