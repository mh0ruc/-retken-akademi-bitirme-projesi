import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Proje() {
  const { projeId } = useParams();
  const [proje, setProje] = useState({});

  const gettamamproje = async () => {
    try {
      const result = await fetch(`http://localhost:3000/card/${projeId}`);
      const data = await result.json();
      setProje(data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz.
    }
  };
  const gettamamproje2 = async () => {
    try {
      const result = await fetch(`http://localhost:3000/devam/${projeId}`);
      const data = await result.json();
      setProje(data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz.
    }
  };

  const gettamamproje3 = async () => {
    try {
      const result = await fetch(`http://localhost:3000/planlanan/${projeId}`);
      const data = await result.json();
      setProje(data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz.
    }
  };

  useEffect(() => {
    gettamamproje();
    gettamamproje2();
    gettamamproje3();


  }, [projeId]);

  return (
    <div className="container col " style={{ color: "white" }}>
      <br />
      <br />
      <div className="row">
        <h4>{proje.baslik}</h4>
        <p>Aşama : {proje.asama}</p>
      </div>
      <hr />
      <div className="row  ">
     
        <div className="hover02 column col-md-5">
          <div>
            <figure>
              <img src={proje.image} />
            </figure>
          
          </div>
        </div>
        {proje.image1 && (
          <>
            
        <div className="hover02 column col-md-5"  >
        
            <figure>
              <img src={proje.image1} />
             
            </figure>
            
          </div>
          <div className="hover02 column col-md-5">
        
        <figure>
          <img src={proje.image2} />
         
        </figure>
        
      </div>
      
          </>
        )}
      </div>
      <hr />
      <div className="row ">
        <p> {proje.aciklama}</p>
      </div>
      <hr />
      <br />
    </div>
  );
}

export default Proje;
