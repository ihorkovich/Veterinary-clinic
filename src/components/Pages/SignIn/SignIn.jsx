import { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice/userSlice";
import { getSpecificDocumentFromCollection } from "../../../firebaseQueries";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDoc = await getSpecificDocumentFromCollection(
        "users",
        userCredential.user.uid
      );
      const { name, surname, role } = userDoc;
      dispatch(setUser({ name, surname, email, role }));
      navigate("/profile");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-bgGreen min-h-screen h-auto pt-[200px]">
      <NavBar />
      <div className="min-h-full bg-bgGreen border border-black flex justify-center items-center">
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="border-2">
            Sign in(увійти)
          </button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <button className="underline">Register</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
