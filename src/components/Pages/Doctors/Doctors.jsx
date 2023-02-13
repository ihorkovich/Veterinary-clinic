import { Link } from "react-router-dom";
import NavBar from "../../Everywhere/NavBar/NavBar";

const Doctors = () => {
  return (
    <div>
      <NavBar />
      <div className="container px-4">
        <div>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Therapists</option>
            <option value="">Surgeons</option>
            <option value="">Dentists</option>
            <option value="">Dermatologist</option>
            <option value="">Oftalmologia</option>
          </select>
        </div>
        <div className="flex flex-col justify-start items-center gap-4">
          <div>
            <Link to="anne-therapist">
              <img className="w-[200px] h-[200px] bg-green-500" />
              <p>John Dou</p>
              <p>
                Description Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Ut doloremque, laudantium nihil cumque recusandae
                exercitationem quisquam nam illo dolor quidem corrupti
                architecto magni repellendus necessitatibus officia, quam
                aliquid? Accusantium, suscipit. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium assumenda id dicta vel
                ab eius, doloremque illo inventore, odit excepturi autem earum
                maiores itaque, minus accusantium magni sed quasi enim. lore.
              </p>
            </Link>
          </div>
          <div>
            <img className="w-[200px] h-[200px] bg-green-500" />
            <p>John Dou</p>
            <p>
              Description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ut doloremque, laudantium nihil cumque recusandae
              exercitationem quisquam nam illo dolor quidem corrupti architecto
              magni repellendus necessitatibus officia, quam aliquid?
              Accusantium, suscipit. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laudantium assumenda id dicta vel ab eius,
              doloremque illo inventore, odit excepturi autem earum maiores
              itaque, minus accusantium magni sed quasi enim. lore.
            </p>
          </div>
          <div>
            <img className="w-[200px] h-[200px] bg-green-500" />
            <p>John Dou</p>
            <p>
              Description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ut doloremque, laudantium nihil cumque recusandae
              exercitationem quisquam nam illo dolor quidem corrupti architecto
              magni repellendus necessitatibus officia, quam aliquid?
              Accusantium, suscipit. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laudantium assumenda id dicta vel ab eius,
              doloremque illo inventore, odit excepturi autem earum maiores
              itaque, minus accusantium magni sed quasi enim. lore.
            </p>
          </div>
          <div>
            <img className="w-[200px] h-[200px] bg-green-500" />
            <p>John Dou</p>
            <p>
              Description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ut doloremque, laudantium nihil cumque recusandae
              exercitationem quisquam nam illo dolor quidem corrupti architecto
              magni repellendus necessitatibus officia, quam aliquid?
              Accusantium, suscipit. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laudantium assumenda id dicta vel ab eius,
              doloremque illo inventore, odit excepturi autem earum maiores
              itaque, minus accusantium magni sed quasi enim. lore.
            </p>
          </div>
          <div>
            <img className="w-[200px] h-[200px] bg-green-500" />
            <p>John Dou</p>
            <p>
              Description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ut doloremque, laudantium nihil cumque recusandae
              exercitationem quisquam nam illo dolor quidem corrupti architecto
              magni repellendus necessitatibus officia, quam aliquid?
              Accusantium, suscipit. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laudantium assumenda id dicta vel ab eius,
              doloremque illo inventore, odit excepturi autem earum maiores
              itaque, minus accusantium magni sed quasi enim. lore.
            </p>
          </div>
          <div>
            <img className="w-[200px] h-[200px] bg-green-500" />
            <p>John Dou</p>
            <p>
              Description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Ut doloremque, laudantium nihil cumque recusandae
              exercitationem quisquam nam illo dolor quidem corrupti architecto
              magni repellendus necessitatibus officia, quam aliquid?
              Accusantium, suscipit. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laudantium assumenda id dicta vel ab eius,
              doloremque illo inventore, odit excepturi autem earum maiores
              itaque, minus accusantium magni sed quasi enim. lore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
