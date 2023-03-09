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
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <div className="mx-auto flex min-h-full max-w-[400px] flex-col justify-center bg-bgGreen px-4">
        <h1 className="my-2 text-center text-4xl font-bold text-secGreen">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500">
          Enter the information you entered while registering
        </p>
        <form
          onSubmit={handleSignIn}
          className="sign-in-form flex-start mt-10 flex w-full flex-col gap-3 rounded-sm"
        >
          <div className="form-field-auth h-[50px]">
            <input
              type="email"
              name="email"
              className={`${inputClass} input-auth h-[40px] px-[7px] text-[17px] text-[#74bb8f]`}
              onChange={handleInputChange}
              required
            />
            <label className="label-auth absolute w-[64px] bg-bgGreen text-[17px]">
              Email
            </label>
          </div>
          <div className="form-field-auth mt-2 h-[50px]">
            <input
              type="password"
              name="password"
              className={`${inputClass} input-auth px-[7px] text-[17px] text-[#74bb8f]`}
              onChange={handleInputChange}
              required
            />
            <label className="label-auth absolute w-[95px] bg-bgGreen text-[17px]">
              Password
            </label>
          </div>
          <Link to="/reset-password">
            <p className="-mt-2 w-32 text-left text-sm text-gray-500 underline hover:cursor-pointer">
              Forgot password?
            </p>
          </Link>
          <button
            type="submit"
            className="mt-4 flex h-[50px] w-full items-center justify-center rounded-sm border-2 border-secGreen bg-secGreen py-3 text-lg font-bold text-bgGreen "
          >
            Sign in
          </button>
        </form>
        <p className="text-md mt-3 text-left text-gray-500">
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
