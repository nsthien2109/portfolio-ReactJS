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
import Modal from "../../../components/Modal/Modal";

const AboutModal = ({ handleOpenModal, openModal }) => {
  const CloseModalClick = () => {
    handleOpenModal();
  };

  return (
    <Modal isOpen={openModal} onCloseModal={CloseModalClick}>
      <div className="about-modal-content w-full px-5 py-10">
        <h3 className="text-xl w-full font-bold text-black dark:text-white">
          Personalty Skills
        </h3>

        <div className="py-8 skills_pesonal w-full">
          <SkillProgress nameSkill="Flutter" persen={76} />
          <SkillProgress nameSkill="ReactJs" persen={55} />
          <SkillProgress nameSkill="NodeJS" persen={35} />
          <SkillProgress nameSkill="MySQL" persen={55} />
          <SkillProgress nameSkill="MySQL" persen={25} />
        </div>

        <h3 className="text-xl font-bold text-black dark:text-white w-full">
          Language Skills
        </h3>
        <div className="py-8 skills_pesonal w-full">
          <SkillProgress nameSkill="Vietnamese" persen={100} />
          <SkillProgress nameSkill="English" persen={25} />
        </div>

        <h3 className="w-full text-xl font-bold dark:text-white text-black">
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
            className="mySwiper w-full mt-10">
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
      </div>
    </Modal>
  );
};

export default AboutModal;
