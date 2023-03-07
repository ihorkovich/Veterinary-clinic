import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import {
  getSpecificDocumentFromCollection,
  addDocumentToSubcollection,
  addDocumentToCollection,
  updateSpecificDocumentInCollection,
} from "../../../firebaseQueries";
import "./SpecificDoctor.scss";
import Modal from "../../Modal/Modal";

const SpecificDoctor = () => {
  let [doctor, setDoctor] = useState({});
  const [modalVisibilty, setModalVisibility] = useState("hidden");
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const { id } = useParams();

  const inputRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        const snap = await getSpecificDocumentFromCollection("doctors", id);
        setDoctor(snap);
      } catch (error) {
        setModalActive(true);
        setTitle("Something went wrong!");
        setMessage(`${error.message}`);
      }
    })();
  }, []);

  const user = useSelector((state) => state.user);

  const sendReview = async (e) => {
    e.preventDefault();
    const userF = await getSpecificDocumentFromCollection("users", user.id);
    if (userF.sent === false) {
      const customID = uuid();
      const doctorName = doctor.name.split(" ")[0].toLowerCase();
      const dataToSet = {
        to: doctorName,
        from: `${user.name} ${user.surname}`,
        text: review,
        id: customID,
        approved: false,
      };
      try {
        await addDocumentToSubcollection(
          "doctors",
          doctorName,
          "reviews",
          customID,
          dataToSet
        );
        await addDocumentToCollection("reviews", customID, dataToSet);
        await updateSpecificDocumentInCollection("users", user.id, {
          sent: true,
        });
        setModalActive(true);
        setTitle("Sent");
        setMessage("You have successfully sent a review");
        inputRef.current.value = "";
        toggleModal();
      } catch (error) {
        setModalActive(true);
        setTitle("Something went wrong!");
        setMessage(`${error.message}`);
      }
      setReview("");
    } else {
      inputRef.current.value = "";
      toggleModal();
      setModalActive(true);
      setTitle("You have already left a review!");
      setMessage(
        "After approval by the administrator, your feedback may appear on the main page of our site."
      );
    }
  };

  const toggleModal = () => {
    if (user.id === null) {
      setModalActive(true);
      setTitle("You are not registered");
      setMessage("To be able to leave feedback please log in or register");
    } else {
      modalVisibilty === "hidden"
        ? setModalVisibility("")
        : setModalVisibility("hidden");
    }
  };

  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <div className="md:border-b-2 md:border-secGreen flex flex-col justify-start gap-6 md:gap-0 max-w-[1280px] mx-auto px-4 lg:px-12 container md:flex md:flex-row-reverse md:justify-center">
        <div className="md:flex md:justify-start md:border-secGreen md:border-l-2 md:border-t-2 md:border-r-2">
          <img
            className="spec-doc-img mx-auto rounded-sm w-full h-[400px] xsm:h-[450px] xsm:w-5/6 sm:h-[450px] object-contain max-w-[380px]"
            src={doctor.image}
          />
        </div>
        <div className="text-textBlack font-bold text-3xl md:flex md:flex-col md:w-1/2 md:p-5 md:justify-end md:items-end md:mb-[17.5px]">
          <p className="text-center md:hidden">
            {doctor.name ? doctor.name : ""}
          </p>
          <p className="hidden md:block md:text-5xl lg:text-6xl">
            {doctor.name ? doctor.name.split(" ")[0] : ""}
          </p>
          <p className="hidden md:block md:text-4xl lg:text-5xl">
            {doctor.name ? doctor.name.split(" ")[1] : ""}
          </p>
          <p className="text-base text-center md:text-left font-normal text-gray-500 mt-2 md:text-xl md:mt-2">
            {doctor.specialization}
          </p>
          <div className="flex justify-center md:justify-start mt-6 md:mt-10">
            <Link to="/request-appointment">
              <button className="p-3 border-2 border-secGreen rounded-sm text-lg text-bgGreen bg-secGreen font-bold max-w-64 hover:text-secGreen hover:bg-bgGreen duration-200">
                Make an appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 md:grid md:grid-cols-2 md:auto-rows-fr md:pb-10 max-w-[1280px] mx-auto">
        <div className="mt-6 px-4 md:w-full">
          <div className="w-full rounded-sm p-5 border-2 border-secGreen">
            <p className="text-center text-2xl md:text-3xl font-bold text-blackGreen">
              About {doctor.name ? doctor.name.split(" ")[0] : ""}
            </p>
            <p className="text-justify text-gray-500 mt-5">
              {doctor.description_1}
            </p>
          </div>
        </div>
        <div className="mt-6 px-4 md:w-full">
          <div className="w-full rounded-sm p-5 border-2 border-secGreen">
            <p className="text-center text-2xl md:text-3xl font-bold text-blackGreen">
              {doctor.name ? doctor.name.split(" ")[0] : ""}'s leisure time
            </p>
            <p className="text-justify text-gray-500 mt-5">
              {doctor.description_2}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 md:mt-0 pb-5 md:pb-10 px-4 max-w-[1280px] mx-auto">
        <button
          className="flex justify-between items-center gap-2 p-3 text-secGreen border-secGreen font-bold border-2 rounded-sm hover:bg-secGreen hover:text-bgGreen duration-200"
          onClick={toggleModal}
        >
          leave a review
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="currentColor"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            {" "}
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              id="mainIconPathAttribute"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              id="mainIconPathAttribute"
            ></path>{" "}
          </svg>
        </button>
      </div>
      <div
        className={`${modalVisibilty} z-20 w-screen h-screen fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center`}
      >
        <div className="w-96 p-4 h-72 border-2 bg-[#90b9a0] rounded-sm border-gray-500 flex flex-col justify-start items-center gap-4">
          <div className="flex justify-end items-center w-full">
            <div className="absolute left-1/2 -translate-x-1/2">
              <h1 className="font-bold text-2xl text-bgGreen">
                Leave a review
              </h1>
            </div>
            <button className="text-bgGreen" onClick={toggleModal}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <form className="flex flex-col w-full" onSubmit={sendReview}>
              <p className="text-blackGreen text-[12px] w-4/5 mx-auto">
                Min 30 characters:
              </p>
              <input
                ref={inputRef}
                type="input"
                className="review-input placeholder:text-bgGreen text-bgGreen py-2 mx-auto w-4/5"
                placeholder="Type here"
                minLength={30}
                onChange={(e) => setReview(e.target.value)}
              />
              <button
                type="submit"
                className="mt-5 w-1/2 mx-auto h-12 rounded-sm font-bold border-2 border-bgGreen text-bgGreen text-lg hover:text-[#90b9a0] hover:bg-bgGreen duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>
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

export default SpecificDoctor;
