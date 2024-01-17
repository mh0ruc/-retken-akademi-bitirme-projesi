import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar2() {
  return (
    <div className=" container navbar1 ">
      <div className="row">
        <div className="col-sm-2">
          <img
            src="https://files.sikayetvar.com/lg/cmp/14/14693.svg?1522650125"
            alt=""
            style={{ height: "80px" }}
          />
        </div>
        <div className="col-md-5">
          <div className="row navitem">
            <div className="col ">
              {" "}
              <NavLink className="nav-link active navitem" to="/home">
                Ana Sayfa
              </NavLink>
              
            </div>
            <div className="col">
              {" "}
              <NavLink className="nav-link active navitem"to="/baskan">Baskan</NavLink>

              
            </div>
            <div className="col">
              {" "}
              <NavLink className="nav-link active navitem"to="/meram">Meram</NavLink>
              
            </div>
            <div className="col">
              {" "}
              <NavLink className="nav-link active navitem"to="/iletisim">İletisim</NavLink>
            
            </div>
           
          </div>

        </div>
        <div className="col ">
     
              
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
