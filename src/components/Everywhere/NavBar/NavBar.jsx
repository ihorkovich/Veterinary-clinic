import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "./NavBar.scss";

const NavBar = (props) => {
  const [menuVisibility, setMenuVisibility] = useState(
    "top-[-100%] right-[-100%]"
  );
  const [bgMenuOpacity, setbgMenuOpacity] = useState("h-[0%]");
  const [closeButtonOpacity, setCloseButtonOpacity] = useState("opacity-0");

  const openMenu = () => {
    setMenuVisibility("top-0 right-0 cubic-bezier(.19,.75,.85,.51)");
    setbgMenuOpacity("h-[100%]");
    setTimeout(() => setCloseButtonOpacity("opacity-100"), 600);
  };

  const closeMenu = () => {
    setCloseButtonOpacity("opacity-0");
    setTimeout(() => {
      setMenuVisibility(
        "top-[-100%] right-[-100%] cubic-bezier(.23,.8,.71,.68)"
      );
      setbgMenuOpacity("h-[0%]");
    }, 200);
  };

  return (
    <div
      className={`w-screen ${props.display} top-0 left-0 h-[75px] lg:h-[100px] z-20`}
    >
      <div className="px-4 lg:px-12 flex justify-between items-center h-full">
        <div className="w-auto h-11 flex justify-center align-center z-20">
          <NavLink to="/">
            <img
              src="src/assets/logo/logo.png"
              alt="clerks"
              className="w-auto h-full"
            />
          </NavLink>
        </div>
        <div className="flex gap-8">
          <div className="w-10 h-10 lg:w-12 lg:h-12 border border-[#74bb8f] flex justify-center items-center text-[#74bb8f]">
            <button className="">
              <Link to="/login">Login</Link>
            </button>
          </div>
          <div
            className="w-10 h-10 lg:h-12 lg:w-[6.5rem] burger-menu hover:cursor-pointer lg:flex"
            onClick={openMenu}
          >
            <div className="hidden lg:px-2 lg:bg-bgGreen lg:border lg:border-[#74bb8f] lg:border-r-0 text-[#74bb8f] lg:text-lg lg:flex lg:justify-center lg:items-center">
              Menu
            </div>
            <svg
              className="border border-[#74bb8f] bg-bgGreen lg:border-l-0"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              id="IconChangeColor"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 3.386719 7.164062 L 26.613281 7.164062 L 26.613281 22.40625 L 3.386719 22.40625 Z M 3.386719 7.164062 "
                    clipRule="nonzero"
                    id="mainIconPathAttribute"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#74bb8f"
                  d="M 3.398438 22.40625 L 26.601562 22.40625 L 26.601562 19.867188 L 3.398438 19.867188 Z M 3.398438 16.054688 L 26.601562 16.054688 L 26.601562 13.515625 L 3.398438 13.515625 Z M 3.398438 7.164062 L 3.398438 9.703125 L 26.601562 9.703125 L 26.601562 7.164062 Z M 3.398438 7.164062 "
                  fillOpacity="1"
                  id="mainIconPathAttribute"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div
          className={`z-20 bg-bgGreen fixed ${menuVisibility} h-auto w-[95%] xsm:w-[400px] md:w-[600px] lg:h-auto lg:w-[30%] lg:min-w-[500px] lg:min-h-[55%] duration-[0.6s] border-b-2 border-b-[#74bb8f] border-l-2 border-l-[#74bb8f] `}
        >
          <div className="w-auto h-[70px] lg:h-[100px] px-4 lg:px-12 flex justify-end items-center border-b-2 border-[#74bb8f]">
            <div
              className={`w-10 h-10 lg:w-12 lg:h-12 ${closeButtonOpacity} menu-burger hover:cursor-pointer duration-200 lg:w-[6.5rem] lg:flex`}
              onClick={closeMenu}
            >
              <div className="hidden lg:px-2 lg:bg-bgGreen lg:border lg:border-[#74bb8f] lg:border-r-0 text-[#74bb8f] lg:text-lg lg:flex lg:justify-center lg:items-center">
                Menu
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="IconChangeColor"
                className="border border-[#74bb8f] bg-bgGreen lg:w-12 lg:h-12 lg:border-l-0"
              >
                <path
                  d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                  fill="#74bb8f"
                  id="mainIconPathAttribute"
                ></path>
              </svg>
            </div>
          </div>
          <ul className="font-bold text-[42px] lg:text-[50px] flex flex-col items-start text-[#74bb8f] leading-[50px] scale-y-110 my-14 ml-4 md:ml-7 md:my-16 md:leading-[55px]">
            <li className="hover:text-[#84d4a3] duration-150">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="hover:text-[#84d4a3] duration-150">
              <NavLink to="/services" className="service">
                SERVICES
              </NavLink>
            </li>
            <li className="hover:text-[#84d4a3] duration-150">
              <NavLink to="/doctors">DOCTORS</NavLink>
            </li>
            <li className="hover:text-[#84d4a3] duration-150">
              <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li className="hover:text-[#84d4a3] duration-150">
              <NavLink to="/contacts">CONTACTS</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed bottom-0 right-0 ${bgMenuOpacity} w-[100vw] backdrop-blur-sm duration-300 z-[18]`}
      ></div>
      <Outlet />
    </div>
  );
};

export default NavBar;
