import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import "swiper/css";

const Doctors = () => {
  const doctors = [
    {
      name: "helga",
      exp: "12 years",
      rozumiye: "operations, therapist",
      image:
        "https://www.lse.ac.uk/management/assets/images/people/academic-staff/Tanveer-L-200x200.jpeg",
    },
    {
      name: "helga",
      exp: "12 years",
      rozumiye: "operations, therapist",
      image:
        "https://www.lse.ac.uk/management/assets/images/people/academic-staff/Tanveer-L-200x200.jpeg",
    },
    {
      name: "helga",
      exp: "12 years",
      rozumiye: "operations, therapist",
      image:
        "https://www.lse.ac.uk/management/assets/images/people/academic-staff/Tanveer-L-200x200.jpeg",
    },
    {
      name: "helga",
      exp: "12 years",
      rozumiye: "operations, therapist",
      image:
        "https://www.lse.ac.uk/management/assets/images/people/academic-staff/Tanveer-L-200x200.jpeg",
    },
    {
      name: "helga",
      exp: "12 years",
      rozumiye: "operations, therapist",
      image:
        "https://www.lse.ac.uk/management/assets/images/people/academic-staff/Tanveer-L-200x200.jpeg",
    },
  ];
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
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-600 text-white">
              <div className="name absolute top-[60%] left-[10%]">
                Olga Hilerko
              </div>
              <div className="what he does absolute top-[70%] left-[10%]">
                Therapist, veterinarist
              </div>
              <div className="link to learn about it more absolute top-[80%] left-[10%]">
                <a href="#" className="underline">
                  learn more {">"}
                </a>
              </div>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Doctors;
