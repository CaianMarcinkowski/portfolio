import { useState, useEffect, useCallback } from "react";
import Navbaritem from "./Navbaritem";
import { FaChevronDown, FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import MobileMenu from "./Mobilemenu";

const TOP_OFFSET = 66;

const Navbar = ({ onChangeHandlers }: {onChangeHandlers:any}) => {
  const [showBackground, setShowBackground] = useState(false);
  const [changeFlag, setChangeFlag] = useState(false);
  const [language, setLanguage] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [icon, setIcon] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { handleThemeChange, handleLanguageChange } = onChangeHandlers;

  const internalHandleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIcon(!icon);
    handleThemeChange(newTheme); // Corrigido aqui para usar handleThemeChange
  };

  const internalHandleLanguageChange = () => {
    const changeLanguage = changeFlag ? true : false
    setChangeFlag(!changeFlag);
    handleLanguageChange(changeLanguage); // Corrigido aqui para usar handleLanguageChange
  };

  const toogleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
                    px-4
                    md:px-16
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-600
                    ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}
                `}
      >
        <img className="h-5 lg:h-7" src="/images/LOGO.png" alt="Logo" />
        <div
          className="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
                justify-between
            "
        >
          <Navbaritem theme={theme} label={changeFlag ? "Sobre" : "About"} />
          <Navbaritem
            theme={theme}
            label={changeFlag ? "Experiências" : "Experiences"}
          />
          <Navbaritem
            theme={theme}
            label={changeFlag ? "Educação" : "Education"}
          />
          <Navbaritem theme={theme} label="Social" />
          <Navbaritem
            theme={theme}
            label={changeFlag ? "Linguas" : "Languages"}
          />
          <Navbaritem theme={theme} label={changeFlag ? "Mais" : "More"} />
        </div>
        <div
          onClick={toogleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <Navbaritem theme={theme} label={changeFlag ? "Opções" : "Options"} />
          <FaChevronDown
            className={`${theme === "light" ? `text-black` : `text-white`} transition ${
              showMobileMenu ? `rotate-180` : `rotate-0`
            }`}
          />
          <MobileMenu
            visible={showMobileMenu}
            options={[
              changeFlag ? "Sobre" : "About",
              changeFlag ? "Experiências" : "Experiences",
              changeFlag ? "Educação" : "Education",
              "Social",
              changeFlag ? "Linguas" : "Languages",
              changeFlag ? "Mais" : "More",
            ]}
            theme={`${theme}`}
          />
        </div>
        <div className="flex ml-auto items-center gap-7 text-gray-200">
          <div className="hover:text-gray-300 cursor-pointer">
            <div
              onClick={internalHandleThemeChange}
              className={`${theme === "light" ? `text-black` : `text-white`}`}
            >
              {icon ? (
                <FaMoon className="w-8 h-8" />
              ) : (
                <IoSunny className="w-8 h-8" />
              )}
            </div>
          </div>
          <div>
            <button onClick={internalHandleLanguageChange} className="w-8 h-8">
              {changeFlag ? (
                <img src="images/brazil-flag.png" alt="Brasil" />
              ) : (
                <img src="images/usa-flag.png" alt="EUA" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
