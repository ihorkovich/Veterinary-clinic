import { useState } from "react";
import NavBar from "../../Everywhere/NavBar/NavBar";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";

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

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(user);
      setRegistered(true);
    } catch (error) {
      console.log(error);
    }
  };

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInEmail,
        signInPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-bgGreen min-h-screen h-auto">
      <NavBar display="block" />
      <div className="min-h-full bg-bgGreen border border-black flex justify-center items-center">
        <form className={`${signUpVisibility}`}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setSignUpEmail(e.target.value);
            }}
          />
          <input type="text" placeholder="name" />
          <input type="text" placeholder="surname" />
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <input type="password" placeholder="repat password" required />

          <button type="submit" className="border-2" onClick={signUp}>
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
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setSignInPassword(e.target.value)}
          />

          <button type="submit" className="border-2" onClick={signIn}>
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
