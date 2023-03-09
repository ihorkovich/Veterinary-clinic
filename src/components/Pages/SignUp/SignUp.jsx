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
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <div className="mx-auto flex max-w-[1280px] flex-col justify-center bg-bgGreen pb-5">
        <p className="px-4 text-center text-4xl font-bold text-secGreen">
          Create an account
        </p>
        <p className="mt-2 px-4 text-center text-gray-500">
          Sign up to be able to make an appointments
        </p>
        <form
          onSubmit={handleSubmit(signUp)}
          className="mx-auto mt-8 flex w-full max-w-[400px] flex-col gap-3 px-4"
        >
          <div className="form-field-auth h-[50px]">
            <input
              type="text"
              name="name"
              {...register("name")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth px-[7px] text-[17px] text-[#74bb8f]`}
            />
            <label className="label-auth absolute w-[68px] bg-bgGreen text-[17px]">
              Name
            </label>
          </div>
          {errors.name && (
            <p className="-mt-3 text-[12px] text-red-500">
              {errors.name.message}
            </p>
          )}
          <div className="form-field-auth h-[50px]">
            <input
              type="text"
              name="surname"
              {...register("surname")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth px-[7px] text-[17px] text-[#74bb8f]`}
            />
            <label className="label-auth absolute w-[92px] bg-bgGreen text-[17px]">
              Surname
            </label>
          </div>
          {errors.surname && (
            <p className="-mt-3 text-[12px] text-red-500">
              {errors.surname.message}
            </p>
          )}
          <div className="form-field-auth h-[50px]">
            <input
              type="email"
              name="email"
              {...register("email")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth px-[7px] text-[17px] text-[#74bb8f]`}
            />
            <label className="label-auth absolute w-[66px] bg-bgGreen text-[17px]">
              Email
            </label>
          </div>
          {errors.email && (
            <p className="-mt-3 text-[12px] text-red-500">
              {errors.email.message}
            </p>
          )}
          <div className="form-field-auth h-[50px]">
            <input
              type="password"
              name="password"
              {...register("password")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth px-[7px] text-[17px] text-[#74bb8f]`}
            />
            <label className="label-auth absolute w-[98px] bg-bgGreen text-[17px]">
              Password
            </label>
          </div>
          {errors.password && (
            <p className="-mt-3 text-[12px] text-red-500">
              {errors.password.message}
            </p>
          )}
          <div className="form-field-auth h-[50px]">
            <input
              type="password"
              name="repeatPassword"
              {...register("repeatPassword")}
              onChange={handleInputChange}
              className={`${inputClass} input-auth px-[7px] text-[17px] text-[#74bb8f]`}
            />
            <label className="label-auth absolute w-[158px] bg-bgGreen text-[17px]">
              Repeat password
            </label>
          </div>
          {errors.repeatPassword && (
            <p className="-mt-3 text-[12px] text-red-500">
              {errors.repeatPassword.message}
            </p>
          )}
          <button
            type="submit"
            className=" mt-8 flex w-full  items-center justify-center rounded-sm bg-secGreen py-3 text-lg font-bold text-bgGreen "
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
