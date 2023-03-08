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
      <h2 class="mb-10 text-5xl md:text-7xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none text-secGreen">
        {appointment?.name}'s Appointment
      </h2>
      <div className="w-full border-2 rounded-md border-gray-300 shadow-lg max-w-[500px] mx-auto p-4 flex flex-col justify-start items-start gap-4">
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
