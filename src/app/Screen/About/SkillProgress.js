import React, { useState, useEffect } from "react";

const SkillProgress = ({ nameSkill, persen }) => {
  const widthProgress = {
    width: `${persen}%`,
  };

  return (
    <div>
      <div className="mb-4 skill_progress w-full">
        <div className="flex justify-between mb-2 italic font-medium leading-5 text-black dark:text-white skill_label">
          <p className="">{nameSkill}</p>
          <p>{persen}%</p>
        </div>
        <div className="progress_bar w-full h-[4px] bg-slate-200 dark:bg-black">
          <div
            className="progress h-full dark:bg-white bg-black"
            style={widthProgress}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
