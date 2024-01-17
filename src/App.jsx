import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Page/Home";
import BizeUlas from "./Components/BizeUlas";
import SiteRoute from "./SiteRoute";
import Navbar2 from "./Navbar/Navbar2";

function App() {
  return (
    <>
    <div className="col ">
      <div className="row " > <Navbar/></div>
      <div className="row" ><SiteRoute/></div>
     <div className="row" ><BizeUlas/></div>
     
      
     



    </div>
     
      </>
  
  );
}

export default App;
