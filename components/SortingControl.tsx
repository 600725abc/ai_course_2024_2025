
import React from 'react';
import { SortOrder } from '../types';

interface SortingControlProps {
  currentOrder: SortOrder;
  onOrderChange: (order: SortOrder) => void;
}

const SortingControl: React.FC<SortingControlProps> = ({ currentOrder, onOrderChange }) => {
  return (
    <div className="flex justify-center mb-16">
      <div className="inline-flex p-1 bg-slate-200/50 rounded-xl backdrop-blur-sm border border-slate-200 shadow-inner">
        <button
          onClick={() => onOrderChange(SortOrder.LATEST)}
          className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
            currentOrder === SortOrder.LATEST
              ? 'bg-white text-blue-700 shadow-md ring-1 ring-black/5'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-pressed={currentOrder === SortOrder.LATEST}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          最新在前
        </button>
        <button
          onClick={() => onOrderChange(SortOrder.EARLIEST)}
          className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
            currentOrder === SortOrder.EARLIEST
              ? 'bg-white text-blue-700 shadow-md ring-1 ring-black/5'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-pressed={currentOrder === SortOrder.EARLIEST}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
          </svg>
          最早在前
        </button>
      </div>
    </div>
  );
};

export default SortingControl;
