const SkillCard = ({ skillName, iconSrc }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-2xl shadow-md dark:shadow-lg ring-1 ring-slate-200 dark:ring-slate-600 p-6 flex flex-col items-center gap-y-4 transition-all transform hover:scale-105 hover:shadow-lg dark:hover:shadow-xl hover:ring-2 hover:ring-blue-300 dark:hover:ring-yellow-300 duration-300 group">
      

      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-100 dark:ring-slate-600 group-hover:scale-110 transition-all duration-300">
        <img
          src={iconSrc}
          alt={`${skillName} icon`}
          className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
        />
      </div>
      

      <p className="text-base lg:text-lg font-medium text-center leading-relaxed group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors duration-300">
        {skillName}
      </p>
    </div>
  );
};

export default SkillCard;
