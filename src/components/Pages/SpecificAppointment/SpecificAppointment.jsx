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
    <div className="min-h-screen">
      <NavBar />
      <div className="mt-[100px] border-2 border-red-500 p-10 flex flex-col justify-start items-center gap-4">
        <h1>Detailed information about appointment💖</h1>
        <br />
        <div>Name: {appointment?.name}</div>
        <div>Surname: {appointment?.surname}</div>
        <div>Email: {appointment?.email}</div>
        <div>Appointment was made for: {appointment?.date}</div>
        <div>Pet Name: {appointment?.pet_name}</div>
        <div>Pet Species: {appointment?.pet_species}</div>
        <div>Service: {appointment?.service}</div>
        <div>Comment: {appointment?.comment}</div>
      </div>
    </div>
  );
};

export default SpecificAppointment;
