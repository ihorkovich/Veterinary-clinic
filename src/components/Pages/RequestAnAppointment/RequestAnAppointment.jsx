import { useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { doc, setDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

const RequestAnAppointment = () => {
  const user = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [petName, setPetName] = useState("");
  const [petSpecies, setPetSpecies] = useState("");
  const [service, setService] = useState("");
  const [toWhichDoctor, setToWhichDoctor] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const [appointmentMade, setAppointmentMade] = useState(false);

  useEffect(() => {
    setName(user.name);
    setSurname(user.surname);
    setEmail(user.email);
  }, []);

  const appointment = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "doctors", toWhichDoctor);
    const subcollectionRef = collection(docRef, "appointments");
    const newDocRef = doc(subcollectionRef);
    const newDocData = {
      name: name,
      surname: surname,
      email: email,
      pet_name: petName,
      pet_species: petSpecies,
      service: service,
      doctor: toWhichDoctor,
      date: date,
      comment: comment,
      creation_time: Date.now(),
    };
    await setDoc(newDocRef, newDocData);
    setAppointmentMade(true);
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
          <form onSubmit={appointment} className="w-72">
            <input
              type="text"
              label="First Name"
              defaultValue={user.name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              label="Last Name"
              defaultValue={user.surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="email"
              label="Email"
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              label="Pet's Name"
              placeholder="pet's name"
              onChange={(e) => setPetName(e.target.value)}
            />
            <input
              type="text"
              label="Pet Species"
              placeholder="pet species"
              onChange={(e) => setPetSpecies(e.target.value)}
            />
            <select
              label="What services are you requesting?"
              placeholder="what service"
              onChange={(e) => setService(e.target.value)}
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
              label="To which doctor?"
              placeholder="choose doctor"
              onChange={(e) => setToWhichDoctor(e.target.value)}
            >
              <option value="amanda">Amanda Bright</option>
              <option value="anne">Anne Dolkins</option>
              <option value="milton">Milton Murphey</option>
              <option value="olivia">Olivia Archer</option>
              <option value="william">William Lens</option>
            </select>
            <input
              type="date"
              className="m-5"
              min={`${new Date().getFullYear()}-
              ${new Date().getMonth() + 1}-
              ${new Date().getDay()}`}
              placeholder="choose appointment time"
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              label="Additional Comment"
              placeholder="additional comment (optional)"
              onChange={(e) => setComment(e.target.value)}
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
