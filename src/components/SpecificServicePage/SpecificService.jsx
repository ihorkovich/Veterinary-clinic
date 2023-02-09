import NavBar from "../Everywhere/NavBar/NavBar";

const SpecificService = () => {
  return (
    <div>
      <NavBar />
      <div className="container px-4 flex flex-col justify-start items-center gap-3">
        <h1 className="text-3xl text-textGreen ">Therapy</h1>
        <img className="w-[200px] h-[200px] bg-green-400" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          velit eveniet odit sit numquam eos dolore. Est necessitatibus, facilis
          harum voluptate quod iure odit natus soluta maxime eaque placeat
          voluptas aliquid cumque excepturi in tempora sit. Aliquid
          reprehenderit voluptates iste sunt, dicta illum quo dolorem non,
          molestiae inventore illo ducimus odit maiores neque, blanditiis
          tempora minima accusamus veniam. Dolorem dolorum quidem vel animi
          nostrum pariatur iusto aperiam distinctio? Aliquam placeat quas odio
          atque excepturi, doloremque, amet maiores neque ipsum tempore
          distinctio suscipit ea iusto, esse architecto rem inventore sunt
          similique mollitia. Hic asperiores molestias doloribus obcaecati,
          architecto delectus nam nesciunt.
        </p>
        <button className="border border-blackGreen p-3">
          Make an appointment
        </button>
      </div>
    </div>
  );
};

export default SpecificService;
