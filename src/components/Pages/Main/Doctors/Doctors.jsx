import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css";
import { doctors } from "./data";

const Doctors = () => {
  return (
    <div className="container px-4 pb-14 overflow-hidden bg-bgGreen z-20">
      <h2 className="text-center font-bold text-3xl text-blackGreen my-6 px-4">
        Expert Veterinary Care You Can Trust
      </h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[70%]"
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={Math.random()}>
            <img src={doctor.image} className="h-96 overflow-hidden" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-700 text-white">
              <div className="name absolute top-[60%] left-[10%]">
                {doctor.name}
              </div>
              <div className="link to learn about it more absolute top-[80%] left-[10%]">
                <Link to={`doctors/${doctor.link}`} className="underline">
                  learn more {">"}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Doctors;
