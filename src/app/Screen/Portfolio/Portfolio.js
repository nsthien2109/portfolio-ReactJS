import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import editorApp from "../../../assets/images/editor.png";
import { Pagination } from "antd";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="flex justify-center dark:bg-[#111111]">
      <div className="px-5 py-28 max-w-[880px]">
        <PageHeader page="Portfolio" title="Products Portfolio" />
        <div className="mt-12 mb-6">
          <ul className="flex flex-wrap text-base text-[#767676] font-medium">
            <li className="mr-2 category-active dark:text-white">All</li>
            <li className="mr-2">Flutter</li>
            <li className="mr-2">ReactJs</li>
            <li className="mr-2">NodeJs</li>
            <li className="mr-2">Other</li>
          </ul>
        </div>
        {/* LIST PRODUCT */}
        <div className="grid grid-cols-1 gap-6 list-product md:grid-cols-2 md:gap-8">
          <PortfolioItem
            imageApp={editorApp}
            appName="PhotoEditor"
            appType="Flutter"
            id="2"
          />
          <PortfolioItem
            imageApp={editorApp}
            appName="Portfolio"
            appType="ReactJS"
          />
          <PortfolioItem
            imageApp={editorApp}
            appName="Ecommerce Tika"
            appType="Flutter"
          />
          <PortfolioItem
            imageApp={editorApp}
            appName="Ecommerce Tika Backend"
            appType="NodeJS"
          />
          <PortfolioItem
            imageApp={editorApp}
            appName="Furniture Shop"
            appType="Laravel"
          />
        </div>
        <div className="mt-10 text-center pagination">
          <Pagination defaultCurrent={1} total={20} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
