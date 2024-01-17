import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Projeler from "../Page/Projeler/Projeler";
import FotoGaleriLink from "./FotoGaleriLink";



function FotoGalari() {
 
    const [son10urun, setSon10urun] = useState([]);
  

  const gettamamproje = async () => {
    try {
      const result = await fetch("http://localhost:3000/galeri");
      const data = await result.json();
      setSon10urun(data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz.
    }
  };

  useEffect(() => {
    gettamamproje();
  }, []);
    
  return (
    <div className='cerceve'>
        <div className='galeri' >
      
               
            {son10urun.map((tamamlanan) => (
          <FotoGaleriLink key={tamamlanan.id} item={tamamlanan} />
        ))}
        </div>
            
    </div>
  )
}

export default FotoGalari