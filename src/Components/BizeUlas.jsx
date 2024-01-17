import React from "react";

function BizeUlas() {
  return (
    <footer className="row">
      <div className=" footerrow  ">
        <div className="col footercol ">
          <img
            className="logo"
            src="https://www.meram.bel.tr/assets/img/footerlogo.svg"
            alt=""
          />
        </div>
        <div className="footercol col" style={{  }}>
          <h5>
            {" "}
            <label style={{ fontWeight: "normal" }} htmlFor="">
              {" "}
              Meram Belediyesi Çözüm Merkezi
            </label>
            <i className="bi bi-telephone-fill"></i> 444 3 042
          </h5>
        </div>
        <div className="footercol col" style={{ }}>
          
          <a
            href="https://www.instagram.com/meram.belediyesi/"
            
          >
            <button type="button" className="btn btn-danger">
              <i className="bi bi-instagram"></i>
            </button>
          </a>

          <a
            href="https://www.facebook.com/Meram.Belediyesi/?locale=tr_TR"
            style={{  }}
          >
            {" "}
            <button type="button" className="btn btn-primary">
              <i className="bi bi-facebook"></i>
            </button>
          </a>

          <a
            href="https://twitter.com/MeramBelediyesi"
            style={{  }}
          >
            {" "}
            <button type="button" className="btn btn-primary">
              <i className="bi bi-twitter"></i>
            </button>
          </a>
          <a
            href="https://www.youtube.com/user/merambelediyesi"
            style={{  }}
          >
             {" "}
            <button type="button" className="btn btn-danger">
              <i className="bi bi-youtube"></i>
            </button>
          </a>
          <br />
          <h6 className="text-right"> Sosyal medya Hesaplarımız</h6>
        </div>
        <div className="col footercol ">
         <h5><i className="bi bi-geo-alt-fill"></i> Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010 Meram / KONYA</h5>
        </div>
      </div>
    </footer>
  );
}

export default BizeUlas;
