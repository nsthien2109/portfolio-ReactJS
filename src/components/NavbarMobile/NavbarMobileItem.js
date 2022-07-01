import React from "react";
import { Link } from "react-router-dom";
import UiSlice from "../../slice/UIslice";
import { useDispatch, useSelector } from "react-redux";
import { navSelector } from "../../redux/selector";

const NavbarMobileItem = ({ navRedirect, navIconName, navName }) => {
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
          ? "selected-active dark:text-slate-300"
          : "block w-full py-2 text-gray-600 dark:text-slate-300"
      }
      onClick={handleChangeNav}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <ion-icon name={navIconName}></ion-icon>
        <p className="text-base">{navName}</p>
      </div>
    </Link>
  );
};

export default NavbarMobileItem;
