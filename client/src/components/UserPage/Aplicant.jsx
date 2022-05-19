import React from "react";
import { axios_cu_cred } from "../../utils/api";

function Aplicant({ user, i }) {
  console.log(user);
  const accept = async () => {
    console.log(user.aplicatii[i].id);
    await axios_cu_cred
      .post("/api/test/acceptAplicant", {
        id: user.aplicatii[i].id,
        accept: true,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const dismiss = async () => {
    console.log(user.aplicatii[i].id);
    await axios_cu_cred
      .post("/api/test/acceptAplicant", {
        id: user.aplicatii[i].id,
        accept: false,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="aplicatie">
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      {user.scrisoare && (
        <>
          <h2>Scrisoare de recomandare: </h2>
          <img src={user.scrisoare} alt="" />
        </>
      )}

      {user.dosar && (
        <>
          <h2>Dosarul cu diplome: </h2>
          {user.dosar.file1 && <img src={user.dosar.file1} alt="" />}
          {user.dosar.file2 && <img src={user.dosar.file2} alt="" />}
          {user.dosar.file3 && <img src={user.dosar.file3} alt="" />}
        </>
      )}

      <p>{user.rezumat && user.rezumat}</p>

      <div className="buts">
        <button className="mainButton" onClick={accept}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Accept
        </button>
        <button className="mainButton" onClick={dismiss}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Refuz
        </button>
      </div>
    </div>
  );
}

export default Aplicant;
