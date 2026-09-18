import React from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';
import { RESTAURANT_CONFIG, getCurrentOpeningStatus } from '../restaurantConfig';

interface OpeningHoursCardProps {
  config: typeof RESTAURANT_CONFIG;
}

export const OpeningHoursCard: React.FC<OpeningHoursCardProps> = ({ config }) => {
  const currentStatus = getCurrentOpeningStatus(config.openingHours);
  const todayIndex = new Date().getDay();

  return (
    <div className="bg-white rounded-2xl border border-[#E5E0D5] p-6 sm:p-8 shadow-sm">
      {/* Header with live status badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
            <Clock className="w-5 h-5 text-[#8C6D23]" />
            <span className="text-xs uppercase font-bold tracking-wider text-[#8C6D23]">Services & Horaires</span>
          </div>
          <h3 className="font-serif-display text-2xl font-bold text-[#0C1B2A]">
            Horaires d'Ouverture
          </h3>
        </div>

        {/* Live Indicator Pill */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide border ${
          currentStatus.isOpen 
            ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
            : 'bg-amber-50 text-amber-800 border-amber-300'
        }`}>
          <span className={`w-2.5 h-2.5 rounded-full ${currentStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
          <span>{currentStatus.statusText}</span>
        </div>
      </div>

      {/* Sub-text next status */}
      <p className="text-xs text-slate-500 my-3 italic">
        {currentStatus.nextTimeText}
      </p>

      {/* Schedule Table */}
      <div className="divide-y divide-slate-100 text-sm mt-4">
        {config.openingHours.map((day) => {
          const isToday = day.dayIndex === todayIndex;
          return (
            <div
              key={day.dayName}
              className={`py-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-md transition-colors ${
                isToday ? 'bg-[#FAF8F5] font-semibold text-[#0C1B2A] border-l-3 border-[#D4AF37]' : 'text-slate-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-24 text-slate-800 font-medium">
                  {day.dayName}
                </span>
                {isToday && (
                  <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#8C6D23] font-bold">
                    Aujourd'hui
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-700">
                <span>
                  Midi : <strong className="font-medium text-slate-900">{day.lunch}</strong>
                </span>
                <span className="text-slate-300">•</span>
                <span>
                  Soir : <strong className="font-medium text-slate-900">{day.dinner}</strong>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Holidays note */}
      <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <span>{config.holidaysNotice}</span>
      </div>
    </div>
  );
};
