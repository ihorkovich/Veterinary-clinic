import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import uuid from "react-uuid";
import { addDocumentToSubcollection } from "../../../firebaseQueries";

const RequestAnAppointment = () => {
  const user = useSelector((state) => state.user);

  const [appointmentData, setAppointmentData] = useState({
    name: user.name || "",
    surname: user.surname || "",
    email: user.email || "",
    pet_name: "",
    pet_species: "",
    service: "surgery",
    toWhichDoctor: "amanda",
    date: "",
    comment: "",
    ended: false,
  });

  const [appointmentMade, setAppointmentMade] = useState(false);

  useEffect(() => {
    setAppointmentData((prevData) => ({
      ...prevData,
      name: user.name || "",
      surname: user.surname || "",
      email: user.email || "",
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
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
      setAppointmentMade(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex flex-col items-center gap-5 pt-[100px]">
        <p className="text-center text-3xl">Request An Appointment</p>
        {appointmentMade === true ? (
          <div>
            <p>You have successfully created an order to doctor</p>
            <div>
              <Link to="/">
                <button className="border-2 p-3">Return to main</button>
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="w-72">
            <input
              type="text"
              name="name"
              label="First Name"
              defaultValue={appointmentData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="surname"
              label="Last Name"
              defaultValue={appointmentData.surname}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              label="Email"
              defaultValue={appointmentData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="pet_name"
              label="Pet's Name"
              placeholder="pet's name"
              defaultValue={appointmentData.pet_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="pet_species"
              label="Pet Species"
              placeholder="pet species"
              defaultValue={appointmentData.pet_species}
              onChange={handleInputChange}
            />
            <select
              name="service"
              label="What services are you requesting?"
              placeholder="what service"
              defaultValue={appointmentData.service}
              onChange={handleInputChange}
            >
              <option value="surgery">surgery</option>
              <option value="dermatology">dermatology</option>
              <option value="rehabilitation">rehabilitation</option>
              <option value="dentistry">dentistry</option>
              <option value="vaccination">vaccination</option>
              <option value="microchipping">microchipping</option>
              <option value="wellness exams">wellness exams</option>
            </select>
            <select
              placeholder="choose doctor"
              name="toWhichDoctor"
              label="Which doctor would you like to visit?"
              value={appointmentData.toWhichDoctor}
              onChange={handleInputChange}
            >
              <option value="amanda">Amanda Bright</option>
              <option value="anne">Anne Dolkins</option>
              <option value="milton">Milton Murphey</option>
              <option value="olivia">Olivia Archer</option>
              <option value="william">William Lens</option>
            </select>
            <input
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              max={
                new Date(new Date().setDate(new Date().getDate() + 7))
                  .toISOString()
                  .split("T")[0]
              }
              placeholder="choose appointment time"
              value={appointmentData.date}
              onChange={handleInputChange}
            />
            <textarea
              name="comment"
              label="Additional Comments"
              placeholder="Add any additional comments here"
              value={appointmentData.comment}
              onChange={handleInputChange}
            />
            <button className="p-3 border" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequestAnAppointment;
