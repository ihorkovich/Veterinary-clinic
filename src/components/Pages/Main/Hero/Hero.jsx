import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  const userName = useSelector((state) => state.user.name);

  return (
    <div className="container w-full px-4 overflow-hidden flex flex-col justify-end items-center h-[100vh] relative pb-16">
      <div className="absolute top-0 left-0 w-screen overflow-hidden z-0">
        <img
          src="src/assets/hero/hero-background.png"
          alt=""
          className="opacity-[0.35] w-full h-full"
        />
      </div>
      <div className="z-10">
        <h1 className="font-bold text-7xl text-[#74bb8f]">
          Quality <br /> Vet <br /> Care
        </h1>
        <h2 className="mt-4 text-[#74bb8f] text-[13px]">
          At Our Clinic, Your Furry Friend Receives the Best Possible Care. Our
          Team of Skilled and Compassionate Veterinarians Utilizes the Latest
          Techniques and Technology to Ensure Your Pet's Health and Happiness.
          Whether Your Pet Needs a Routine Check-Up or Specialized Care, You Can
          Trust Us to be Your Partner in Your Pet's Wellness Journey.
          <br /> <br /> Book Your Appointment Now!
        </h2>
        <div className="mt-8 flex justify-start z-10">
          <Link to={userName === null ? "/sign-up" : "/request-appointment"}>
            <button className="hero-button bg-bgGreen border border-[#74bb8f] text-[#74bb8f] w-[100px] h-[45px]">
              Book now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
