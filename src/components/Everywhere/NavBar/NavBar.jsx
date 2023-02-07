import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [menuVisibility, setMenuVisibility] = useState(
    "top-[-100%] right-[-100%]"
  );
  const [bgMenuOpacity, setbgMenuOpacity] = useState("h-[0%]");

  const openMenu = () => {
    setMenuVisibility("top-0 right-0 cubic-bezier(.19,.75,.85,.51)");
    setbgMenuOpacity("h-[100%]");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    setMenuVisibility("top-[-100%] right-[-100%] cubic-bezier(.23,.8,.71,.68)");
    setbgMenuOpacity("h-[0%]");
    document.body.style.overflow = "visible";
  };
  return (
    <div className="w-screen fixed h-[75px] z-[100]">
      <div className="container px-4 flex justify-between items-center h-full">
        <div className="w-10 h-10 flex justify-center align-center">logo</div>
        <div className="w-10 h-10" onClick={openMenu}>
          <img src="src/assets/menu/open-menu.svg" alt="open" />
        </div>
        <div
          className={`z-20 bg-bgGreen fixed ${menuVisibility} h-[60%] w-[90vw] duration-[0.6s] pl-7 border-b-2 border-b-[#C6ABCC] border-l-2 border-l-[#C6ABCC] overflow-hidden`}
        >
          <div className="h-[70px] px-4 flex justify-end items-center">
            <button className="w-10 h-10" onClick={closeMenu}>
              <img src="src/assets/menu/close-menu.svg" alt="close" />
            </button>
          </div>
          <ul className="mt-16 font-bold text-[42px] flex flex-col items-start text-[#C6ABCC] leading-[50px] scale-y-[1.14] scale-x-[1.1]">
            <li>
              <a href="">
                <span>· </span>HOME
              </a>
            </li>
            <li>
              <a href="">
                <span>· </span>SERVICES
              </a>
            </li>
            <li>
              <a href="">
                <span>· </span>LOCATION
              </a>
            </li>
            <li>
              <a href="">
                <span>· </span>HELP CENTER
              </a>
            </li>
            <li>
              <a href="">
                <span>· </span>ABOUT US
              </a>
            </li>
            <li>
              <a href="">
                <span>· </span>CONTACTS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`absolute bottom-0 right-0 ${bgMenuOpacity} w-[100vw] backdrop-blur-sm duration-300 overflow-hidden`}
      ></div>
    </div>
  );
};

export default NavBar;
