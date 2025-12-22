
import React, { useState, useMemo } from 'react';
import { MILESTONES, FACILITATOR_TEXT } from './constants';
import { SortOrder } from './types';
import MilestoneCard from './components/MilestoneCard';
import SortingControl from './components/SortingControl';

const App: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.LATEST);

  const sortedMilestones = useMemo(() => {
    return [...MILESTONES].sort((a, b) => {
      return sortOrder === SortOrder.LATEST 
        ? b.timestamp - a.timestamp 
        : a.timestamp - b.timestamp;
    });
  }, [sortOrder]);

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <header className="relative bg-[#0f172a] py-24 sm:py-32 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-blue-600/40 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-indigo-600/30 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          {/* Enhanced Image Presentation with Mandatory Source */}
          <div className="mb-12 mx-auto w-full max-w-[400px] px-4 sm:px-0">
            <div className="aspect-square relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-900 group">
              <img 
                src="https://duk.tw/JBC0V4.png" 
                alt="GenAI Logo" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight tracking-tight">
            Charting the Future <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              with Generative AI
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            The NTU EMBA Experience: A Shared Journey of Discovery
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Learning Milestones Section */}
        <section id="learning-milestones" aria-labelledby="milestones-title">
          <header className="text-center mb-12">
            <h2 id="milestones-title" className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
              Learning Milestones
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-500 max-w-xl mx-auto italic font-medium">
              From Curiosity to AI Skills: Our Course in Action
            </p>
          </header>

          <SortingControl 
            currentOrder={sortOrder} 
            onOrderChange={setSortOrder} 
          />

          <div className="relative">
            {/* Timeline Line Decorator */}
            <div className="absolute left-0 sm:left-[168px] top-4 bottom-4 w-px bg-slate-200 hidden sm:block" />
            
            <div className="space-y-4">
              {sortedMilestones.map((milestone) => (
                <MilestoneCard key={milestone.id} milestone={milestone} />
              ))}
            </div>
          </div>
        </section>

        {/* Facilitator Section */}
        <section id="about-facilitator" aria-labelledby="about-title" className="mt-32 pt-20 border-t border-slate-200">
          <header className="text-center mb-16">
            <h2 id="about-title" className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              About the Facilitator
            </h2>
          </header>
          
          <article className="relative bg-white border border-slate-200 rounded-3xl p-8 sm:p-14 shadow-sm hover:shadow-lg transition-shadow duration-500 overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <svg className="w-32 h-32 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3C14.017 1.89543 14.9124 1 16.017 1H19.017C21.2261 1 23.017 2.79086 23.017 5V19C23.017 21.2091 21.2261 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM1 19V5C1 2.79086 2.79086 1 5 1H8C9.10457 1 10 1.89543 10 3V6C10 7.10457 9.10457 8 8 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C2.79086 23 1 21.2091 1 19Z" />
              </svg>
            </div>

            <div className="space-y-8 relative z-10">
              <p className="text-xl leading-relaxed text-slate-700">
                Patricia Liu is the facilitator of the <span className="font-bold text-blue-700 underline decoration-blue-200 decoration-4 underline-offset-4">{FACILITATOR_TEXT.highlight}</span>. {FACILITATOR_TEXT.p1.split(FACILITATOR_TEXT.highlight)[1]}
              </p>
              <p className="text-xl leading-relaxed text-slate-700">
                {FACILITATOR_TEXT.p2}
              </p>
              <p className="text-xl leading-relaxed text-slate-600 font-serif italic border-l-4 border-blue-600 pl-6">
                {FACILITATOR_TEXT.p3}
              </p>
            </div>
          </article>
        </section>
      </main>

      <footer className="bg-slate-900 py-16 text-center">
        <div className="container mx-auto px-6">
          <p className="text-slate-500 uppercase tracking-[0.2em] font-bold text-sm mb-4">
            Curated by Patricia Liu
          </p>
          <div className="w-12 h-0.5 bg-slate-800 mx-auto" />
          <p className="mt-8 text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} NTU EMBA Generative AI Learning Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
