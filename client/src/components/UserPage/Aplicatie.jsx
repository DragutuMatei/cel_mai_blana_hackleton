import React, { useEffect, useState } from "react";
import { axios_cu_cred } from "../../utils/api";

function Aplicatie({ all }) {
  const [fac, setFac] = useState({});
  
  const getById = async (id) => {
    await axios_cu_cred.post("/api/test/getById", { id: all.id_facultate }).then((res) => {
      console.log(res.data);
      // return res.data;
      setFac(res.data);
    });
  };

  useEffect(() => {
    getById();
  },[])

  return (
    <div className="aplicatie">
      <h2>{fac.username}</h2>
      <h3>
        Rezultat: <span> {all.rezultat && all.rezultat} </span>
      </h3>
      <button className="mainButton">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Sterge aplicatia
      </button>
    </div>
  );
}

export default Aplicatie;
