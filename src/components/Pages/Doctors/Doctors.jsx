import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { doctors } from "./data";

const Doctors = () => {
  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <div className="container max-w-[1280px] px-4 lg:px-12">
        <h2 className="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
          Our doctors
        </h2>
        <div className="grid max-w-[1280px] grid-cols-1 gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {doctors.map((doctor) => (
            <Link to={doctor.link} className="group">
              <div className="flex w-full flex-col bg-opacity-40 shadow-sm duration-150 hover:cursor-pointer hover:shadow-2xl">
                <div className="relative w-full">
                  <img
                    className="rounded-md bg-cover opacity-90"
                    src={doctor.image}
                  />
                  <div className="absolute top-0 left-0 h-full w-full rounded-md bg-opacity-25 bg-gradient-to-b from-transparent via-transparent to-gray-600">
                    <p className="absolute left-5 top-[78%] text-2xl font-bold text-blackGreen">
                      {doctor.name}
                    </p>
                    <p className="absolute top-[84%] left-5 text-gray-800">
                      {doctor.specialization}
                    </p>
                    <p className="absolute left-5 bottom-5 text-gray-400">
                      more about{" "}
                      {doctor.link.slice(0, 1).toUpperCase() +
                        doctor.link.substring(1)}{" "}
                      ➔
                      <div className=" h-[1px] w-0 bg-gray-400 duration-300 group-hover:w-full"></div>
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
