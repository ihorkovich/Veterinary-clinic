import "./SomeServices.scss";
import { services } from "./data";
import { Link } from "react-router-dom";

const SomeServices = () => {
  return (
    <div className="mt-20 flex flex-col items-center bg-[#adc6af]">
      <h2 className=" my-8 text-center text-3xl font-bold text-bgGreen">
        Expert Veterinary Services for Your Pet
      </h2>
      <div className="grid max-w-[1280px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        {services.map((service) => (
          <Link to={`services/${service.name.toLowerCase()}`} key={service.id}>
            <div className="rounded-sm border border-bgGreen pl-7 pt-7 pr-7 pb-7 text-sm sm:h-full">
              <img src={service.icon} className="h-10 w-10" />
              <p className="mt-4 text-lg font-bold text-bgGreen">
                {service.name}
              </p>
              <p className="mt-3 text-bgGreen">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="z-10 my-6 flex justify-center">
        <Link to="services">
          <button className="services-button h-[45px] w-[100px] border border-bgGreen bg-[#adc6af] text-bgGreen">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SomeServices;
