import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const name = useSelector((state) => state.user.name.toLowerCase());
  const getAppointments = async () => {
    try {
      const docRef = doc(db, "doctors", name);
      const subcollectionRef = collection(docRef, "appointments");
      const docsSnap = await getDocs(subcollectionRef);
      docsSnap.forEach((doc) => {
        setAppointments((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAppointments();
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
              <li className="w-full">
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
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
