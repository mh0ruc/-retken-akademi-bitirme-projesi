import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    
  

<section style={{background:"green" , color: ""}}>
 
  
 
 <div className="col">
  <nav className="stroke ">

    <ul>
      <li><NavLink  to="/home">
      <img
            src="https://files.sikayetvar.com/lg/cmp/14/14693.svg?1522650125"
            alt=""
            style={{ width:"80px" }}
          />
              </NavLink>  </li>
     
      <li> <NavLink to="/baskan">Baskan</NavLink></li>
      <li> <NavLink to="/meram">Meram</NavLink></li>
      <li>  <NavLink to="/iletisim">İletİsİm</NavLink></li>
   
    </ul>
  </nav>
  </div>
</section>
  );
}

export default Navbar;
