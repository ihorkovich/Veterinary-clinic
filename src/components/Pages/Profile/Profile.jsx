import { useSelector } from "react-redux";
import NavBar from "../../Everywhere/NavBar/NavBar";
const Profile = () => {
  const user = useSelector((state) => state.user);
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
    </div>
  );
};

export default Profile;
