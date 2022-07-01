import React from "react";
import { Link } from "react-router-dom";
import UiSlice from "../../slice/UIslice";
import { useDispatch, useSelector } from "react-redux";
import { navSelector } from "../../redux/selector";

const NavbarDesktopItem = ({ navRedirect, navIconName, navName }) => {
  const page = useSelector(navSelector);
  const dispatch = useDispatch();

  const handleChangeNav = () => {
    dispatch(UiSlice.actions.navigationChange(navName));
  };

  return (
    <Link
      to={navRedirect}
      className={
        page === navName
          ? "selected-active dark:text-white"
          : "block w-full my-2 text-slate-400 text-base dark:text-slate-300"
      }
    >
      <span
        onClick={handleChangeNav}
        className="flex items-center w-full h-full"
      >
        <ion-icon name={navIconName}></ion-icon>
        <p className="ml-3 text-base">{navName}</p>
      </span>
    </Link>
  );
};

export default NavbarDesktopItem;
