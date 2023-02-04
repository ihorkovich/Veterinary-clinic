import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [menuBars, setMenuBars] = useState("");
  const [menuVisibility, setMenuVisibility] = useState("right-[-100%]");

  const menuHandler = () => {
    menuBars == "" ? setMenuBars("opened") : setMenuBars("");
    menuVisibility == "right-[-100%]"
      ? setMenuVisibility("right-0")
      : setMenuVisibility("right-[-100%]");
  };

  return (
    <div className="container px-4 flex justify-between items-center h-[70px]">
      <div className="w-10 h-10 bg-green-500">logo</div>
      <div className="toggle-menu w-10 h-10 z-50" onClick={menuHandler}>
        <span className={`bar-top ${menuBars}`}></span>
        <span className={`bar-middle ${menuBars}`}></span>
        <span className={`bar-bottom ${menuBars}`}></span>
      </div>
      <div
        className={`${menuVisibility} z-40 bg-bgGreen fixed top-0 hover:top-0 w-full h-full pt-[70px] ease-in-out duration-[0.4s] flex flex-col justify-between items-center`}
      >
        <ul className="font-bold text-3xl flex flex-col gap-5 justify-start items-center text-textGreen ">
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Locations</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
          <li>
            <a href="">Help Center</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
