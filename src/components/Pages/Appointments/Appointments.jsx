import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import { getAllDocumentsFromSubcollection } from "../../../firebaseQueries";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const name = useSelector((state) => state.user.name.toLowerCase());

  useEffect(() => {
    (async () => {
      try {
        const appointments = await getAllDocumentsFromSubcollection(
          "doctors",
          name,
          "appointments"
        );
        setAppointments(appointments);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div className="bg-bgGreen min-h-screen">
      <NavBar />
      <h2 className="mb-10 text-5xl md:text-7xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none text-secGreen">
        Appointments
      </h2>
      <div>
        <ul className="w-full px-5 h-auto flex flex-col gap-5 max-w-[500px] mx-auto">
          {appointments.map((appoint) => {
            return (
              <li className="w-full border-2 border-gray-300 shadow-lg rounded-md bg-[#f2ffe2de]">
                <div className="h-32 text-md font-bold w-full flex justify-center text-blackGreen items-center gap-5 flex-col">
                  {appoint.name} requested an appointment for: {appoint.date}
                  <Link to={`/appointments/${appoint.id}`}>
                    <button className="px-4 py-2 rounded-md underline">
                      See detailed information {"->"}
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
