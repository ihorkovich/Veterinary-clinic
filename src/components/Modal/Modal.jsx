import { useState } from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";

const Modal = ({
  active,
  setActive,
  title,
  message,
  button,
  linkTo,
  buttonText,
}) => {
  const [closing, setClosing] = useState("");
  const closeModal = () => {
    setClosing("close");
    setTimeout(() => {
      setActive(false);
      setClosing("");
    }, 600);
  };

  return (
    <div
      className={`${
        active ? "" : "hidden"
      } fixed top-0 left-0 flex items-center w-screen h-screen z-50`}
    >
      <Link to={`${linkTo ? linkTo : ""}`} className="hover:cursor-default">
        <div
          className={`${closing} backdrop-blur-sm absolute top-0 left-0 w-screen h-screen modal bg-gray-700 bg-opacity-20`}
          onClick={closeModal}
        ></div>
      </Link>
      <div
        className={`${closing} sm:w-[600px] sm:mx-auto bg-secGreen opacity-85 w-full mx-4 h-auto min-h-[190px] rounded-sm flex flex-col justify-start items-center relative modal`}
      >
        <div className="w-full pt-3 px-3 flex justify-end sm:h-0 sm:absolute">
          <Link to={`${linkTo ? linkTo : ""}`}>
            <div
              className="sm:absolute sm:right-3 sm:top-3 w-10 h-10 border border-bgGreen hover:cursor-pointer rounded-sm"
              onClick={closeModal}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="border border-bgGreen"
              >
                <path
                  d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                  fill="#F7FFEC"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className="my-4 flex flex-col justify-start items-center">
          <p className="text-2xl font-bold text-bgGreen text-center">{title}</p>
          <p className="px-6 text-bgGreen text-center mt-7">{message}</p>
          {button === true ? (
            <Link to={`${linkTo ? linkTo : ""}`} className="mt-8">
              <button
                onClick={closeModal}
                className="text-secGreen rounded-sm w-[78px] h-[40px] bg-bgGreen border-[1.5px] border-bgGreen font-bold"
              >
                {buttonText ? buttonText : ""}
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
