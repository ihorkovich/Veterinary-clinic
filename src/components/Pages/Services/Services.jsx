import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { services } from "./data";
import "./Services.scss";

const Services = () => {
  return (
    <div className="min-h-screen bg-[#adc6af]">
      <NavBar bg={"#adc6af"} />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-bgGreen md:text-7xl xl:text-8xl">
        All services we provide
      </h2>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-4 pb-10 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link
            to={`/services/${service.link}`}
            key={service.id}
            className="cell group w-full duration-200 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="content flex flex-col items-center justify-around rounded-sm border border-bgGreen pl-7 pt-7 pr-7 pb-7 text-sm duration-200 group-hover:bg-bgGreen sm:h-full">
              <img
                src={`/assets/services/${service.icon}.png`}
                className="h-10 w-10 duration-200 group-hover:hidden xsm:h-20 xsm:w-20 sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <img
                src={`/assets/services/${service.revert_icon}.png`}
                className="hidden h-10 w-10 duration-200 group-hover:block xsm:h-20 xsm:w-20 sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <p className="mt-4 text-lg font-bold text-bgGreen duration-200 group-hover:text-[#adc6af] xsm:text-2xl">
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
