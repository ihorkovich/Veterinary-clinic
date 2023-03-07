import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { getSpecificDocumentFromCollection } from "../../../firebaseQueries";
import "./SpecificService.scss";
import Modal from "../../Modal/Modal";

const SpecificService = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [service, setService] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const service = await getSpecificDocumentFromCollection("services", id);
        setService(service);
      } catch (error) {
        setModalActive(true);
        setTitle("Something went wrong!");
        setMessage(`${error.message}`);
      }
    })();
  }, []);

  return (
    <div className="bg-[#adc6af] min-h-screen">
      <NavBar bg={"#adc6af"} />
      <div className="px-4 flex flex-col justify-start items-center gap-3 md:pb-5 lg:px-12">
        <div className="relative overflow-hidden area max-w-[1280px] w-full h-56 rounded-md opacity-50 border-2 border-[#849a86be] flex justify-start items-end p-10 md:gap-10 md:px-8 lg:px-12">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <p className="text-3xl text-bgGreen font-bold">{service.name}</p>
        </div>
        <div className="md:flex md:justify-center md:items-start gap-5 md:gap-10 md:px-8 lg:px-12 mx-auto max-w-[1280px] pb-10">
          <p className="text-[#516153] text-justify md:w-1/2 md:text-lg mt-10">
            <span className="text-red-400">◆ </span>
            {service.description}
          </p>
          <div className="mt-10 md:w-1/2 rounded-md border-2 border-bgGreen">
            <p className="w-full h-20 bg-bgGreen text-[#516153] flex justify-center items-center font-bold text-xl">
              Pricing
            </p>
            <table className="w-full text-[#516153]">
              <tr className="w-full h-16 flex justify-between items-center px-8 border-b border-bgGreen">
                <th>Type of services</th>
                <th>Price</th>
              </tr>
              <tr className="w-full h-16 flex justify-between items-center px-8 border-b border-bgGreen">
                <td>First visit</td>
                <td>100$</td>
              </tr>
              <tr className="w-full h-16 flex justify-between items-center px-8 border-b border-bgGreen">
                <td>Second visit</td>
                <td>
                  <span className="bg-red-400 p-1 text-white rounded-sm">
                    -10%
                  </span>{" "}
                  90$
                </td>
              </tr>
              <tr className="w-full h-16 flex justify-between items-center px-8 border-b border-bgGreen">
                <td>Third visit</td>
                <td>
                  <span className="bg-red-400 p-1 text-white rounded-sm">
                    -30%
                  </span>{" "}
                  70$
                </td>
              </tr>
            </table>
            <Link to={"/request-appointment"}>
              <div className="flex justify-center text-xl items-center box-border w-full h-20 rounded-b-md bg-[#adc6af] text-bgGreen font-bold px-4 py-3 hover:text-[#516153] hover:rounded-b-sm hover:bg-bgGreen duration-200">
                Make an appointment
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={title}
        message={message}
        button={true}
        linkTo={null}
        buttonText={"Ok"}
      />
    </div>
  );
};

export default SpecificService;
