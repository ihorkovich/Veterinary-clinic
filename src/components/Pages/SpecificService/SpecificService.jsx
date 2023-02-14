import { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from "../../Everywhere/NavBar/NavBar";
import { db } from "../../../firebase";
import { getDoc, doc } from "@firebase/firestore";

const SpecificService = () => {
  const [service, setService] = useState({});
  const { id } = useParams();

  const getDocument = async (coll, id) => {
    const snap = await getDoc(doc(db, coll, id));
    setService(snap.data());
  };

  useEffect(() => {
    getDocument("services", id);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container px-4 flex flex-col justify-start items-center gap-3">
        <h1 className="text-3xl text-textGreen ">{service.name}</h1>
        <img className="w-[200px] h-[200px] bg-green-400" />
        <p>{service.description}</p>
        <button className="border border-blackGreen p-3">
          Make an appointment
        </button>
      </div>
    </div>
  );
};

export default SpecificService;
