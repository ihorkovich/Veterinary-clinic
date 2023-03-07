import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import uuid from "react-uuid";
import {
  addDocumentToSubcollection,
  getSpecificDocumentFromCollection,
  updateSpecificDocumentInCollection,
} from "../../../firebaseQueries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../Modal/Modal";

const RequestAnAppointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    surname: "",
    email: "",
    pet_name: "",
    pet_species: "",
    service: "",
    toWhichDoctor: "",
    date: "",
    comment: "",
    ended: false,
  });
  const [inputClass, setInputClass] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name should contain 3 or more letters"),
    surname: yup
      .string()
      .required("Surname is required")
      .min(3, "Surname should contain 3 or more letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Entered value does not match email format")
      .min(11, "Email should contain 11 or more symbols"),
    pet_name: yup
      .string()
      .required("Pet's name is required")
      .min(2, "Pet's name must be at least 2 characters"),
    pet_species: yup
      .string()
      .required("Pet species is required")
      .min(3, "Pet species must be at least 3 characters"),
    service: yup.string().required(),
    toWhichDoctor: yup.string().required("doctor is required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({ ...prevData, [name]: value }));

    if (e.target.value.length >= 1) {
      setInputClass(e.target.classList.add("input-length-more-1"));
    } else {
      setInputClass(e.target.classList.remove("input-length-more-1"));
    }
  };

  let userL = useSelector((state) => state.user);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const userF = await getSpecificDocumentFromCollection("users", userL.id);
      setUser(userF);
    };
    getUser();
  }, []);

  const handleFormSubmit = async () => {
    if (user.made === false) {
      const customID = uuid();
      const { toWhichDoctor, ...appointmentInfo } = appointmentData;
      const data = {
        ...appointmentInfo,
        doctor: toWhichDoctor,
        creation_time: Date.now(),
        id: customID,
      };
      try {
        await addDocumentToSubcollection(
          "doctors",
          toWhichDoctor,
          "appointments",
          customID,
          data
        );
        await updateSpecificDocumentInCollection("users", user.id, {
          made: true,
        });
        setModalActive(true);
        setTitle("You have successfully made an appointment!");
        setButtonLink("/");
        setMessage("You can look at your appointment in your profile");
      } catch (error) {
        setModalActive(true);
        setTitle("Something went wrong");
        setMessage(error.message);
      }
    } else {
      setModalActive(true);
      setTitle("You have already made an appointment");
    }
  };

  return (
    <div className="bg-bgGreen min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center gap-5">
        {userL.id === null ? (
          <div className="flex flex-col justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-4xl font-bold text-secGreen text-center max-w-[590px]">
              Please register to be able to make an appointment to a doctor
            </p>
            <div className="mt-8">
              <Link to="/signup">
                <button className="py-3 px-6 bg-secGreen rounded-sm text-bgGreen font-bold">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        ) : user.made === true ? (
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold text-secGreen text-center max-w-[590px]">
              You have already made an appointment
            </p>
            <div className="mt-8">
              <Link to="/">
                <button className="py-3 px-6 bg-secGreen rounded-sm text-bgGreen font-bold">
                  Go to main
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="pt-[75px] pb-[50px]">
            <p className="text-center text-3xl text-secGreen font-bold">
              Request An Appointment
            </p>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="w-full px-4 flex flex-col gap-3 mt-8 max-w-[400px]"
            >
              <div className="form-field-auth h-[50px]">
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  onChange={handleInputChange}
                  defaultValue={appointmentData.name}
                  className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
                />
                <label className="absolute label-auth text-[17px] w-[74px] bg-bgGreen">
                  Name
                </label>
              </div>
              {errors.name && (
                <p className="text-red-500 text-[12px] -mt-3">
                  {errors.name.message}
                </p>
              )}
              <div className="form-field-auth h-[50px]">
                <input
                  type="text"
                  name="surname"
                  {...register("surname")}
                  onChange={handleInputChange}
                  defaultValue={appointmentData.surname}
                  className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
                />
                <label className="absolute label-auth text-[17px] w-[93px] bg-bgGreen">
                  Surname
                </label>
              </div>
              {errors.surname && (
                <p className="text-red-500 text-[12px] -mt-3">
                  {errors.surname.message}
                </p>
              )}
              <div className="form-field-auth h-[50px]">
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  onChange={handleInputChange}
                  defaultValue={appointmentData.email}
                  className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
                />
                <label className="absolute label-auth text-[17px] w-[68px] bg-bgGreen">
                  Email
                </label>
              </div>
              {errors.email && (
                <p className="text-red-500 text-[12px] -mt-3">
                  {errors.email.message}
                </p>
              )}

              <div className="form-field-auth h-[50px]">
                <input
                  type="text"
                  name="pet_name"
                  {...register("pet_name")}
                  onChange={handleInputChange}
                  defaultValue={appointmentData.pet_name}
                  className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
                />
                <label className="absolute label-auth text-[17px] w-[115px] bg-bgGreen">
                  Pet's Name
                </label>
              </div>
              {errors.pet_name && (
                <p className="text-red-500 text-[12px] -mt-3">
                  {errors.pet_name.message}
                </p>
              )}
              <div className="form-field-auth h-[50px]">
                <input
                  type="text"
                  name="pet_species"
                  {...register("pet_species")}
                  onChange={handleInputChange}
                  defaultValue={appointmentData.pet_species}
                  className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px]`}
                />
                <label className="absolute label-auth text-[17px] w-[118px] bg-bgGreen">
                  Pet Species
                </label>
              </div>
              {errors.pet_species && (
                <p className="text-red-500 text-[12px] -mt-3">
                  {errors.pet_species.message}
                </p>
              )}
              <div className="form-field-auth h-[50px]">
                <select
                  type="text"
                  name="service"
                  {...register("service")}
                  onChange={handleInputChange}
                  defaultValue={appointmentData.service}
                  className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px] bg-bgGreen`}
                >
                  <option value="">Service</option>
                  <option value="surgery">surgery</option>
                  <option value="dermatology">dermatology</option>
                  <option value="rehabilitation">rehabilitation</option>
                  <option value="dentistry">dentistry</option>
                  <option value="vaccination">vaccination</option>
                  <option value="microchipping">microchipping</option>
                  <option value="wellness exams">wellness exams</option>
                </select>
              </div>
              {errors.service && (
                <p className="text-red-500 text-[12px] -mt-3">
                  {errors.service.message}
                </p>
              )}
              <div className="form-field-auth h-[50px]">
                <select
                  type="text"
                  name="toWhichDoctor"
                  {...register("toWhichDoctor")}
                  onChange={handleInputChange}
                  defaultValue={appointmentData.toWhichDoctor}
                  className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px] bg-bgGreen`}
                >
                  <option value="" className="bg-bgGreen">
                    Doctor
                  </option>
                  <option value="amanda">Amanda Bright</option>
                  <option value="anne">Anne Dolkins</option>
                  <option value="milton">Milton Murphey</option>
                  <option value="olivia">Olivia Archer</option>
                  <option value="william">William Lens</option>
                </select>
              </div>
              {errors.toWhichDoctor && (
                <p className="text-red-500 text-[12px] -mt-3">
                  {errors.toWhichDoctor.message}
                </p>
              )}
              <div className="form-field-auth h-[50px]">
                <input
                  type="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleInputChange}
                  defaultValue={appointmentData.date}
                  className={`${inputClass} input-auth text-[#74bb8f] px-[7px] text-[17px] bg-bgGreen`}
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-[12px] -mt-3">
                  {errors.date.message}
                </p>
              )}
              <div className="form-field-auth h-[50px]">
                <input
                  type="text"
                  name="comment"
                  value={appointmentData.comment}
                  onChange={handleInputChange}
                  className={`${inputClass} input-auth text-[#74bb8f] p-[10px] text-[17px] bg-bgGreen`}
                  maxLength={50}
                />
                <label className="absolute label-auth text-[17px] w-[183px] bg-bgGreen">
                  Additional comment
                </label>
              </div>
              <button
                type="submit"
                className=" text-lg mt-8 rounded-sm  w-full py-3 bg-secGreen text-bgGreen flex justify-center items-center font-bold "
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={title}
        message={message}
        button={true}
        linkTo={buttonLink}
        buttonText={"Ok"}
      />
    </div>
  );
};

export default RequestAnAppointment;
