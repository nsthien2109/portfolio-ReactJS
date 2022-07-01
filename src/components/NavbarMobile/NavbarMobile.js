import React from "react";
import NavbarMobileItem from "./NavbarMobileItem";
const NavbarMobile = () => {
  return (
    <div className="nav-mobile xl:hidden">
      <div className="w-full h-[50px] fixed bottom-0 right-0 left-0 bg-[#DEDEDE] shadow-md grid grid-cols-5 z-10 dark:bg-[#333]">
        <NavbarMobileItem navRedirect="/" navIconName="home" navName="Home" />
        <NavbarMobileItem
          navRedirect="about"
          navIconName="person"
          navName="About"
        />
        <NavbarMobileItem
          navRedirect="portfolio"
          navIconName="bag-remove"
          navName="Portfolio"
        />
        <NavbarMobileItem
          navRedirect="news"
          navIconName="newspaper"
          navName="News"
        />
        <NavbarMobileItem
          navRedirect="contact"
          navIconName="mail"
          navName="Contact"
        />
      </div>
    </div>
  );
};

export default NavbarMobile;
