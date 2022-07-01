import React, { useState } from "react";
import imageCover from "../../../assets/images/bia.jpg";
import AboutModal from "./AboutModal";
import { Slide } from "react-awesome-reveal";

const About = () => {
  const [openModal, setOpenModal] = useState(false);

  let handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="flex justify-center session-about dark:bg-[#111111]">
        <Slide>
          <div className="flex flex-col justify-center px-5 py-10 about-container mb-[50px] max-w-[880px]">
            <div className="flex justify-center w-full h-auto image-cover">
              <img
                src={imageCover}
                className="max-w-[880px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="mt-10 about-me w-full max-w-[880px]">
              <span className="block text-black text-[22px] dark:text-white font-bold mb-6">
                Nguyen Si Thien & Developer
              </span>
              <div className="justify-center decription-me lg:flex ">
                <div className="intro mb-9 lg:w-[50%] lg:pr-12">
                  <p className="text-[#767676] dark:text-[#bbb] text-[15px] italic mb-9">
                    Hello i am a developer in Da Nang, Vietnam and happy to work
                    all over Asia and Europe, i love culture and food in this
                    area, i make application products, ....
                  </p>
                  <button
                    onClick={handleOpenModal}
                    className="py-4 text-white bg-black dark:text-black dark:bg-white px-9"
                  >
                    Read More
                  </button>
                </div>
                <div className="info lg:w-[50%] lg:pl-12">
                  <p className="info-real text-[15px] text-[#767676] dark:text-[#bbb]">
                    <span className="inline-block w-[100px] h-[35px] dark:text-white text-black font-semibold">
                      Birthday :{" "}
                    </span>{" "}
                    21 - 09 - 2001
                  </p>
                  <p className="info-real text-[#767676] dark:text-[#bbb]">
                    <span className="inline-block w-[100px] h-[35px] dark:text-white text-black font-semibold">
                      Age :{" "}
                    </span>{" "}
                    21
                  </p>
                  <p className="info-real text-[#767676] dark:text-[#bbb]">
                    <span className="inline-block w-[100px] h-[35px] dark:text-white text-black font-semibold">
                      Address :{" "}
                    </span>{" "}
                    Ngu Hanh Son, Danang
                  </p>
                  <p className="info-real text-[#767676] dark:text-[#bbb]">
                    <span className="inline-block w-[100px] h-[35px] dark:text-white text-black font-semibold">
                      Phone :{" "}
                    </span>{" "}
                    0705459542
                  </p>
                  <p className="info-real text-[#767676] dark:text-[#bbb]">
                    <span className="inline-block w-[100px] h-[35px] dark:text-white text-black font-semibold">
                      Study :{" "}
                    </span>{" "}
                    University of Danang
                  </p>
                  <p className="info-real text-[#767676] dark:text-[#bbb]">
                    <span className="inline-block w-[100px] h-[35px] dark:text-white text-black font-semibold">
                      Ready :{" "}
                    </span>{" "}
                    Avalible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
      <AboutModal handleOpenModal={handleOpenModal} openModal={openModal} />
    </>
  );
};

export default About;
