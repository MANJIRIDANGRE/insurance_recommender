import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import LifeInsurance from "./Components/LifeInsurance";
import Health from "./Components/Health";
import Homeins from "./Components/Homeins";
import Motorins from "./Components/Motorins";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/life-insurance" element={<LifeInsurance />} />
        <Route path="/health" element={<Health />} />
        <Route path="/homeins" element={<Homeins/>}  />
        <Route path="/motorins" element={<Motorins/>} />      
      </Routes>
    </div>
  );
}

export default App;
