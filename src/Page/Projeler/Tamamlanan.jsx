import React, { useEffect, useState } from "react";
import Projeler from "./Projeler";
import axios from 'axios';
import Proje from "./Proje";

function Tamamlanan() {
  const [son10urun, setSon10urun] = useState([]);
  
  const gettamamproje = async () => {
    try {
      const result = await fetch('http://localhost:3000/card');
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
    <>
    
    <br />
    <h3 className="text-center" style={{color:"white ",fontFamily:"-moz-initial"}}>Tamamlanan Projelerimiz</h3>
    <div className="text-center container">
   
     
     <br /> <div className="row container"  >
        <br />
        {son10urun.map((tamamlanan) => (
          <Projeler key={tamamlanan.id} item={tamamlanan} />
        ))}
      </div>
      </div>
      <br />
    </>
  );
}

export default Tamamlanan;

{/*<br />
        <h3 style={{color:"white ",fontFamily:"-moz-initial"}}>Tamamlanan Projelerimiz</h3>
        <br />
        <div className="row" >
          <div className="card col" style={{ padding: "10px", width: "80%" }}>
            <img
              src="https://www.meram.bel.tr/upload/medya/berlika3.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Berlika Trafik Eğitim Parkı</h5>
              <p className="card-text">
                2014 yılında yapımı tamamlanan Berlika Parkı içerisinde bulunan
                eğlence alanı revize edilmiştir.
              </p>
              <a href="#" className="btn btn-primary">
                Projeyi İncele
              </a>
            </div>
          </div>
          <div className="card col" style={{ padding: "10px", width: "80%" }}>
            <img
              src="https://www.meram.bel.tr/upload/medya/DJI_0002.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">10 Adet Açık Halı Saha Yapımı</h5>
              <p className="card-text">
                Meram İlçesinde bulunan Okullara 5 Adet 15x27 ile 5 Adet 19x35
                ölçülerinde toplamda 10 adet açık halı saha yapılarak Okul
                Yönetimlerinin hizmetine sunulmuştur.
              </p>
              <a href="#" className="btn btn-primary">
                Projeyi İncele
              </a>
            </div>
          </div>
          <div className="card col" style={{ padding: "10px", width: "80%" }}>
            <img
              src="https://www.meram.bel.tr/upload/medya/DJI_0002_1200_1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Yenice Parkı</h5>
              <p className="card-text">
                YENİCE PARKI 10,336 TOPLAM İNŞAAT ALANI OLUP İÇERİSİNDE ; -
                KAFEMERAM - SÜS HAVUZLARI -YEŞİL ALANLAR -KAMERİYELER ...
              </p>
              <a href="#" className="btn btn-primary">
                Projeyi İncele
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="card col" style={{ padding: "10px", width: "80%" }}>
            <img
              src="https://www.meram.bel.tr/upload/medya/DSC_0010_1200.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Tantavi Kültür ve Sanat Merkezi</h5>
              <p className="card-text">
                İnşaat alanı;1422 m² Arsa alanı; 1046,96 m² Kat Adedi; B+Z+Asma
                Kat Tesiste, çok amaçlı salon ve kafeterya mevcuttur
              </p>
              <a href="#" className="btn btn-primary">
                Projeyi İncele
              </a>
            </div>
          </div>
          <div className="card col" style={{ padding: "10px", width: "80%" }}>
            <img
              src="https://www.meram.bel.tr/upload/medya/MG_4363_1200.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Yeniyol Trafik Parkı</h5>
              <p className="card-text">
                Revize çalışmasına 01.06.2020 tarihinde başlamış olup, 5026 m²
                proje alanı içerisinde 12 adet kameriye, 1 adet oyun grubu, 1
                adet kafeterya, 1 adet bay-bayan ve engelli wc ile trafik eğitim
                alanı yapılmıştır
              </p>
              <a href="#" className="btn btn-primary">
                Projeyi İncele
              </a>
            </div>
          </div>
          <div className="card col" style={{ padding: "10px", width: "80%" }}>
            <img
              src="https://www.meram.bel.tr/upload/medya/DJI_0011_1200.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Harmancık Pazar Yeri ve Sosyal Tesisi
              </h5>
              <p className="card-text">
                Harmancık, Lalebahçe ve Karahüyük mahallelerimize hizmet verecek
                tesisimiz toplamda 4.844 m²’lik bir inşaat alanı vardır
              </p>
              <a href="#" className="btn btn-primary">
                Projeyi İncele
              </a>
            </div>
          </div>
        </div>
  <br />*/}