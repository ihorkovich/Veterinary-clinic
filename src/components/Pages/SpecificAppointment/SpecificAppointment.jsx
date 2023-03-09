import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { useSelector } from "react-redux";
import { getSpecificDocumentFromSubcollection } from "../../../firebaseQueries";

const SpecificAppointment = () => {
  const [appointment, setAppointment] = useState();
  const { id } = useParams();
  const doctorName = useSelector((state) => state.user.name.toLowerCase());

  useEffect(() => {
    (async () => {
      try {
        console.log(doctorName, id);
        const specAppointment = await getSpecificDocumentFromSubcollection(
          "doctors",
          doctorName,
          "appointments",
          id
        );
        setAppointment(specAppointment);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        {appointment?.name}'s Appointment
      </h2>
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-start justify-start gap-4 rounded-md border-2 border-gray-300 p-4 shadow-lg">
        <div>
          <span className="font-bold text-blackGreen">Name: </span>
          {appointment?.name}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Surname: </span>{" "}
          {appointment?.surname}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Email: </span>{" "}
          {appointment?.email}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Reception time: </span>{" "}
          {appointment?.date}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Pet Name: </span>{" "}
          {appointment?.pet_name}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Pet Species: </span>{" "}
          {appointment?.pet_species}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Service: </span>{" "}
          {appointment?.service}
        </div>
        <div>
          <span className="font-bold text-blackGreen">Comment: </span>{" "}
          {appointment?.comment}
        </div>
      </div>
    </div>
  );
};

export default SpecificAppointment;
