import NavBar from "../../NavBar/NavBar";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
import Modal from "../../Modal/Modal";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [title, setTitle] = useState("");
  const [linkTo, setLinkTo] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [message, setMessage] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const inputRef = useRef();

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setModalActive(true);
        setButtonActive(true);
        setLinkTo("/signin");
        setTitle("Everything went great!");
        setButtonText("Sign In");
        setMessage(
          `We have already sent you a letter with instructions. Please open your mail and follow all the steps indicated there. If the email has not arrived, try again in a few minutes`
        );
        inputRef.current.value = "";
        setEmail("");
      })
      .catch((error) => {
        setModalActive(true);
        setButtonActive(true);
        setButtonText("Ok");
        setTitle("Something went wrong!");
        switch (error.message) {
          case "Firebase: Error (auth/user-not-found).":
            {
              setMessage("It seems that such a user does not exist");
            }
            break;
          case "Firebase: Error (auth/too-many-requests).":
            {
              setMessage("Too many requests, try again later");
            }
            break;
          default: {
            setMessage(`${error.message}`);
          }
        }
      });
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length >= 1) {
      setInputClass(e.target.classList.add("input-length-more-1"));
    } else {
      setInputClass(e.target.classList.remove("input-length-more-1"));
    }
  };

  return (
    <div className="flex h-auto min-h-screen flex-col bg-bgGreen">
      <NavBar />
      <div className="mx-auto flex min-h-full max-w-[400px] flex-col justify-center bg-bgGreen px-4 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:px-0">
        <h1 className="my-2 text-center text-4xl font-bold text-secGreen">
          Forgot your password?
        </h1>
        <p className="text-center text-gray-500">
          No worries, we'll send you reset instructions
        </p>
        <form
          onSubmit={handleResetPassword}
          className="sign-in-form flex-start mt-10 flex w-full flex-col gap-3 rounded-sm"
        >
          <div className="form-field-auth h-[50px]">
            <input
              ref={inputRef}
              type="email"
              className={`${inputClass} input-auth px-[7px] text-[17px] text-[#74bb8f]`}
              onChange={(e) => handleInputChange(e)}
              required
            />
            <label className="label-auth absolute w-[64px] bg-bgGreen text-[17px]">
              Email
            </label>
          </div>
          <button
            type="submit"
            className="flex h-[50px] w-full items-center justify-center rounded-sm border-2 border-secGreen bg-secGreen py-3 text-lg font-bold text-bgGreen "
          >
            Reset
          </button>
        </form>
        <p className="text-md mt-3 text-left text-gray-500">
          Remember your password?{" "}
          <Link to="/signup">
            <button className="underline">Sign In</button>
          </Link>
        </p>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={title}
        message={message}
        button={buttonActive}
        linkTo={linkTo}
        buttonText={"Ok"}
      />
    </div>
  );
};

export default ResetPassword;
