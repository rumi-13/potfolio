// components/MilestoneCard.jsx
import React from 'react';

const MilestoneCard = ({ title, institution, duration, description, Icon, align = 'left' }) => {
  const isLeft = align === 'left';

  return (
    <div
      className={`w-full md:w-1/2 px-4 mb-10 relative group transition-all duration-300 ${
        isLeft ? 'md:self-start md:pr-12' : 'md:self-end md:pl-12'
      }`}
      aria-label={`${title} at ${institution}`}
    >
      {/*  Card Container */}
      <div className="bg-gradient-to-br from-orange-100 to-yellow-50 dark:from-slate-800 dark:to-slate-700 shadow-md dark:shadow-lg rounded-2xl ring-1 ring-orange-200 dark:ring-slate-600 p-6 sm:p-8 hover:shadow-lg dark:hover:shadow-xl transition-all transform group-hover:scale-[1.02] group-hover:ring-2 group-hover:ring-orange-300 dark:group-hover:ring-yellow-300 duration-300">
        
       
        <div className="flex items-center gap-x-4 mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-200 dark:bg-yellow-400 shadow-sm ring-1 ring-orange-300 dark:ring-yellow-500 group-hover:scale-110 transition-all duration-300">
            <Icon className="text-xl text-orange-600 dark:text-slate-800" />
          </div>
          <h3 className="font-[Poppins] text-xl lg:text-2xl font-semibold text-slate-800 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-yellow-300 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Institution Details */}
        <div className="space-y-2 mb-4">
          <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
            {institution}
          </p>
          <p className="text-sm sm:text-base text-orange-600 dark:text-yellow-400 font-medium">
            {duration}
          </p>
        </div>

        
        <div className="pt-2 border-t border-orange-200 dark:border-slate-600">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>

      {/*Timeline Dot */}
      <span
        className={`absolute top-6 w-6 h-6 rounded-full border-4 border-orange-400 dark:border-yellow-300 bg-white dark:bg-slate-800 shadow-md ring-2 ring-orange-100 dark:ring-yellow-200 z-10 group-hover:scale-125 group-hover:border-orange-500 dark:group-hover:border-yellow-400 transition-all duration-300 ${
          isLeft ? '-right-3 md:-right-5' : '-left-3 md:-left-5'
        }`}
      >
        
        <span className="absolute inset-2 bg-orange-400 dark:bg-yellow-300 rounded-full group-hover:bg-orange-500 dark:group-hover:bg-yellow-400 transition-colors duration-300"></span>
      </span>
    </div>
  );
};

export default MilestoneCard;