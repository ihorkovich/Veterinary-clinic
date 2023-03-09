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
    <div className="min-h-screen bg-[#adc6af]">
      <NavBar bg={"#adc6af"} />
      <div className="flex flex-col items-center justify-start gap-3 px-4 md:pb-5 lg:px-12">
        <div className="area relative flex h-56 w-full max-w-[1280px] items-end justify-start overflow-hidden rounded-md border-2 border-[#849a86be] p-10 opacity-50 md:gap-10 md:px-8 lg:px-12">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <p className="text-3xl font-bold text-bgGreen">{service.name}</p>
        </div>
        <div className="mx-auto max-w-[1280px] gap-5 pb-10 md:flex md:items-start md:justify-center md:gap-10 md:px-8 lg:px-12">
          <p className="mt-10 text-justify text-[#516153] md:w-1/2 md:text-lg">
            <span className="text-red-400">◆ </span>
            {service.description}
          </p>
          <div className="mt-10 rounded-md border-2 border-bgGreen md:w-1/2">
            <p className="flex h-20 w-full items-center justify-center bg-bgGreen text-xl font-bold text-[#516153]">
              Pricing
            </p>
            <table className="w-full text-[#516153]">
              <tr className="flex h-16 w-full items-center justify-between border-b border-bgGreen px-8">
                <th>Type of services</th>
                <th>Price</th>
              </tr>
              <tr className="flex h-16 w-full items-center justify-between border-b border-bgGreen px-8">
                <td>First visit</td>
                <td>100$</td>
              </tr>
              <tr className="flex h-16 w-full items-center justify-between border-b border-bgGreen px-8">
                <td>Second visit</td>
                <td>
                  <span className="rounded-sm bg-red-400 p-1 text-white">
                    -10%
                  </span>{" "}
                  90$
                </td>
              </tr>
              <tr className="flex h-16 w-full items-center justify-between border-b border-bgGreen px-8">
                <td>Third visit</td>
                <td>
                  <span className="rounded-sm bg-red-400 p-1 text-white">
                    -30%
                  </span>{" "}
                  70$
                </td>
              </tr>
            </table>
            <Link to={"/request-appointment"}>
              <div className="box-border flex h-20 w-full items-center justify-center rounded-b-md bg-[#adc6af] px-4 py-3 text-xl font-bold text-bgGreen duration-200 hover:rounded-b-sm hover:bg-bgGreen hover:text-[#516153]">
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
