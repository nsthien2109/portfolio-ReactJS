import React from "react";
import { Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="flex justify-center dark:bg-[#111111]">
      <Slide>
        <div className=" home flex flex-col justify-center items-center h-screen w-full min-w-[350px] max-w-[880px] px-5 lg:flex-row lg:py-32  lg:px-10 xl:w-full">
          <div className="w-[200px] h-[200px] image-avatar mb-7 md:w-[300px] md:h-[300px] lg:max-w-[30%] lg:w-[inherit] lg:h-[-webkit-fill-available]"></div>
          <div className="description lg:ml-10">
            <div className="text-[35px] font-bold text-center text-black uppercase text-name mb-6 md:text-[55px] lg:text-start dark:text-white">
              Thien Nguyen
            </div>
            <div className="text-center sub-cription text-[15px] text-[#767676] dark:text-[#bbb] italic font-medium mb-7 lg:text-start">
              I'm a senior of Vietnam - Korea University of infomation and
              communication Technology, my majoring is Software engineer, I'm
              learning Mobile and Website development
            </div>
            <div className="text-center text-black social-network lg:text-start dark:text-white">
              <span className="text-[25px] mx-1">
                <ion-icon name="logo-facebook"></ion-icon>
              </span>
              <span className="text-[25px] mx-1">
                <ion-icon name="logo-linkedin"></ion-icon>
              </span>
              <span className="text-[25px] mx-1">
                <ion-icon name="logo-github"></ion-icon>
              </span>
              <span className="text-[25px] mx-1">
                <ion-icon name="logo-youtube"></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Home;
