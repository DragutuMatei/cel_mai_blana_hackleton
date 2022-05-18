import React from "react";

function Avantaj({ icon, title, text }) {
  return (
    <div className="avantaj">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Avantaj;
