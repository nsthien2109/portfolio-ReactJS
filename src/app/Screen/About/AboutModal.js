import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import reactIcon from "../../../assets/icons/react.png";
import gitHubIcon from "../../../assets/icons/github.png";
import androidIcon from "../../../assets/icons/android-studio.png";
import flutterIcon from "../../../assets/icons/flutter.png";
import nodeJsIcon from "../../../assets/icons/nodejs.png";
import laravelIcon from "../../../assets/icons/laravel.png";
import visualIcon from "../../../assets/icons/visual-studio-code.png";
import discordIcon from "../../../assets/icons/discord.png";
import { Autoplay } from "swiper";
import SkillProgress from "./SkillProgress";

const AboutModal = ({ handleOpenModal, openModal }) => {
  const CloseModalClick = () => {
    handleOpenModal();
  };

  return (
    <div
      onClick={CloseModalClick}
      className={
        openModal
          ? "fixed top-0 bottom-0 left-0 right-0 z-50 modal-about"
          : "hidden transition-all modal-about"
      }
    >
      <div className="flex items-center justify-center w-full h-screen bg-[#000000bf]">
        <div
          onClick={(event) => event.stopPropagation()}
          className="relative overflow-scroll top-0 left-0 right-0 w-[350px] min-w-[350px] sm:w-[550px] md:w-[750px] lg:w-[850px] xl:w-[940px] rounded h-4/5 bg-white dark:bg-[#151515] mx-[15px] px-6 py-14"
        >
          <h3 className="text-xl font-bold text-black dark:text-white">
            Personalty Skills
          </h3>

          <div className="py-8 skills_pesonal">
            <SkillProgress nameSkill="Flutter" persen={76} />
            <SkillProgress nameSkill="ReactJs" persen={55} />
            <SkillProgress nameSkill="NodeJS" persen={35} />
            <SkillProgress nameSkill="MySQL" persen={55} />
            <SkillProgress nameSkill="MySQL" persen={25} />
          </div>

          <h3 className="text-xl font-bold text-black dark:text-white">
            Language Skills
          </h3>
          <div className="py-8 skills_pesonal">
            <SkillProgress nameSkill="Vietnamese" persen={100} />
            <SkillProgress nameSkill="English" persen={25} />
          </div>

          <h3 className="text-xl font-bold dark:text-white text-black">
            Tools
          </h3>

          <div className="w-full">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper w-full mt-10"
            >
              <SwiperSlide>
                <div className="w-full flex justify-center items-center py-2 bg-zinc-300 opacity-60 hover:opacity-100">
                  <img
                    src={reactIcon}
                    alt=""
                    className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center items-center py-2 bg-zinc-300 opacity-60 hover:opacity-100">
                  <img
                    src={gitHubIcon}
                    alt=""
                    className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center items-center py-2 bg-zinc-300 opacity-60 hover:opacity-100">
                  <img
                    src={flutterIcon}
                    alt=""
                    className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center items-center py-2 bg-zinc-300 opacity-60 hover:opacity-100">
                  <img
                    src={androidIcon}
                    alt=""
                    className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center items-center py-2 bg-zinc-300 opacity-60 hover:opacity-100">
                  <img
                    src={nodeJsIcon}
                    alt=""
                    className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center items-center py-2 bg-zinc-300 opacity-60 hover:opacity-100">
                  <img
                    src={laravelIcon}
                    alt=""
                    className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center items-center py-2 bg-zinc-300 opacity-60 hover:opacity-100">
                  <img
                    src={visualIcon}
                    alt=""
                    className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full flex justify-center items-center py-2 bg-zinc-300 opacity-60 hover:opacity-100">
                  <img
                    src={discordIcon}
                    alt=""
                    className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className=" flex items-center justify-center mt-9">
            <button className="py-4 text-white bg-black dark:text-black dark:bg-white px-9">
              Download CV
            </button>
          </div>

          <span
            onClick={CloseModalClick}
            className="close-button top-4 text-2xl text-black dark:text-white font-bold absolute right-4"
          >
            <ion-icon name="close-outline"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
