import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice/userSlice";
import NavBar from "../../NavBar/NavBar";
import { addDocumentToCollection } from "../../../firebaseQueries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../Modal/Modal";

const SignUp = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name should contain 3 or more letters"),
    surname: yup
      .string()
      .required("Surname is required")
      .min(3, "Surname should contain 3 or more letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Entered value does not match email format")
      .min(11, "Email should contain 11 or more symbols"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    repeatPassword: yup
      .string()
      .required("Repeat password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const [inputClass, setInputClass] = useState("");
  const [signUpData, setSignUpData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputChange = (e) => {
    setSignUpData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

    if (e.target.value.length >= 1) {
      setInputClass(e.target.classList.add("input-length-more-1"));
    } else {
      setInputClass(e.target.classList.remove("input-length-more-1"));
    }
  };

  const signUp = async () => {
    const { name, surname, email, password } = signUpData;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const role = "user";
      const userData = {
        name,
        surname,
        email,
        role,
        banned: false,
        sent: false,
        made: false,
        id: userCredential.user.uid,
      };
      await addDocumentToCollection("users", userCredential.user.uid, userData);
      dispatch(setUser(userData));
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
        default: {
          setMessage(`${error.message}`);
        }
      }
    }
  };

  return (
    <div className="bg-bgGreen min-h-screen">
      <NavBar />
      <div className="bg-bgGreen mx-auto max-w-[1280px] flex flex-col justify-center pb-5">
        <p className="text-4xl font-bold text-secGreen px-4 text-center">
          Create an account
        </p>
        <p className="px-4 text-gray-500 text-center mt-2">
          Sign up to be able to make an appointments
        </p>
        <form
          onSubmit={handleSubmit(signUp)}
          className="w-full px-4 flex flex-col gap-3 mt-8 mx-auto max-w-[400px]"
        >
          <div className="form-field-auth h-[50px]">
            <input
              type="text"
              name="name"
              {...register("name")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
            />
            <label className="absolute label-auth text-[17px] w-[68px] bg-bgGreen">
              Name
            </label>
          </div>
          {errors.name && (
            <p className="text-red-500 text-[12px] -mt-3">
              {errors.name.message}
            </p>
          )}
          <div className="form-field-auth h-[50px]">
            <input
              type="text"
              name="surname"
              {...register("surname")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
            />
            <label className="absolute label-auth text-[17px] w-[92px] bg-bgGreen">
              Surname
            </label>
          </div>
          {errors.surname && (
            <p className="text-red-500 text-[12px] -mt-3">
              {errors.surname.message}
            </p>
          )}
          <div className="form-field-auth h-[50px]">
            <input
              type="email"
              name="email"
              {...register("email")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
            />
            <label className="absolute label-auth text-[17px] w-[66px] bg-bgGreen">
              Email
            </label>
          </div>
          {errors.email && (
            <p className="text-red-500 text-[12px] -mt-3">
              {errors.email.message}
            </p>
          )}
          <div className="form-field-auth h-[50px]">
            <input
              type="password"
              name="password"
              {...register("password")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
            />
            <label className="absolute label-auth text-[17px] w-[98px] bg-bgGreen">
              Password
            </label>
          </div>
          {errors.password && (
            <p className="text-red-500 text-[12px] -mt-3">
              {errors.password.message}
            </p>
          )}
          <div className="form-field-auth h-[50px]">
            <input
              type="password"
              name="repeatPassword"
              {...register("repeatPassword")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
            />
            <label className="absolute label-auth text-[17px] w-[158px] bg-bgGreen">
              Repeat password
            </label>
          </div>
          {errors.repeatPassword && (
            <p className="text-red-500 text-[12px] -mt-3">
              {errors.repeatPassword.message}
            </p>
          )}
          <button
            type="submit"
            className=" text-lg mt-8 rounded-sm  w-full py-3 bg-secGreen text-bgGreen flex justify-center items-center font-bold "
          >
            Sign up
          </button>
          <p className="text-gray-500">
            Already registered?{" "}
            <Link to="/signin">
              <button className="underline">Sign In</button>
            </Link>
          </p>
        </form>
        <Modal
          active={modalActive}
          setActive={setModalActive}
          title={title}
          message={message}
          button={true}
          linkTo={null}
          buttonText={"Ok"}
        />
      </div>
    </div>
  );
};

export default SignUp;
