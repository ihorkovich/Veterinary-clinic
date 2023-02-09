import Footer from "../Everywhere/Footer/Footer";
import { useState } from "react";

import NavBar from "../Everywhere/NavBar/NavBar";
import Input from "../Everywhere/Input/Input";

const Login = () => {
  const [signInVisibility, setSignInVisibility] = useState("hidden");
  const [signUpVisibility, setSignUpVisibility] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    setSignUpVisibility("hidden");
    setSignInVisibility("");
  };

  const signInHandler = (e) => {
    e.preventDefault();
    setSignInVisibility("hidden");
    setSignUpVisibility("");
  };

  return (
    <div className="bg-bgGreen min-h-screen h-auto">
      <NavBar display="block" />
      <div className="min-h-full bg-bgGreen border border-black flex justify-center items-center">
        <form className={`${signUpVisibility}`}>
          <Input type="email" label="Email" />
          <Input type="text" label="name" />
          <Input type="text" label="surname" />
          <Input type="pass" label="password" required />
          <Input type="pass" label="repat password" required />

          <button type="submit" className="border-2">
            Sign Up
          </button>

          <p>
            Already registered?{" "}
            <button className="underline" onClick={signUpHandler}>
              Sign In
            </button>
          </p>
        </form>

        <form className={`${signInVisibility}`}>
          <Input type="email" label="Email" required />
          <Input type="pass" label="Password" required />

          <button type="submit" className="border-2">
            Sign in(увійти)
          </button>

          <p>
            Dont have an account?{" "}
            <button className="underline" onClick={signInHandler}>
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
