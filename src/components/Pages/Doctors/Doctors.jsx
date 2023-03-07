import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { doctors } from "./data";

const Doctors = () => {
  return (
    <div className="bg-bgGreen min-h-screen">
      <NavBar />
      <div className="container px-4 lg:px-12 max-w-[1280px]">
        <h2 className="mb-10 text-5xl md:text-7xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none text-secGreen">
          Our doctors
        </h2>
        <div className="pb-10 grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 gap-8 max-w-[1280px] sm:grid-cols-2">
          {doctors.map((doctor) => (
            <Link to={doctor.link} className="group">
              <div className="w-full flex flex-col shadow-sm bg-opacity-40 hover:shadow-2xl duration-150 hover:cursor-pointer">
                <div className="w-full relative">
                  <img
                    className="opacity-90 bg-cover rounded-md"
                    src={doctor.image}
                  />
                  <div className="absolute top-0 left-0 bg-opacity-25 rounded-md bg-gradient-to-b from-transparent via-transparent to-gray-600 w-full h-full">
                    <p className="text-2xl font-bold text-blackGreen absolute left-5 top-[78%]">
                      {doctor.name}
                    </p>
                    <p className="text-gray-800 absolute top-[84%] left-5">
                      {doctor.specialization}
                    </p>
                    <p className="text-gray-400 left-5 absolute bottom-5">
                      more about{" "}
                      {doctor.link.slice(0, 1).toUpperCase() +
                        doctor.link.substring(1)}{" "}
                      ➔
                      <div className=" h-[1px] bg-gray-400 w-0 group-hover:w-full duration-300"></div>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
