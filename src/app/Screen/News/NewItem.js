import React from "react";
import { Slide } from "react-awesome-reveal";

const NewItem = ({
  authorNew,
  dateNew,
  titleNew,
  imageNew,
  handleOpenNewModal,
}) => {
  const handleDetailBlog = () => {
    handleOpenNewModal();
  };

  return (
    <Slide cascade>
      <div className="w-full shadow-xl" onClick={handleDetailBlog}>
        <img src={imageNew} alt="" className="w-full h-auto" />
        <div className="px-6 blog_info py-7 dark:bg-black">
          <div className="w-full pb-2 mb-5 text-xs italic text-gray-400 border-b author-date">
            <p className="">
              {authorNew} | <span>{dateNew}</span>
            </p>
          </div>
          <h3 className="mb-5 text-lg font-bold text-black dark:text-white">
            {titleNew}
          </h3>
          <span className="dark:text-white">Read more __</span>
        </div>
      </div>
    </Slide>
  );
};

export default NewItem;
