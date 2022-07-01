const DARK_MODE = "ui/darkModeChange";
const NAV_TAB = "ui/navigationChange";
const FILTER_TAB = "filters/filterChange";

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

export const filterChange = (filter) => {
  return {
    type: FILTER_TAB,
    payload: filter,
  };
};
