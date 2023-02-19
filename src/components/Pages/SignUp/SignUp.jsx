import { useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/userSlice/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const role = "user";
      await setDoc(doc(db, "users", `${user.user.uid}`), {
        name: name,
        surname: surname,
        email: email,
        role: role,
        banned: false,
        id: user.user.uid,
      });
      dispatch(setUser({ name, surname, email, role }));
      try {
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="surname"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="password" placeholder="repat password" required />

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
