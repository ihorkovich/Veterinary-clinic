import NavBar from "../../Everywhere/NavBar/NavBar";
import Hero from "./Hero/Hero";
import Doctors from "./Doctors/Doctors";
import SomeServices from "./SomeServices/SomeServices";
import QNA from "./QNA/QNA";
import Location from "./Location/Location";
import Footer from "../../Everywhere/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-bgGreen">
      <NavBar display="fixed" />
      <Hero />
      <Doctors />
      <SomeServices />
      <QNA />
      <Location />
      <Footer />
    </div>
  );
};

export default Main;
