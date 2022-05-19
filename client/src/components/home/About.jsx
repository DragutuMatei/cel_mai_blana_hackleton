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
            Designul Site-ului este user friendly, permitand elevilor de liceu
            sa acceseze informatii despre facultatile din Romania dar si
            depunerea dosarelor pentru inscriere la faculatate.
          </p>
          <p>
            Este mai usor pentru utilizatori, reducand timpul care este pretios
            si pe care absolventii il pot folosi invatand pentru admiteri spre
            exemplu.
          </p>
        </div>
        <img src={require("../../assets/img/ceva_elevi.jpg")} alt="" />
      </div>
      <div className="about" style={{ marginTop: 0 }}>
        <div className="left">
          {/* <h2>About</h2> */}
          <p>
            Site ul permite crearea unei pagini de utilizator pentru elevi unde
            pot fi incarcate diferite informatii cum ar fi: diplome de
            voluntariat, participarea la concursurii etc.
          </p>
          <p>
            Facultatilor li se permite crearea unui cont prin care isi pot
            actualiza informatiile despre faculatatea respectiva in timp real ,
            sa acceseze profilele elevilor , atat dosarele cat si informatiile
            depuse de elevi.
          </p>
        </div>
        <img src={require("../../assets/img/zaruri_de_barbut.jpg")} alt="" />
      </div>
    </>
  );
}

export default About;
