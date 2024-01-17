import React, { useEffect, useState } from "react";

function Idb() {
  const [bebektc, setbebektc] = useState('');
  const [bebekadsoyad, setbebekadsoyad] = useState('');
  const [veliadsoyad, setveliadsoyad] = useState('');
  const [veliceptelno, setveliceptelnoc] = useState('');
  const [bebekdogumtarihi, setbebekdogumtarihi] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("bebekbilgileri");
    if (data) {
      setdata([JSON.parse(data)]);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("bebekbilgileri", JSON.stringify(data));
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setdata([
      ...data,
      { bebektc, bebekadsoyad, veliadsoyad, veliceptelno, bebekdogumtarihi },
    ]);
    setbebektc('');
    setbebekadsoyad('');
    setveliadsoyad('');
    setveliceptelnoc('');
    setbebekdogumtarihi('');
  };

  return (
    <div className="container col" style={{ width: "600px" }}>
      <br />
      <div
        className="row text-center"
        style={{ color: "white", fontFamily: "-moz-initial" }}
      >
        <h3>İyi Ki Doğdun Bebek</h3>
      </div>
      <br />
      <div className="row">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group text-center" style={{ color: "white" }}>
            <h6>Bebeğe Ait Bilgileri Doldurunuz</h6>
            <input
              type="number"
              className="form-control"
              id="bebektc"
              placeholder="Bebek T.C. Kimlik Numarası"
              onChange={(e)=>setbebektc(e.target.value)}
              value={bebektc}
              required

            />
            <br />
            <input
              type="text"
              className="form-control"
              id="bebekadsoyad"
              placeholder="Bebek Ad Soyad"
              onChange={(e)=>setbebekadsoyad(e.target.value)}
              value={bebekadsoyad}
              

           />
            <br />
            <input
              type="text"
              className="form-control"
              id="veliadsoyad"
              placeholder="Veli Ad Soyad"
              onChange={(e)=>setveliadsoyad(e.target.value)}
              value={veliadsoyad}
              

            />
            <br />
            <input
              type="number"
              className="form-control"
              id="veliceptel"
              placeholder="Veli Cep Telefonu"
              onChange={(e)=>setveliceptelnoc(e.target.value)}
              
              value={veliceptelno}

            />
            <br />
            <input
              type="date"
              className="form-control"
              id="bebekdt"
              placeholder="Bebek Doğum Tarihi"
              onChange={(e)=>setbebekdogumtarihi(e.target.value)}
              value={bebekdogumtarihi}
             

            />

            <br />
            <button type="submit" className="btn btn-success ">
              Gönder
            </button>
          </div>
        </form>
      </div>
      <br />
    </div>
  );
}

export default Idb;
