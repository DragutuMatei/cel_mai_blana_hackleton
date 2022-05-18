import React from "react";

function About() {
  return (
    <>
      {" "}
      <div
        className="about"
        id="about"
        style={{ flexDirection: "row-reverse", marginBottom: 0, marginTop: 0 }}
      >
        <div
          className="left"
          style={{
            textAlign: "right",
            alignItems: "flex-end",
            paddingRight: 50,
          }}
        >
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            doloremque repellendus necessitatibus minima laboriosam consequatur
            vitae provident non nam? Corrupti assumenda modi ipsa fugit
            voluptates sit dolore repellat omnis eligendi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptates adipisci rem laboriosam, dignissimos iure placeat et
            recusandae ratione ipsum?
          </p>
        </div>
        <img src={require("../../assets/img/ceva_elevi.jpg")} alt="" />
      </div>
      <div className="about" style={{ marginTop: 0 }}>
        <div className="left">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            doloremque repellendus necessitatibus minima laboriosam consequatur
            vitae provident non nam? Corrupti assumenda modi ipsa fugit
            voluptates sit dolore repellat omnis eligendi?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptates adipisci rem laboriosam, dignissimos iure placeat et
            recusandae ratione ipsum?
          </p>
        </div>
        <img src={require("../../assets/img/ceva_elevi.jpg")} alt="" />
      </div>
    </>
  );
}

export default About;
