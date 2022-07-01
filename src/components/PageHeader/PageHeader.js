import React from "react";

const PageHeader = ({ page, title }) => {
  return (
    <div>
      <div className="flex flex-col page-header dark:bg-[#111111]">
        <span className="py-3 px-[10px] bg-[#0000000A] dark:bg-[#FFFFFF14] dark:text-[#999] w-min uppercase text-black font-semibold text-xs mb-4">
          {page}
        </span>
        <h3 className="text-3xl font-bold text-black dark:text-white w-max">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PageHeader;
