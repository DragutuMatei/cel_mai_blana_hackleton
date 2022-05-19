import React from "react";

function Aplicant({ user }) {
  return (
    <div className="aplicatie">
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      {user.scrisoare && <img src={user.scrisoare} alt="" />}
          <p>{user.rezumat && user.rezumat}</p>
          <div className="buts">

      <button className="mainButton">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Accept
      </button>
      <button className="mainButton">
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
