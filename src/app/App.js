import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import NavbarMobile from "../components/NavbarMobile/NavbarMobile";
import NavbarDesktop from "../components/NavbarDesktop/NavbarDesktop";
import Home from "./Screen/Home/Home";
import About from "./Screen/About/About";
import Portfolio from "./Screen/Portfolio/Portfolio";
import News from "./Screen/News/News";
import Contact from "./Screen/Contact/Contact";
//
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { darkModeSelector } from "../redux/selector";
import UiSlice from "../slice/UIslice";

function App() {
  const dark = useSelector(darkModeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dark === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const handleDarkModeChange = () => {
    dispatch(UiSlice.actions.darkModeChange());
  };

  return (
    <>
      <Header handleDarkModeChange={handleDarkModeChange} darkMode={dark} />
      <div className="mt-[70px] xl:mt-0 xl:flex xl:justify-center">
        <div className="xl:flex w-[30%]">
          <NavbarDesktop />
        </div>
        <div className="xl:w-[70%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <NavbarMobile />
    </>
  );
}

export default App;
