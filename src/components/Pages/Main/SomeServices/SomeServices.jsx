import "./SomeServices.scss";
import { services } from "./data";
import { Link } from "react-router-dom";

const SomeServices = () => {
  return (
    <div className="flex flex-col bg-[#b5cbb7] items-center py-8">
      <h2 className="px-4 font-bold text-3xl text-bgGreen text-center mb-8">
        Expert Veterinary Services for Your Pet
      </h2>
      <div className="w-[90%] grid grid-cols-2 gap-4 p-4">
        {services.map((service) => (
          <Link to={`services/${service.name.toLowerCase()}`}>
            <div
              key={service.id}
              className="aspect-square border border-bgGreen p-1 text-sm"
            >
              <img src="" alt="" />
              <p className="text-bgGreen">{service.name}</p>
              <p className="text-bgGreen">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center z-10">
        <Link to="services">
          <button className="services-button text-bgGreen bg-[#b5cbb7] border border-bgGreen w-[100px] h-[45px]">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SomeServices;
