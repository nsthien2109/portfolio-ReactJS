const DARK_MODE = "ui/darkModeChange";
const NAV_TAB = "ui/navigationChange";

export const darkMode = () => {
  return {
    type: DARK_MODE,
  };
};

export const navChange = (page) => {
  return {
    type: NAV_TAB,
    payload: page,
  };
};
