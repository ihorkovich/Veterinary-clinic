import NavBar from "./components/MainPage/NavBar/NavBar";
import Hero from "./components/MainPage/Hero/Hero";
import Doctors from "./components/MainPage/Doctors/Doctors";
import SomeServices from "./components/MainPage/SomeServices/SomeServices";
import QNA from "./components/MainPage/QNA/QNA";
import Location from "./components/MainPage/Location/Location";
import Footer from "./components/MainPage/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Doctors />
      <SomeServices />
      <QNA />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
