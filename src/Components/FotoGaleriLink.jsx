import React from "react";
import { Link } from "react-router-dom";
function FotoGaleriLink({item}) {
    const projeurl = `/projeler/ ${item.id}`;
  

  return (
    <div>
      {" "}
      <Link to={`/galeri/${item.id}`}>
        <img
          src={item.image}
          alt=""
         
        />
      </Link>
    </div>
  );
}

export default FotoGaleriLink;
