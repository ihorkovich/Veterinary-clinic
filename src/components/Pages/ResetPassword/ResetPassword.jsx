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
    <div className="bg-bgGreen min-h-screen h-auto flex justify-center items-center">
      <NavBar />
      <div className="min-h-full bg-bgGreen px-4 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-secGreen my-2 text-center">
          Forgot your password?
        </h1>
        <p className="text-center text-gray-500">
          No worries, we'll send you reset instructions
        </p>
        <form
          onSubmit={handleResetPassword}
          className="sign-in-form mt-10 w-full rounded-sm flex flex-col flex-start gap-3 max-w-[400px]"
        >
          <div className="form-field-auth mt-2 h-[50px]">
            <input
              ref={inputRef}
              type="email"
              className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
              onChange={(e) => handleInputChange(e)}
              required
            />
            <label className="absolute label-auth text-[17px] bg-bgGreen w-[64px]">
              Email
            </label>
          </div>
          <button
            type="submit"
            className="rounded-sm text-lg mt-8 border-2 w-full py-3 bg-secGreen text-bgGreen border-secGreen flex justify-center items-center font-bold "
          >
            Reset
          </button>
        </form>
        <p className="text-gray-500 text-md mt-3 text-left">
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
