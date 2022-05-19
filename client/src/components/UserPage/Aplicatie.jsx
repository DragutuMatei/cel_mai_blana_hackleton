import React from "react";

function Aplicatie({ faculta, rezultat }) {
  return (
    <div className="aplicatie">
      <h2>{faculta}</h2>
      <h3>
        Rezultat: <span> {rezultat} </span>
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
