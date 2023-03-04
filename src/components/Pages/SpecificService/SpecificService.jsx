import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { getSpecificDocumentFromCollection } from "../../../firebaseQueries";

const SpecificService = () => {
  const [service, setService] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const service = await getSpecificDocumentFromCollection("services", id);
        setService(service);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container px-4 flex flex-col justify-start items-center gap-3">
        <h1 className="text-3xl text-textGreen">{service.name}</h1>
        <img className="w-[200px] h-[200px] bg-green-400" />
        <p>{service.description}</p>
        <Link to="/request-appointment">
          <button className="border border-blackGreen p-3">
            Make an appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpecificService;
