import NavBar from "../../NavBar/NavBar";

const AboutUs = () => {
  return (
    <div className="bg-bgGreen md:min-h-screen">
      <NavBar />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        About Us
      </h2>
      <div className="md:container">
        <div className="mx-auto flex max-w-[1280px] flex-col-reverse items-center md:mt-10 md:flex-row md:items-start md:gap-10 md:pb-10">
          <div className="container mt-5 px-4">
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
          <div className="container w-full px-4">
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
