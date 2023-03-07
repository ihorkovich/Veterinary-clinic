import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  const userName = useSelector((state) => state.user.name);

  return (
    <div className="w-full px-4 overflow-hidden flex flex-col justify-end items-center h-[100vh] relative pb-12 lg:pb-5 -mt-12 md:-mt-16 lg:-mt-20">
      <div className="absolute top-0 left-0 aspect-[16/13.6] h-full sm:h-auto overflow-hidden sm:overflow-visible">
        <img
          src="/assets/hero/bg-main-top.png"
          alt="hero-background"
          className="opacity-[0.3] w-full h-auto"
        />
      </div>
      <div className="z-10 w-full lg:flex lg:justify-between lg:items-start lg:gap-20 max-w-[1280px]">
        <h1 className="font-bold w-full text-[4rem] leading-[4.2rem] sm:text-[6rem] sm:leading-[5rem] md:text-[7rem] md:leading-[6rem] lg:text-[9rem] lg:leading-[7.8rem] lg:flex lg:flex-col lg:justify-start lg:items-start text-secGreen">
          <div className="">
            Q<span className="text-[#0057B8]">U</span>
            <span className="text-[#FFD500]">A</span>LITY
          </div>
          <div className="lg:flex lg:justify-between lg:items-center gap-64">
            <div className="">VET</div>
          </div>
          <div className="lg:flex lg:items-center justify-between lg:w-full">
            <p>CARE</p>
          </div>
        </h1>
        <div className="lg:flex lg:flex-col lg:items-end lg:pb-4">
          <h2 className="mt-4 text-secGreen text-[13px]">
            <div className="md:w-5/6  lg:w-auto lg:text-right">
              At Our Clinic, Your Furry Friend Receives the Best Possible Care.
              Our Team of Skilled and Compassionate Veterinarians Utilizes the
              Latest Techniques and Technology to Ensure Your Pet's Health and
              Happiness. Whether Your Pet Needs a Routine Check-Up or
              Specialized Care, You Can Trust Us to be Your Partner in Your
              Pet's Wellness Journey.
              <br /> <br /> Book Your Appointment Now!
            </div>
          </h2>
          <div className="mt-8 flex justify-start z-10">
            <Link to={userName === null ? "/signup" : "/request-appointment"}>
              <button className="hero-button button bg-bgGreen border border-secGreen text-secGreen w-[100px] h-[45px]">
                Book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
