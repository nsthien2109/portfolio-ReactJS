import React from "react";
import imgBlog from "../../../assets/images/bl1.jpg";
import Modal from "../../../components/Modal/Modal";

const NewModal = ({ isOpenModal, handleOpenModal }) => {
  const CloseNewModalClick = () => {
    handleOpenModal();
  };
  return (
    <Modal isOpen={isOpenModal} onCloseModal={CloseNewModalClick}>
      <div className="new-modal-content py-14 px-5">
        <div className="w-full h-auto image-main-blog">
          <img src={imgBlog} className="object-cover" alt="" />
        </div>
        <div className="author-date-new dark:text-[#bbbbbb]">
          <p className="author-name uppercase italic pb-2 my-5">
            By thien nguyen | 22/06/2022
          </p>
        </div>
        <div className="text-2xl text-black dark:text-white font-bold w-full title-blog">
          Format releases a new tool that enables direct video hosting
        </div>
        <div className="content-blog mt-10 text-[#767676] font-medium dark:text-[#bbbbbb] leading-9">
          Just because we can't get out and about like we normally would,
          doesn’t mean we have to stop taking pictures. There’s still plenty you
          can do, provided you're prepared to use some imagination. Here are a
          few ideas to keep you shooting until normal life resumes. Most
          photographers love to shoot the unusual, and you don’t get much more
          unusual than These Unprecedented Times. Right now everything counts as
          out of the ordinary. There are a number of remarkable things about
          these lockdown days that are worth photographing now so we can
          remember them when it is all over. Streets empty that are usually busy
          are remarkable and can evoke the sense of historical pictures from
          before the invention of the motorcar. Other things that are different
          at the moment will be queues to get into stores and the lines marked
          out on the floor to show how far apart we should be.
        </div>
        <div className="footer-blog-share w-full text-start flex flex-row items-center dark:text-white text-black font-bold italic mt-5">
          <p>Share : </p>
          <div className="share-social ml-5 text-2xl">
            <span>
              <ion-icon name="logo-facebook"></ion-icon>
            </span>
            <span>
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
            <span>
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
            <span>
              <ion-icon name="logo-tiktok"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewModal;
