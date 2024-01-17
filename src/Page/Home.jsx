import React, { useState } from "react";
import List from "../Components/List";
import BizeUlas from "../Components/BizeUlas";
import FotoGalari from "../Components/FotoGalari";

function Home() {
 

  return (
    <div>
      <br />
      <div className="row">
        <div className="col-md-3">
          <List />
        </div>
        <div className="col-md-9">
        <FotoGalari/>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Home;
