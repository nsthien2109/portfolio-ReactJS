import React from "react";

const Modal = (props) => {
  return (
    <div>
      <div
        onClick={props.onCloseModal}
        className={`${
          props.isOpen ? "block" : "hidden"
        } w-full h-screen fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#000000bf] overlay px-4 modal-container`}>
        <div className="flex w-full h-full justify-center items-center">
          <div
            onClick={(event) => event.stopPropagation()}
            className="modal-new rounded overflow-scroll overflow-x-hidden sm:w-[550px] md:w-[750px] lg:w-[850px] xl:w-[75%] dark:bg-[#151515] bg-white">
            {props.children}
            <button
              onClick={props.onCloseModal}
              className="close-new-modal z-50  fixed top-5 right-2 lg:right-10 lg:p-3 text-xl flex items-center justify-center p-1 rounded-full bg-gray-50">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
