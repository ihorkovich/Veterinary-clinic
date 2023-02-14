import { useState, useEffect } from "react";
import NavBar from "../../Everywhere/NavBar/NavBar";
import { useParams } from "react-router";
import { db } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";

const SpecificDoctor = () => {
  let [doctor, setDoctor] = useState({});
  const { id } = useParams();

  const getDocument = async (coll, id) => {
    const snap = await getDoc(doc(db, coll, id));
    setDoctor(snap.data());
  };

  useEffect(() => {
    getDocument("doctors", id);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container px-4 flex flex-col justify-start items-center gap-4">
        <img className="w-[200px] h-[200px] bg-green-300" src={doctor.image} />
        <p>{doctor.name}</p> <br />
        <p>{doctor.experience}</p> <br />
        <p>{doctor.description}</p>
      </div>
    </div>
  );
};

export default SpecificDoctor;
