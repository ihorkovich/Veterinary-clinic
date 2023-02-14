import NavBar from "../../Everywhere/NavBar/NavBar";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-center text-3xl text-textGreen">
        All services we provide
      </h1>
      <div className="container px-4 grid grid-cols-1 grid-rows-auto">
        <div>
          <Link to={"microchipping"}>
            <img className="w-[200px] h-[200px] bg-green-300" />
            <p>Microchipping</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              numquam temporibus rem inventore sed. Ut saepe voluptatibus neque
              incidunt accusamus.
            </p>
          </Link>
        </div>
        <div>
          <Link to="dental care">
            <img className="w-[200px] h-[200px] bg-green-300" />
            <p>DENTISTRY</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              numquam temporibus rem inventore sed. Ut saepe voluptatibus neque
              incidunt accusamus.
            </p>
          </Link>
        </div>
        <div>
          <Link to="wellness exams">
            <img className="w-[200px] h-[200px] bg-green-300" />
            <p>WELLNESS EXAMS</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              numquam temporibus rem inventore sed. Ut saepe voluptatibus neque
              incidunt accusamus.
            </p>
          </Link>
        </div>
        <div>
          <Link to="rehabilitation">
            <img className="w-[200px] h-[200px] bg-green-300" />
            <p>REHABILITATION</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              numquam temporibus rem inventore sed. Ut saepe voluptatibus neque
              incidunt accusamus.
            </p>
          </Link>
        </div>
        <div>
          <Link to="surgery">
            <img className="w-[200px] h-[200px] bg-green-300" />
            <p>Surgery</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              numquam temporibus rem inventore sed. Ut saepe voluptatibus neque
              incidunt accusamus.
            </p>
          </Link>
        </div>
        <div>
          <Link to="vaccinations">
            <img className="w-[200px] h-[200px] bg-green-300" />
            <p>VACCINATIONS</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              numquam temporibus rem inventore sed. Ut saepe voluptatibus neque
              incidunt accusamus.
            </p>
          </Link>
        </div>
        <div>
          <Link to="dermatology">
            <img className="w-[200px] h-[200px] bg-green-300" />
            <p>DERMATOLOGY</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              numquam temporibus rem inventore sed. Ut saepe voluptatibus neque
              incidunt accusamus.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
