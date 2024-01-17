import React, { useEffect, useState } from "react";
import Projeler from "./Projeler";
import axios from 'axios';
function Planlanan() {
  const [planlnanan, setplanlnanan] = useState([]);
  
  const gettamamproje = async () => {
    try {
      const result = await fetch('http://localhost:3000/planlanan');
      const data = await result.json();
      setplanlnanan(data);
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
    <h3 className="text-center" style={{color:"white ",fontFamily:"-moz-initial"}}>Planlanan Projelerimiz</h3>
    <div className="text-center container">
   
     
     <br /> <div className="row container"  >
        <br />
        {planlnanan.map((tamamlanan) => (
          <Projeler key={tamamlanan.id} item={tamamlanan} />
        ))}
      </div>
      </div>
      <br />
    </>
  );
}

export default Planlanan