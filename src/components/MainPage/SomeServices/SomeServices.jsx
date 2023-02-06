import "./SomeServices.scss";

const SomeServices = () => {
  const services = [
    {
      id: 1,
      name: "Microchipping",
      text: "we can bla sdfjf ashf hfkahsf lajhfa hfkhf ",
      image: "url",
    },
    {
      id: 2,
      name: "Therapi",
      text: "we can bla sdfjf ashf hfkahsf lajhfa hfkhf ",
      image: "url",
    },
    {
      id: 3,
      name: "Dantist",
      text: "we can bla sdfjf ashf hfkahsf lajhfa hfkhf ",
      image: "url",
    },
    {
      id: 4,
      name: "Something else",
      text: "we can bla sdfjf ashf hfkahsf lajhfa hfkhf ",
      image: "url",
    },
  ];
  return (
    <div className="flex flex-col bg-[#b5cbb7] items-center py-8">
      <h2 className="px-4 font-bold text-3xl text-bgGreen text-center mb-8">
        Expert Veterinary Services for Your Pet
      </h2>
      <div className="w-[90%] grid grid-cols-2 gap-4 p-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="aspect-square border border-bgGreen p-1 text-sm"
          >
            <img src="" alt="" />
            <p className="text-bgGreen">{service.name}</p>
            <p className="text-bgGreen">{service.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center z-10">
        <button className="services-button text-bgGreen bg-[#b5cbb7] border border-bgGreen w-[100px] h-[45px]">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default SomeServices;
