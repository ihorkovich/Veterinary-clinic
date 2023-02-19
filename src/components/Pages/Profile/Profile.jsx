import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import { auth } from "../../../firebase";
import { resetState } from "../../../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignOut = () => {
    auth.signOut();
    dispatch(resetState());
    navigate("/");
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-start items-center gap-4 ">
        <h1 className="text-3xl text-bold ">Profile page</h1>
        <img className="w-[300px] h-[300px] bg-gray-500" />
        <p>NAME: {user.name} </p>
        <p>SURNAME: {user.surname} </p>
        <p>EMAIL: {user.email}</p>
      </div>
      <div className="flex justify-center">
        <button className="p-3 border-2" onClick={userSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
