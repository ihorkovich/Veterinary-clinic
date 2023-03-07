import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import { auth } from "../../../firebase";
import { resetState } from "../../../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { getSpecificDocumentFromCollection } from "../../../firebaseQueries";

const Profile = () => {
  const [user, setUser] = useState({});
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignOut = () => {
    auth.signOut();
    dispatch(resetState());
    navigate("/");
  };

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getSpecificDocumentFromCollection("users", userId);
      setUser(userData);
    };
    getUserData();
  }, []);

  console.log(user);
  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 className="mb-5 text-3xl md:text-4xl xl:text-5xl text-center font-bold font-heading tracking-px-n leading-none text-secGreen">
        Profile
      </h2>
      <div className="flex flex-col justify-start items-start md:flex-row px-4 gap-4 max-w-[1280px] mx-auto">
        <div className="w-full md:w-1/2">
          <img
            className="rounded-md w-full opacity-95"
            src="/assets/profile/ducks.jpg"
          />
        </div>
        <div className="md:flex md:flex-col md:justify-between md:gap-5">
          <p className="text-xl font-bold">
            Name:{" "}
            <span className="font-thin text-secGreen">
              {user.name ? user.name : ""}
            </span>{" "}
          </p>
          <p className="text-xl font-bold">
            Surname:{" "}
            <span className="font-thin text-secGreen">
              {user.surname ? user.surname : ""}
            </span>
          </p>
          <p className="text-xl font-bold">
            Email:{" "}
            <span className="font-thin text-secGreen">
              {user.email ? user.email : ""}
            </span>{" "}
          </p>
          <p className="text-xl font-bold">
            Have you made an appointment:{" "}
            <span className="font-thin text-secGreen">
              {user.made === false ? "No" : "Yes"}
            </span>{" "}
          </p>
          <p className="text-xl font-bold">
            Have you left a review:{" "}
            <span className="font-thin text-secGreen">
              {user.sent === false ? "No" : "Yes"}
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="w-full mt-10 max-w-[1280px] px-4 flex justify-center mx-auto pb-5">
        <button
          className="rounded-sm text-secGreen border-2 border-secGreen font-bold hover:text-bgGreen hover:bg-secGreen duration-200 px-6 py-3"
          onClick={userSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
