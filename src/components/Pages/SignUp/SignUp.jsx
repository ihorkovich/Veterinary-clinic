import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice/userSlice";
import NavBar from "../../NavBar/NavBar";
import { addDocumentToCollection } from "../../../firebaseQueries";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSignUpData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const signUp = async (e) => {
    e.preventDefault();
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
        id: userCredential.user.uid,
      };
      await addDocumentToCollection("users", userCredential.user.uid, userData);
      dispatch(setUser(userData));
      navigate("/profile");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-bgGreen min-h-screen h-auto pt-[200px]">
      <NavBar />
      <div className="min-h-full bg-bgGreen border border-black flex justify-center items-center">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={signUpData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={signUpData.surname}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signUpData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signUpData.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Repeat Password"
            value={signUpData.repeatPassword}
            onChange={handleInputChange}
          />

          <button type="submit" className="border-2" onClick={signUp}>
            Sign Up
          </button>

          <p>
            Already registered?{" "}
            <Link to="/signin">
              <button className="underline">Sign In</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
