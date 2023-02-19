import NavBar from "../../NavBar/NavBar";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 pt-[75px] border-2 border-black">
        <div className="w-full">
          <img
            src="https://img.freepik.com/free-photo/doctor-looking-pet-closely_329181-10407.jpg?w=1380&t=st=1675951925~exp=1675952525~hmac=b336adbcc70abbfe72189cbb2559e8e8e9056099492a8173bf98dc4604b2d9a0"
            alt=""
          />
        </div>
        <div>
          <p>
            Welcome to our veterinary clinic, where the health and well-being of
            your furry friend is our top priority. Our experienced and
            compassionate team of veterinary professionals is dedicated to
            providing high-quality, comprehensive care for all of your pet's
            needs. At our clinic, we offer a wide range of services to meet the
            diverse needs of our patients, including routine check-ups,
            vaccinations, diagnostic testing, surgical procedures, and much
            more. Our state-of-the-art facility is equipped with the latest
            technology and tools to ensure the best possible care for your pet.
            We understand the special bond that exists between a pet and their
            owner, and we are committed to building strong, lasting
            relationships with all of our clients. Whether you're bringing in a
            new kitten for its first set of shots, or seeking treatment for a
            long-standing health issue, we will work closely with you to create
            a personalized care plan for your pet. At our clinic, we are
            passionate about what we do and it shows in everything we do. We
            believe that open and honest communication is the key to a
            successful veterinary experience, and we will always keep you
            informed and involved in your pet's care. We look forward to
            welcoming you and your pet to our clinic and providing the
            high-quality care that you both deserve. Book an appointment today
            and see for yourself why we are the trusted choice for veterinary
            care in the community.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
