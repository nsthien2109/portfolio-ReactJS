import React, { useEffect } from "react";
import { Slide } from "react-awesome-reveal";

const PortfolioItem = ({ imageApp, appName, appType, id }) => {
  useEffect(() => {
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      return item.addEventListener("mousemove", (e) => {
        const { x, y } = item.getBoundingClientRect();
        item.style.setProperty("--x", e.clientX - x);
        item.style.setProperty("--y", e.clientY - y);
      });
    });
  }, []);

  return (
    <Slide cascade>
      <div className="w-full h-auto bg-[#e5e5e5] dark:bg-gray-800 rounded-md portfolio-item">
        <img
          src={imageApp}
          alt=""
          className="object-cover w-full hover:scale-105"
        />
        <div className="p-3 portfolio-item-shot">
          <h4 className="text-xl font-bold text-black">{appName}</h4>
          <p>{appType}</p>
        </div>
      </div>
    </Slide>
  );
};

export default PortfolioItem;
