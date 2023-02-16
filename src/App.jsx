import { Routes, Route } from "react-router-dom";

import Main from "./components/Pages/Main/Main";
import Profile from "./components/Pages/Profile/Profile";
import SignUp from "./components/Pages/SignUp/SignUp";
import SignIn from "./components/Pages/SignIn/SignIn";
import Services from "./components/Pages/Services/Services";
import SpecificService from "./components/Pages/SpecificService/SpecificService";
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<SpecificService />} />
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
