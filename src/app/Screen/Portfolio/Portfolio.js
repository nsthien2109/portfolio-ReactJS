import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../../components/PageHeader/PageHeader";
import editorApp from "../../../assets/images/editor.png";
import { Pagination } from "antd";
import PortfolioItem from "./PortfolioItem";
import PortfolioModal from "./PortfolioModal";
import FilterItem from "../../../components/FilterItem/FilterItem";

const Portfolio = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className="flex justify-center dark:bg-[#111111]">
      <div className="px-5 py-28 max-w-[880px]">
        <PageHeader page="Portfolio" title="Products Portfolio" />
        <div className="mt-12 mb-6">
          <ul className="flex flex-wrap text-base text-[#767676] font-medium">
            <FilterItem filterName="All" />
            <FilterItem filterName="Flutter" />
            <FilterItem filterName="ReactJs" />
            <FilterItem filterName="NodeJs" />
            <FilterItem filterName="Other" />
          </ul>
        </div>
        {/* LIST PRODUCT */}
        <div className="grid grid-cols-1 gap-6 list-product md:grid-cols-2 md:gap-8">
          <PortfolioItem
            imageApp={editorApp}
            appName="PhotoEditor"
            appType="Flutter"
            id="2"
            onClickItem={handleOpenModal}
          />
          <PortfolioItem
            imageApp={editorApp}
            appName="Portfolio"
            appType="ReactJS"
            onClickItem={handleOpenModal}
          />
          <PortfolioItem
            imageApp={editorApp}
            appName="Ecommerce Tika"
            appType="Flutter"
            onClickItem={handleOpenModal}
          />
          <PortfolioItem
            imageApp={editorApp}
            appName="Ecommerce Tika Backend"
            appType="NodeJS"
            onClickItem={handleOpenModal}
          />
          <PortfolioItem
            imageApp={editorApp}
            appName="Furniture Shop"
            appType="Laravel"
            onClickItem={handleOpenModal}
          />
        </div>
        <div className="mt-10 text-center pagination">
          <Pagination defaultCurrent={1} total={20} />
        </div>
      </div>
      <PortfolioModal
        isOpenModal={isOpenModal}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
};

export default Portfolio;
