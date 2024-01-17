import React, { useState, useEffect } from "react";
function İletisim() {
  const [isim, setisim] = useState("");
  const [ceptelno, setceptelno] = useState("");
  const [tc, setTc] = useState("");
  const [mesaj, setmesaj] = useState("");
  const [dogumtarihi, setdogumtarihi] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('İletisim');
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('İletisim', JSON.stringify(data));
  }, [data]);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { isim, ceptelno, tc, mesaj, dogumtarihi }]);
    setisim('');
    setceptelno('');
    setTc('');
    setdogumtarihi('');
    setmesaj('');
  };

  return (
    <div className="container col" style={{ width: "600px" }}>
      <br />
      <div
        className="row text-center"
        style={{ color: "white", fontFamily: "-moz-initial" }}
      >
        <h3>İletişim Formu</h3>
      </div>
      <br />
      <div className="row">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group text-center" style={{ color: "white" }}>
            <h6>İletişim Bilgilerinizi Doldurunuz</h6>
            <input
              type="number"
              className="form-control"
              id="tc"
              placeholder=" T.C. Kimlik Numarası"
              onChange={(e) => setTc(e.target.value)}
              value={tc}
            />
            <br />
            <input
              type="text"
              className="form-control"
              id="adsoyad"
              placeholder=" Ad Soyad"
              onChange={(e) => setisim(e.target.value)}
              value={isim}
            />

            <br />
            <input
              type="number"
              className="form-control"
              id="ceptel"
              placeholder=" Cep Telefonu"
              onChange={(e) => setceptelno(e.target.value)}
              value={ceptelno}
            />
            <br />
            <input
              type="date"
              className="form-control"
              id="dt"
              placeholder=" Doğum Tarihi"
              value={dogumtarihi}
              onChange={(e) => setdogumtarihi(e.target.value)}
            />
            <br />
            <textarea
              type="text"
              className="form-control"
              id="mesaj"
              placeholder="Mesajınız"
              value={mesaj}
              onChange={(e) => setmesaj(e.target.value)}
            />
            <br />
            <button   type="submit" className="btn btn-success ">
              Gönder
            </button>
          </div>
        </form>
      </div>
      <br />
      <div className="container col" style={{ width: "600px", color: "white" }}>
        <br />
      </div>
    </div>
  );
}

export default İletisim;
