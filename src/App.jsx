import { Routes, Route } from "react-router-dom";

import Main from "./components/MainPage/Main";
import Login from "./components/LoginPage/Login";
import AllServices from "./components/AllServicesPage/AllServices";
import AllDoctors from "./components/AllDoctorsPage/AllDoctors";
import AboutUs from "./components/AboutUsPage/AboutUs";
import ContactInfo from "./components/ContactInfoPage/ContactInfo";

const App = () => {
  return (
    <>
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/doctors" element={<AllDoctors />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<ContactInfo />} />
      </Routes>
    </>
  );
};

export default App;
