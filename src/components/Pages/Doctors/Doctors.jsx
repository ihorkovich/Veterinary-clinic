import { Link } from "react-router-dom";
import NavBar from "../../Everywhere/NavBar/NavBar";

const Doctors = () => {
  return (
    <div>
      <NavBar />
      <div className="container px-4">
        <div className="flex flex-col justify-start items-center gap-4">
          <div>
            <Link to="anne">
              <img className="w-[200px] h-[200px] bg-green-500" />
              <p>Anne Therapist</p>
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
            <Link to="milton">
              <img className="w-[200px] h-[200px] bg-green-500" />
              <p>Milton Murphy</p>
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
            <Link to="william">
              <img className="w-[200px] h-[200px] bg-green-500" />
              <p>William Lens</p>
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
            <Link to="olivia">
              <img className="w-[200px] h-[200px] bg-green-500" />
              <p>Olivia Archer</p>
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
            <Link to="amanda">
              <img className="w-[200px] h-[200px] bg-green-500" />
              <p>Amanda Bright</p>
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
        </div>
      </div>
    </div>
  );
};

export default Doctors;
