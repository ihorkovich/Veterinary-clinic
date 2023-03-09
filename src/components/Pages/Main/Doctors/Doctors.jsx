import { Link } from "react-router-dom";
import "./Doctors.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css";
import { doctors } from "./data";
import { Carousel } from "antd";
import { useRef } from "react";

const Doctors = () => {
  const carouselRef = useRef();

  return (
    <div className="mt-20 px-4">
      <h2 className="my-6 px-4 text-center text-3xl font-bold text-blackGreen">
        Expert Veterinary Care You Can Trust
      </h2>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="sm:max-w-4/6 w-full px-10 xsm:px-16 sm:w-4/6 md:max-w-[450px] md:px-16 ml:hidden"
        >
          {doctors.map((doctor) => (
            <div className="relative">
              <SwiperSlide key={Math.random()} className="rounded-sm">
                <img src={doctor.image} alt="doctor" className="doctor" />
                <Link to={`doctors/${doctor.link}`} className="lg:hidden">
                  <div className="absolute bottom-4 right-0 left-1/2 -ml-[40%] h-16 w-[80%] border-2 border-secGreen bg-bgGreen opacity-70 ">
                    <div className="flex h-full flex-col items-center justify-center">
                      <div className="name font-bold">{doctor.name}</div>
                      <p className="underline">Learn More</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <div className="relative mx-auto hidden max-w-[750px] ml:block">
          <Carousel
            autoplay
            effect="fade"
            className="h-[500px] w-[750px]"
            ref={carouselRef}
          >
            {doctors.map((doctor) => {
              return (
                <div className="h-[500px] w-[375px] rounded-r-sm bg-secGreen bg-opacity-10">
                  <div
                    className="absolute top-0 flex h-[500px] justify-start"
                    key={doctor.id}
                  >
                    <img
                      src={doctor.image}
                      className="h-[500px] w-[375px] rounded-l-sm"
                    />
                    <div className="flex w-[375px] flex-col items-center justify-start px-6 py-10">
                      <p className="text-2xl font-bold text-blackGreen">
                        {doctor.name}
                      </p>
                      <div className="my-2 h-[3px] w-36 rounded-sm bg-secGreen" />
                      <p className=" text-md">
                        Experience:{" "}
                        <span className="font-bold">{doctor.experience}</span>{" "}
                        yrs.
                      </p>

                      <p className="mt-5 text-center">
                        {doctor.description}{" "}
                        <span>
                          <Link to={`/doctors/${doctor.link}`}>
                            <button className="underline">see full info</button>
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <div className="absolute bottom-6 right-1/4 -mr-[85.5px] flex items-center gap-5">
            <button
              onClick={() => {
                carouselRef.current.prev();
              }}
              className="h-16 w-16 text-5xl"
            >
              {"❰"}
            </button>
            <div className="h-20 w-[3px] rounded-sm bg-secGreen"></div>
            <button
              onClick={() => {
                carouselRef.current.next();
              }}
              className="h-16 w-16 text-5xl"
            >
              {"❱"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center ml:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          fill="none"
          stroke="#081800"
          className="h-20 w-20 stroke-2"
        >
          <path
            className="hand-x"
            d="M139.93,113.56l-41.12-6.93V76.08a9.25,9.25,0,0,0-9.25-9.25h0a9.25,9.25,0,0,0-9.25,9.25v57.36L71,122.65c-3.61-3.61-8.44-3.89-13.08,0,0,0-7.24,5.84-3.83,9.25l34,34h42.63a9.25,9.25,0,0,0,9.07-7.43l6.82-34.09A9.28,9.28,0,0,0,139.93,113.56Z"
          />
          <g className="swipe-horizontal">
            <path
              className="line-horizontal"
              d="M70.85,42c19.69-12.46,37,0,37,0"
              fill="none"
            />
            <polyline
              className="arrow-left"
              points="76.6 46.01 68.37 43.43 68.38 43.41 70.96 35.18"
            />
            <polyline
              className="arrow-right"
              points="100.21 44.66 108.43 42.08 108.43 42.06 105.85 33.84"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Doctors;
