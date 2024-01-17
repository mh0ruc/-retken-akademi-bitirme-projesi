
import React, { useEffect, useState } from "react";
import Projeler from "./Projeler";

function DevamEden() {
  const [devameden, setdevameden] = useState([]);
  
  const gettamamproje = async () => {
    try {
      const result = await fetch('http://localhost:3000/devam');
      const data = await result.json();
      setdevameden(data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz.
    }
  };

  useEffect(() => {
    gettamamproje();
  }, []);

  return (
    <>
    
    <br />
    <h3 className="text-center" style={{color:"white ",fontFamily:"-moz-initial"}}>Devam Eden Projelerimiz</h3>
    <div className=" container text-center">
    
     
     <br /> <div className="row container"  >
        <br />
        {devameden.map((tamamlanan) => (
          <Projeler key={tamamlanan.id} item={tamamlanan} />
        ))}
      </div>
      </div>
      <br />
    </>
  );
}


export default DevamEden;
