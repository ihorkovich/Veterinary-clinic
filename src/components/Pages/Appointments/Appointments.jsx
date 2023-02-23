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
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold text-center mt-[140px]">
        APPOINTMENTS
      </h1>
      <div>
        <ul className="w-full px-5 h-auto border-2">
          {appointments.map((appoint) => {
            return (
              <Link to={`/appointments/${appoint.id}`}>
                <li className="w-full border-black border-2">
                  <div className="h-32 text-md font-bold w-full flex justify-between">
                    {appoint.name} requested an appointment. {appoint.pet_name}(
                    {appoint.pet_species}). For when: {appoint.date}
                    <p>
                      Additional comment:{" "}
                      {appoint.comment === ""
                        ? "No additional comments"
                        : appoint.comment}
                    </p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
