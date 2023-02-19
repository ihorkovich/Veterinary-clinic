import { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice/userSlice";
import { db } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const snap = await getDoc(doc(db, "users", `${user.user.uid}`));
      const { name, surname, role } = snap.data();
      try {
        dispatch(setUser({ name, surname, email, role }));
      } catch (error) {
        alert(error);
      }
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
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="border-2" onClick={signIn}>
            Sign in(увійти)
          </button>

          <p>
            Dont have an account?{" "}
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
