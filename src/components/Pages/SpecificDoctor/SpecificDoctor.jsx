import { useParams } from "react-router";
import NavBar from "../../Everywhere/NavBar/NavBar";

const SpecificDoctor = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container px-4 flex flex-col justify-start items-center gap-4">
        <img className="w-[200px] h-[200px] bg-green-300" />
        <p>John Dou</p>
        <p>
          Decription. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus aliquam suscipit molestias, quod ducimus magni officia deserunt
          est dolores totam minima! Pariatur, temporibus possimus quidem commodi
          aliquam, exercitationem sequi, ipsum voluptatibus atque fugit vitae
          architecto deserunt reiciendis quam sunt iusto voluptatum neque omnis
          obcaecati beatae porro optio. Praesentium, accusantium ea.
        </p>
      </div>
    </div>
  );
};

export default SpecificDoctor;
