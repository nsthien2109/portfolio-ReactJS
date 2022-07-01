import React from "react";
import Modal from "../../../components/Modal/Modal";
import imageDemo from "../../../assets/images/maindemoPr.png";

const PortfolioModal = ({ isOpenModal, handleOpenModal }) => {
  return (
    <Modal isOpen={isOpenModal} onCloseModal={handleOpenModal}>
      <div className="product-modal-content px-7 py-10 w-full">
        <img src={imageDemo} alt="" className="object-cover" />
        <div className="name-product mt-8">
          <p className="text-xl font-bold text-black dark:text-white">
            Portfolio Web App
          </p>
          <p className="text-[#bbbbbb]">Detail</p>
        </div>
        <div className="description-product mt-8 ">
          <p className="italic text-[#767676] dark:text-[#bbbbbb] font-medium leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            accusamus maxime dolorem, velit tempora eos reiciendis magni
            officiis est unde. Temporibus eos exercitationem magnam rem autem
            nobis consectetur modi natus.
          </p>
          <div className="detail-product-info mt-5 md:mt-0">
            <p className="label-detail text-[#767676] dark:text-[#bbbbbb] font-medium italic">
              <span className="inline-block w-[100px] dark:text-white  text-black font-semibold">
                Author : {""}
              </span>{" "}
              Nguyen Si Thien
            </p>
            <p className="label-detail text-[#767676] dark:text-[#bbbbbb] font-medium italic">
              <span className="w-[100px] inline-block dark:text-white text-black font-semibold">
                Category : {""}
              </span>{" "}
              ReactJs
            </p>
            <p className="label-detail text-[#767676] dark:text-[#bbbbbb] font-medium italic">
              <span className="w-[100px] inline-block dark:text-white  text-black font-semibold">
                Date : {""}
              </span>{" "}
              07/01/2022
            </p>
          </div>
        </div>

        <div className="product-git mt-10 text-lg w-full flex items-center">
          <p className="text-black dark:text-white font-medium">
            Git Repository :
          </p>
          <span className="text-3xl ml-5 dark:text-white cursor-pointer">
            <ion-icon name="logo-github"></ion-icon>
          </span>
        </div>

        <h3 className="w-full text-xl font-semibold mt-10 mb-3 dark:text-white text-black">
          Images page :{" "}
        </h3>
        <div className="images-addition grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="image-add">
            <img src={imageDemo} alt="" />
          </div>
          <div className="image-add">
            <img src={imageDemo} alt="" />
          </div>
          <div className="image-add">
            <img src={imageDemo} alt="" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioModal;
