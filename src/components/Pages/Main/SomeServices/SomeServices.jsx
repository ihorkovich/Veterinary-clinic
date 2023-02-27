import "./SomeServices.scss";
import { services } from "./data";
import { Link } from "react-router-dom";

const SomeServices = () => {
  return (
    <div className="flex flex-col bg-[#adc6af] items-center mt-20">
      <h2 className=" font-bold text-3xl text-bgGreen text-center my-8">
        Expert Veterinary Services for Your Pet
      </h2>
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 max-w-[1280px]">
        {services.map((service) => (
          <Link to={`services/${service.name.toLowerCase()}`} key={service.id}>
            <div className="border rounded-sm border-bgGreen text-sm pl-7 pt-7 pr-7 pb-7 sm:h-full">
              <img src={service.icon} className="w-10 h-10" />
              <p className="text-bgGreen mt-4 font-bold text-lg">
                {service.name}
              </p>
              <p className="text-bgGreen mt-3">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center z-10 my-6">
        <Link to="services">
          <button className="services-button text-bgGreen bg-[#adc6af] border border-bgGreen w-[100px] h-[45px]">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SomeServices;
