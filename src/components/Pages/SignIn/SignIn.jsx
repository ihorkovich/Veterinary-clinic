import { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice/userSlice";
import { getSpecificDocumentFromCollection } from "../../../firebaseQueries";
import "./SignIn.scss";
import Modal from "../../Modal/Modal";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [inputClass, setInputClass] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSignInData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    if (e.target.value.length >= 1) {
      setInputClass(e.target.classList.add("input-length-more-1"));
    } else {
      setInputClass(e.target.classList.remove("input-length-more-1"));
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        signInData.email,
        signInData.password
      );
      const userDoc = await getSpecificDocumentFromCollection(
        "users",
        userCredential.user.uid
      );
      const id = userDoc.id;
      const email = signInData.email;
      const { name, surname, role } = userDoc;
      dispatch(setUser({ id, name, surname, email, role }));
      navigate("/profile");
    } catch (error) {
      setModalActive(true);
      setTitle("Something went wrong!");
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          {
            setMessage("It seems that such a user does not exist");
          }
          break;
        case "Firebase: Error (auth/wrong-password).":
          {
            setMessage("You have entered an incorrect password");
          }
          break;
        default: {
          setMessage(`${error.message}`);
        }
      }
    }
  };

  return (
    <div className="bg-bgGreen min-h-screen flex justify-center items-center">
      <NavBar display={"block"} />
      <div className="min-h-full bg-bgGreen px-4 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-secGreen my-2 text-center">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500">
          Enter the information you entered while registering
        </p>
        <form
          onSubmit={handleSignIn}
          className="sign-in-form mt-10 w-full rounded-sm flex flex-col flex-start gap-3 max-w-[400px]"
        >
          <div className="form-field-auth h-[50px]">
            <input
              type="email"
              name="email"
              className={`${inputClass} h-[40px] input-auth text-[#74bb8f] px-[7px] text-[17px]`}
              onChange={handleInputChange}
              required
            />
            <label className="absolute label-auth text-[17px] w-[64px] bg-bgGreen">
              Email
            </label>
          </div>
          <div className="form-field-auth mt-2 h-[50px]">
            <input
              type="password"
              name="password"
              className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
              onChange={handleInputChange}
              required
            />
            <label className="absolute label-auth text-[17px] bg-bgGreen w-[95px]">
              Password
            </label>
          </div>
          <Link to="/reset-password">
            <p className="w-32 text-sm underline text-gray-500 text-left hover:cursor-pointer -mt-2">
              Forgot password?
            </p>
          </Link>
          <button
            type="submit"
            className="h-[50px] rounded-sm text-lg mt-4 border-2 w-full py-3 bg-secGreen text-bgGreen border-secGreen flex justify-center items-center font-bold "
          >
            Sign in
          </button>
        </form>
        <p className="text-gray-500 text-md mt-3 text-left">
          Don't have an account?{" "}
          <Link to="/signup">
            <button className="underline">Create</button>
          </Link>
        </p>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={title}
        message={message}
        button={true}
        linkTo={""}
        buttonText={"Ok"}
      />
    </div>
  );
};

export default SignIn;
