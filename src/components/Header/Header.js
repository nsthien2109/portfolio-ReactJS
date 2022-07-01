const Header = ({ handleDarkModeChange, darkMode }) => {
  const darkModeChange = () => {
    handleDarkModeChange();
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 xl:hidden">
        <div className="header w-full h-[70px] shadow-md flex justify-between bg-white dark:bg-black items-center py-5 px-5">
          <div className="logo-header">
            <span className="text-2xl font-extrabold tracking-widest text-black dark:text-white">
              TIKA
            </span>
          </div>
          <span
            onClick={darkModeChange}
            className="flex items-center justify-center p-1 text-2xl bg-gray-300 rounded-full md:p-3 mode-color">
            <ion-icon
              name={darkMode ? "sunny-outline" : "moon-outline"}></ion-icon>
          </span>
        </div>
      </div>
      <div className="z-10 items-center justify-center hidden xl:fixed top-3 right-3 xl:flex">
        <span
          onClick={darkModeChange}
          className="flex items-center justify-center p-1 text-2xl bg-gray-300 rounded-full md:p-3 mode-color">
          <ion-icon
            className="text-yellow-400"
            name={darkMode ? "sunny-outline" : "moon-outline"}></ion-icon>
        </span>
      </div>
    </>
  );
};

export default Header;
