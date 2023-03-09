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
      } fixed top-0 left-0 z-50 flex h-screen w-screen items-center`}
    >
      <Link to={`${linkTo ? linkTo : ""}`} className="hover:cursor-default">
        <div
          className={`${closing} modal absolute top-0 left-0 h-screen w-screen bg-gray-700 bg-opacity-20 backdrop-blur-sm`}
          onClick={closeModal}
        ></div>
      </Link>
      <div
        className={`${closing} opacity-85 modal relative mx-4 flex h-auto min-h-[190px] w-full flex-col items-center justify-start rounded-sm bg-secGreen sm:mx-auto sm:w-[600px]`}
      >
        <div className="flex w-full justify-end px-3 pt-3 sm:absolute sm:h-0">
          <Link to={`${linkTo ? linkTo : ""}`}>
            <div
              className="h-10 w-10 rounded-sm border border-bgGreen hover:cursor-pointer sm:absolute sm:right-3 sm:top-3"
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
        <div className="my-4 flex flex-col items-center justify-start">
          <p className="text-center text-2xl font-bold text-bgGreen">{title}</p>
          <p className="mt-7 px-6 text-center text-bgGreen">{message}</p>
          {button === true ? (
            <Link to={`${linkTo ? linkTo : ""}`} className="mt-8">
              <button
                onClick={closeModal}
                className="h-[40px] w-[78px] rounded-sm border-[1.5px] border-bgGreen bg-bgGreen font-bold text-secGreen"
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
