import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import blog_term from "../../../assets/images/bl1.jpg";
import { Pagination } from "antd";
import NewItem from "./NewItem";
import NewModal from "./NewModal";

const News = () => {
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [idBlogDetail, setIdBlogDetail] = useState(null);

  const handleOpenNewModal = (id) => {
    setNewModalOpen(!newModalOpen);
    //setIdBlogDetail(id);
  };

  return (
    <div className="flex justify-center dark:bg-[#111111]">
      <div className="px-5 py-28 max-w-[880px]">
        <PageHeader page="News" title="Latest news" />
        <div className="mt-12 list-new">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <NewItem
              authorNew="Nguyen Thien"
              dateNew="25/06/2022"
              titleNew="Format releases a new tool that enables direct video hosting"
              imageNew={blog_term}
              handleOpenNewModal={handleOpenNewModal}
            />
            <NewItem
              authorNew="Nguyen Thien"
              dateNew="25/06/2022"
              titleNew="Format releases a new tool that enables direct video hosting"
              imageNew={blog_term}
              handleOpenNewModal={handleOpenNewModal}
            />
            <NewItem
              authorNew="Nguyen Thien"
              dateNew="25/06/2022"
              titleNew="Format releases a new tool that enables direct video hosting"
              imageNew={blog_term}
              handleOpenNewModal={handleOpenNewModal}
            />
            <NewItem
              authorNew="Nguyen Thien"
              dateNew="25/06/2022"
              titleNew="Format releases a new tool that enables direct video hosting"
              imageNew={blog_term}
              handleOpenNewModal={handleOpenNewModal}
            />
            <NewItem
              authorNew="Nguyen Thien"
              dateNew="25/06/2022"
              titleNew="Format releases a new tool that enables direct video hosting"
              imageNew={blog_term}
              handleOpenNewModal={handleOpenNewModal}
            />
          </div>
        </div>
        <div className="mt-10 text-center pagination">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <NewModal
        newModalOpen={newModalOpen}
        handleOpenNewModal={handleOpenNewModal}
      />
    </div>
  );
};

export default News;
