import React from "react";
import NavbarDesktopItem from "./NavbarDesktopItem";

const NavbarDesktop = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 flex-col z-10 items-center justify-center bg-white dark:bg-black hidden w-[inherit] h-screen shadow-xl nav-desktop xl:flex">
      <span className="text-3xl font-extrabold tracking-widest text-black dark:text-white">
        TIKA
      </span>
      <div className="py-10">
        <NavbarDesktopItem navRedirect="/" navIconName="home" navName="Home" />
        <NavbarDesktopItem
          navRedirect="about"
          navIconName="person"
          navName="About"
        />
        <NavbarDesktopItem
          navRedirect="portfolio"
          navIconName="bag-remove"
          navName="Portfolio"
        />
        <NavbarDesktopItem
          navRedirect="news"
          navIconName="newspaper"
          navName="News"
        />
        <NavbarDesktopItem
          navRedirect="contact"
          navIconName="mail"
          navName="Contact"
        />
      </div>
    </div>
  );
};

export default NavbarDesktop;
