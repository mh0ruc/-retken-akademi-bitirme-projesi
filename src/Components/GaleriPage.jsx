import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GaleriPage() {
  const [proje, setProje] = useState([]);
  const { projeId } = useParams();

  const getTamamProje = async () => {
    try {
      const result = await fetch(`http://localhost:3000/galeri/${projeId}`);
      const data = await result.json();
      setProje(data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz.
    }
  };

  useEffect(() => {
    getTamamProje();
  }, [projeId]);

  return (
    <div className="container col " style={{ color: "white" }}>
      <br />
      <br />
      <div className="row">
        <h4>{proje.baslik}</h4>
    
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
      {
  !proje.aciklama &&(
    <>
   <div className="row ">
<div className="row text-center" style={{ fontFamily: "-moz-initial" }}>
    <h3>Meram Belediyesi Hizmet Binası </h3>
  </div>
  <hr />
  <br />
  <div className="row">
    <div className="col-md-4">
      <h5>Adres :</h5>
    </div>
    <div className="col-md-6">
      {" "}
      <p>Yenişehir Mah. Azerbaycan Cad. No: 5 42010 Meram / KONYA</p>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <h5>Telefon :</h5>
    </div>
    <div className="col-md-8">
      {" "}
      <p>0332 320 10 00</p>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <h5>Eposta :</h5>
    </div>
    <div className="col-md-8">
      {" "}
      <p>bizimmeram@meram.bel.tr</p>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <h5>Kep Adresi</h5>
    </div>
    <div className="col-md-8">
      {" "}
      <p>merambelediyesi@hs01.kep.tr</p>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <h5>E Tebligat</h5>
    </div>
    <div className="col-md-8">
      {" "}
      <p>35846-96487-38597</p>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-4">
      <h5>IBAN</h5>
    </div>
    <div className="col-md-8">
      {" "}
      <p>TR33 0001 2009 5240 0007 0000 02</p>
    </div>
  </div>
  <hr />

  <br />
</div>
<hr />
<br />
    
    </>

  )
  
}

{
      proje.aciklama &&(
       <>
       <hr />
        {proje.aciklama}
        <hr />
       </>
      )
    }  
 
  
    </div>
   
  );
  
  
}

export default GaleriPage;
