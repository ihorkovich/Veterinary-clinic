import { Routes, Route } from "react-router-dom";

import Main from "./components/Pages/Main/Main";
import Login from "./components/Pages/Login/Login";
import Services from "./components/Pages/Services/Services";
import Doctors from "./components/Pages/Doctors/Doctors";
import SpecificDoctor from "./components/Pages/SpecificDoctor/SpecificDoctor";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import ContactInfo from "./components/Pages/ContactInfo/ContactInfo";
import Error from "./components/Pages/Error/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<SpecificDoctor />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<ContactInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
