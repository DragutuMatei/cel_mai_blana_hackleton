import React, { useEffect, useState } from "react";
import { axios_cu_cred } from "../utils/api";
import Select from "react-select";
import { Link } from "react-router-dom";

let array = [];
function Facultati() {
  const [oras, setOras] = useState("");
  const [taxa, setTaxa] = useState("");
  const [medie, setMedie] = useState("");

  const [arati, setArati] = useState(false);
  const [spec, setSpec] = useState([]);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    authorities: [],
    profil: "",
    bac: "",
    scrisoare: "",
    rezumat: "",
    oras: "",
    locuri: "",
    examen: "",
    taxa: "",
    medie: "",
    link: "",
  });

  const [facultati, setFacultati] = useState([]);

  const filter = async () => {
    await axios_cu_cred
      .post("/api/test/filter", {
        oras,
        taxa,
        medie,
      })
      .then((res) => {
        setFacultati(res.data);
      });
  };

  const getUni = async () => {
    await axios_cu_cred.get("/api/test/totimod").then((res) => {
      // console.log(res);
      setFacultati(res.data);
    });
  };

  useEffect(() => {
    getUni();
    getSpecialitati();
  }, []);

  const iafrt = async () => {
    await axios_cu_cred.get("/api/test/userInfo").then((res) => {
      setUser(res.data);
    });
  };

  const getSpecialitati = async () => {
    await axios_cu_cred.get("/api/test/getSpecialitati").then((res) => {
      console.log(res);
      setSpec(res.data);
      res.data.forEach((e) => {
        console.log(e);
        array.push({
          value: e.spec,
          label: e.spec,
        });
      });
    });
  };

  return (
    <div className="facultati">
      <div className="filtre">
        <div className="filtru">
          <h3>Alege orasul unde vei vrea sa stai</h3>
          <input
            type="text"
            placeholder="oras"
            onChange={(e) => {
              setOras(e.target.value);
            }}
          />
        </div>
        <div className="filtru">
          <h3>Vrei cu admitere?</h3>
          <input type="checkbox" />
        </div>
        <div className="filtru">
          <h3>Care este taxa maxima pe care o poti suporta?</h3>
          <input
            type="number"
            step="0.01"
            onChange={(e) => {
              setTaxa(e.target.value);
            }}
          />
        </div>
        <div className="filtru">
          <h3>Ce media ai avut la BAC?</h3>
          <input
            type="number"
            step="0.01"
            onChange={(e) => {
              setMedie(e.target.value);
            }}
          />
        </div>
        <div className="filtru">
          <h3>Ce specializari cauti?</h3>
          <Select
            options={array}
            isMulti={true}
            onChange={(e) => {
              // setSpecializari(e);
              console.log(e);
            }}
            styles={{
              option: (provided, state) => ({
                ...provided,
                padding: 20,
                color: "black",
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: 400,
              }),
              control: () => ({
                display: "flex",
                margin: 10,
                width: 360,
                padding: 14,
                borderRadius: 10,
                border: "none",
                boxShadow: "0 4px 30px rgb(0 0 0 / 10%)",
                backdropFilter: " blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                outline: "none",
                color: "black",
                fontFamily: "Roboto",
                fontSize: 20,
                fontWeight: 400,
              }),
            }}
          />
        </div>
        <div
          className="mainButton"
          style={{ textAlign: "center", margin: 10, fontSize: 16 }}
          onClick={filter}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Cauta facultatea ta
        </div>
      </div>
      <div className="fac">
        {facultati &&
          facultati.map((fac) => (
            <>
              <div className="facultate">
                <img
                  src={
                    fac.profil
                      ? fac.profil
                      : "https://images.pexels.com/photos/9887601/pexels-photo-9887601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  }
                  alt=""
                />
                <h3>{fac.username}</h3>
                <Link
                  className="mainButton"
                  style={{ textAlign: "center", margin: 10, fontSize: 16 }}
                  to={`/facultatea/${fac.id}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Citeste mai mult
                </Link>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default Facultati;
