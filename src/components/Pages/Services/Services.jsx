import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { services } from "./data";
import "./Services.scss";

const Services = () => {
  return (
    <div className="bg-[#adc6af] min-h-screen">
      <NavBar bg={"#adc6af"} />
      <h2 class="mb-10 text-5xl md:text-7xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none text-bgGreen">
        All services we provide
      </h2>
      <div className="pb-10 mx-auto grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 max-w-[1280px]">
        {services.map((service) => (
          <Link
            to={`/services/${service.link}`}
            key={service.id}
            className="w-full group cell hover:shadow-lg hover:-translate-y-2 duration-200"
          >
            <div className="duration-200 content border flex flex-col justify-around items-center rounded-sm border-bgGreen group-hover:bg-bgGreen text-sm pl-7 pt-7 pr-7 pb-7 sm:h-full">
              <img
                src={`/assets/services/${service.icon}.png`}
                className="w-10 h-10 xsm:w-20 xsm:h-20 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:hidden duration-200"
              />
              <img
                src={`/assets/services/${service.revert_icon}.png`}
                className="w-10 h-10 xsm:w-20 xsm:h-20 sm:w-14 sm:h-14 md:w-16 md:h-16 hidden group-hover:block duration-200"
              />
              <p className="text-bgGreen group-hover:text-[#adc6af] mt-4 font-bold text-lg xsm:text-2xl duration-200">
                {service.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
