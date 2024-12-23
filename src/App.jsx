
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContectUs from "./components/ContectUs"
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark dark:bg-black dark:text-white" : "bg-white text-black dark:bg-black"}>
      {/* Navbar */}
      <div className="">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Main Content */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/AboutUs" element={<AboutUs darkMode={darkMode} />} />
          <Route path="/ContectUs" element={<ContectUs darkMode={darkMode} />} />
          <Route path="/Product" element={<Product darkMode={darkMode} />} />
          <Route path="/Product/:id" element={<DetailsPage darkMode={darkMode} />} />
        </Routes>
         </div>
    </div>
  );
};

export default App;
