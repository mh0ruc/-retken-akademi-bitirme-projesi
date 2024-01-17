import React from "react";
import { Link } from "react-router-dom";

function Projeler({ item }) {
  const projeurl = `/projeler/ ${item.id}`;
  return (
    <>
      <div className=" container  col-md-4">
        <div className="row">
          <div
            className="card container  "
            style={{ padding: "0", width: "73%" }}
          >
            <div className="card">
              <div className="slide slide1">
                <div className="content">
                  <div className="icon">
                    <Link to={`/projeler/${item.id}`}>
                      <img
                        src={item.image}
                        alt=""
                        style={{ width: "100%", height: "200px" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="slide slide2">
                <div className="content">
                  <h3>{item.baslik}</h3>

                  <p>Detaylı Bilgi İçin Tıklayınız</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projeler;
