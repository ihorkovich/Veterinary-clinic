import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import "./NavBar.scss";

const NavBar = ({ bg }) => {
  const [menuVisibility, setMenuVisibility] = useState(
    "top-[-100%] right-[-100%]"
  );
  const [bgMenuOpacity, setbgMenuOpacity] = useState("h-[0%]");
  const [closeButtonOpacity, setCloseButtonOpacity] = useState("opacity-0");

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  const [goUp, setGoUp] = useState("hidden");
  useEffect(() => {
    inView === true ? setGoUp("hidden") : setGoUp("visible");
  }, [inView]);

  const role = useSelector((state) => state.user.role);

  return (
    <div
      ref={ref}
      className={`w-screen px-0 lg:px-12 h-[75px] lg:h-[90px] z-20 ${
        bg === "#adc6af" ? "bg-[#adc6af]" : "bg-bgGreen"
      }`}
    >
      <div className="px-4 lg:px-0 flex justify-between items-center h-full">
        <div className="w-auto h-11 flex justify-center align-center">
          <Link to={"/"}>
            <img src="/assets/logo/logo.png" className="w-auto h-full" />
          </Link>
        </div>
        <div className="flex gap-8">
          <div className="profile z-10 w-10 h-10 lg:w-12 lg:h-12 border border-secGreen flex justify-center items-center text-secGreen">
            <Link
              to={role != null ? "/profile" : "/signup"}
              className="w-full h-full flex justify-center items-center bg-bgGreen"
            >
              <button className="text-sm lg:text-lg">
                {role != null ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bg-bgGreen w-full h-full"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      fill="#74bb8f"
                    ></path>{" "}
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bg-bgGreen w-[78%] h-[78%]"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                      fill="#74bb8f"
                    ></path>{" "}
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      fill="#74bb8f"
                    ></path>{" "}
                  </svg>
                )}
              </button>
            </Link>
          </div>
          <div
            className="z-20 w-10 h-10 lg:h-12 lg:w-[6.5rem] burger-menu hover:cursor-pointer lg:flex"
            onClick={openMenu}
          >
            <div className="hidden lg:px-2 lg:bg-bgGreen lg:border lg:border-secGreen lg:border-r-0 text-secGreen lg:text-lg lg:flex lg:justify-center lg:items-center">
              Menu
            </div>
            <svg
              className="border border-secGreen bg-bgGreen lg:border-l-0"
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
          className={`z-20 bg-bgGreen fixed ${menuVisibility} h-auto w-[95%] xsm:w-[400px] md:w-[600px] lg:h-auto lg:min-w-[500px] lg:w-[auto] lg:min-h-[55%] duration-[0.6s] border-b-2 border-b-secGreen border-l-2 border-l-secGreen `}
        >
          <div className="w-auto h-[70px] lg:h-[90px] px-4 lg:px-12 flex justify-end items-center border-b-2 border-secGreen">
            <div
              className={`w-10 h-10 lg:w-12 lg:h-12 ${closeButtonOpacity} menu-burger hover:cursor-pointer duration-200 lg:w-[6.5rem] lg:flex`}
              onClick={closeMenu}
            >
              <div className="hidden lg:px-2 lg:bg-bgGreen lg:border lg:border-secGreen lg:border-r-0 text-secGreen lg:text-lg lg:flex lg:justify-center lg:items-center">
                Menu
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="IconChangeColor"
                className="border border-secGreen bg-bgGreen lg:w-12 lg:h-12 lg:border-l-0"
              >
                <path
                  d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                  fill="#74bb8f"
                  id="mainIconPathAttribute"
                ></path>
              </svg>
            </div>
          </div>
          {role === "admin" ? (
            <ul className="font-bold text-[42px] lg:text-[50px] flex flex-col items-start text-secGreen leading-[50px] scale-y-110 my-14 ml-4 md:mx-7 md:my-16 md:leading-[55px]">
              <li className="hover:text-[#84d4a3] duration-150">
                <NavLink to="/user-list">USER LIST</NavLink>
              </li>
              <li className="hover:text-[#84d4a3] duration-150">
                <NavLink to="/banned-users">BANNED USERS</NavLink>
              </li>
              <li className="hover:text-[#84d4a3] duration-150">
                <NavLink to="/pending-reviews">PENDING REVIEWS</NavLink>
              </li>
            </ul>
          ) : role === "doctor" ? (
            <ul className="font-bold text-[42px] lg:text-[50px] pr-4 flex flex-col items-start text-secGreen leading-[50px] scale-y-110 my-14 ml-4 md:ml-7 md:my-16 md:leading-[55px]">
              <li className="hover:text-[#84d4a3] duration-150 w-full whitespace-normal">
                <NavLink to="/appointments">
                  APPOINT<span className="xsm:hidden">-</span>MENTS
                </NavLink>
              </li>
              <li className="hover:text-[#84d4a3] duration-150">
                <NavLink to="/reviews">REVIEWS</NavLink>
              </li>
            </ul>
          ) : (
            <ul className="font-bold text-[42px] lg:text-[50px] flex flex-col items-start text-secGreen leading-[50px] scale-y-110 my-14 ml-4 md:ml-7 md:my-16 md:leading-[55px]">
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
          )}
        </div>
      </div>
      <div
        className={`fixed bottom-0 right-0 ${bgMenuOpacity} w-[100vw] backdrop-blur-sm duration-300 z-[18]`}
        onClick={closeMenu}
      ></div>
      <div
        onClick={handleClick}
        className={`${goUp} fixed arrow-up w-10 h-10 z-[15] right-7 bottom-7 lg:bottom-10 lg:right-10`}
      >
        <div className="bg-bgGreen w-10 h-10 z-[100] border border-secGreen">
          <svg
            fill="#74bb8f"
            width="40px"
            height="40px"
            viewBox="-480 -480 2880.00 2880.00"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 z-10"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path
                d="M960.406 0 345 615.176l81.364 81.366L902.83 220.075V1920h114.922V220.075l476.466 476.467 81.366-81.366z"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
