import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import { auth } from "../../../firebase";
import { resetState } from "../../../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import {
  deleteSpecificDocumentFromSubcollection,
  getSpecificDocumentFromCollection,
  getSpecificDocumentFromSubcollection,
  updateSpecificDocumentInCollection,
} from "../../../firebaseQueries";
import Modal from "../../Modal/Modal";

const Profile = () => {
  const [user, setUser] = useState({});
  const [userAppointment, setUserAppointment] = useState({});
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const userId = useSelector((state) => state.user.id);
  const whoUse = useSelector((state) => state.user.role);
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
      const userVisit = await getSpecificDocumentFromSubcollection(
        "users",
        userId,
        "appointment",
        "main"
      );
      setUser(userData);
      setUserAppointment(userVisit);
    };
    getUserData();
  }, []);

  const cancelAppointment = async () => {
    try {
      await deleteSpecificDocumentFromSubcollection(
        "users",
        userId,
        "appointment",
        "main"
      );
      await deleteSpecificDocumentFromSubcollection(
        "doctors",
        userAppointment.doctor,
        "appointments",
        userAppointment.id
      );
      await updateSpecificDocumentInCollection("users", userId, {
        made: false,
      });
      setUserAppointment(undefined);
      setModalActive(true);
      setTitle("Successful");
      setMessage("You have succesfully cancelled your appointment");
    } catch (error) {
      setModalActive(true);
      setTitle("Something went wrong!");
      setMessage(`${error.message}`);
    }
  };
  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 className="font-heading tracking-px-n mb-5 text-center text-3xl font-bold leading-none text-secGreen md:text-4xl xl:text-5xl">
        Profile
      </h2>
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-center gap-4 px-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-md opacity-95"
            src="/assets/profile/ducks.jpg"
          />
        </div>
        {whoUse === "user" ? (
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
        ) : (
          ""
        )}
      </div>
      {user.role === "user" && userAppointment !== undefined ? (
        <div className="mx-auto mt-10 text-blackGreen">
          <h2 className="font-heading tracking-px-n mb-5 text-center text-3xl font-bold leading-none text-secGreen md:text-4xl xl:text-5xl">
            Appointment
          </h2>
          <div className="mx-auto flex w-full max-w-[400px] flex-col items-center justify-center gap-3 border-2 border-secGreen p-4 text-lg">
            <p>
              <span className="font-bold">To: </span>
              {userAppointment.doctor
                ? `${userAppointment.doctor[0].toUpperCase()}${userAppointment.doctor.slice(
                    1
                  )}`
                : ""}
            </p>
            <p>
              <span className="font-bold">Reception time: </span>
              {userAppointment.date ? userAppointment.date : ""}
            </p>
            <button
              className="rounded-sm p-2 font-bold text-secGreen duration-200 hover:bg-secGreen hover:text-bgGreen"
              onClick={cancelAppointment}
            >
              Cancel appointment
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="mx-auto mt-10 flex w-full max-w-[1280px] justify-center px-4 pb-5">
        <button
          className="rounded-sm border-2 border-secGreen px-6 py-3 font-bold text-secGreen duration-200 hover:bg-secGreen hover:text-bgGreen"
          onClick={userSignOut}
        >
          Sign Out
        </button>
      </div>
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
  );
};

export default Profile;
