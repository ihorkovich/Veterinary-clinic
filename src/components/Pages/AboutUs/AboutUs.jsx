import NavBar from "../../NavBar/NavBar";

const AboutUs = () => {
  return (
    <div className="bg-bgGreen md:min-h-screen">
      <NavBar />
      <h2 class="mb-10 text-5xl md:text-7xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none text-secGreen">
        About Us
      </h2>
      <div className="md:container">
        <div className="mx-auto flex flex-col-reverse md:flex-row md:gap-10 items-center md:items-start max-w-[1280px] md:mt-10 md:pb-10">
          <div className="mt-5 container px-4">
            <p className="text-justify text-gray-500 md:text-left lg:text-lg">
              <span className="font-bold">&#9642; Welcome</span> to our
              veterinary clinic, where the health and well-being of your furry
              friend is our top priority. Our experienced and compassionate team
              of veterinary professionals is dedicated to providing
              high-quality, comprehensive care for all of your pet's needs. At
              our clinic, we offer a wide range of services to meet the diverse
              needs of our patients, including routine check-ups, vaccinations,
              diagnostic testing, surgical procedures, and much more. Our
              state-of-the-art facility is equipped with the latest technology
              and tools to ensure the best possible care for your pet. We
              understand the special bond that exists between a pet and their
              owner, and we are committed to building strong, lasting
              relationships with all of our clients
            </p>
          </div>
          <div className="w-full px-4 container">
            <img
              src="/assets/about-us/dog.jpg"
              alt="dog"
              className="rounded-md opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
