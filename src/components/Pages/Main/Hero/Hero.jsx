import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  const userName = useSelector((state) => state.user.name);

  return (
    <div className="relative -mt-12 flex h-[100vh] w-full flex-col items-center justify-end overflow-hidden px-4 pb-12 md:-mt-16 lg:-mt-20 lg:pb-5">
      <div className="absolute top-0 left-0 aspect-[16/13.6] h-full overflow-hidden sm:h-auto sm:overflow-visible">
        <img
          src="/assets/hero/bg-main-top.png"
          alt="hero-background"
          className="h-auto w-full opacity-[0.3]"
        />
      </div>
      <div className="z-10 w-full max-w-[1280px] lg:flex lg:items-start lg:justify-between lg:gap-20">
        <h1 className="w-full text-[4rem] font-bold leading-[4.2rem] text-secGreen sm:text-[6rem] sm:leading-[5rem] md:text-[7rem] md:leading-[6rem] lg:flex lg:flex-col lg:items-start lg:justify-start lg:text-[9rem] lg:leading-[7.8rem]">
          <div className="">
            Q<span className="text-[#0057B8]">U</span>
            <span className="text-[#FFD500]">A</span>LITY
          </div>
          <div className="gap-64 lg:flex lg:items-center lg:justify-between">
            <div className="">VET</div>
          </div>
          <div className="justify-between lg:flex lg:w-full lg:items-center">
            <p>CARE</p>
          </div>
        </h1>
        <div className="lg:flex lg:flex-col lg:items-end lg:pb-4">
          <h2 className="mt-4 text-[13px] text-secGreen">
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
          <div className="z-10 mt-8 flex justify-start">
            <Link to={userName === null ? "/signup" : "/request-appointment"}>
              <button className="hero-button button h-[45px] w-[100px] border border-secGreen bg-bgGreen text-secGreen">
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
