import "./Hero.scss";
const Hero = () => {
  return (
    <div className="container px-4 back-green flex flex-col items-center pb-20">
      <img src="src/assets/hero/dog.png" className="hero-image mt-12" />
      <div className="mt-10">
        <h1 className="font-bold text-4xl text-[#74bb8f]">Quality Vet Care</h1>
        <h1 className="font-bold text-4xl text-blackGreen">for Your Pets</h1>
        <h2 className="mt-4 w-10/12">
          Personalized and Expert Care for Your Furry Friends - Book Your
          Appointment Now!
        </h2>
        <div className="mt-6 flex justify-center">
          <button className="hero-button bg-blackGreen text-white w-[100px] h-[45px]">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
