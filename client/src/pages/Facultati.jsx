import React, { useEffect, useState } from "react";
import { axios_cu_cred } from "../utils/api";
import Select from "react-select";
import Modal from "../components/facultati/Modal";

let array = [];
function Facultati() {
  const [arati, setArati] = useState(false);
  const [spec, setSpec] = useState([]);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    authorities: [],
  });

  const [facultati, setFacultati] = useState([]);

  const getUni = async () => {
    await axios_cu_cred.get("/api/test/totimod").then((res) => {
      // console.log(res);
      setFacultati(res.data);
    });
  };

  useEffect(() => {
    getUni();
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
          <input type="text" placeholder="oras" />
        </div>
        <div className="filtru">
          <h3>Vrei cu admitere?</h3>
          <input type="checkbox" />
        </div>
        <div className="filtru">
          <h3>Care este taxa maxima pe care o poti suporta?</h3>
          <input type="number" step="0.01" />
        </div>
        <div className="filtru">
          <h3>Ce media ai avut la BAC?</h3>
          <input type="number" step="0.01" />
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
                <div
                  className="mainButton"
                  style={{ textAlign: "center", margin: 10, fontSize: 16 }}
                  onClick={() => {
                    setArati((old) => !old);
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Citeste mai mult
                </div>
              </div>
              {arati && (
                <Modal
                  id={fac.id}
                  close={() => {
                    setArati((old) => !old);
                  }}
                />
              )}
            </>
          ))}
      </div>
    </div>
  );
}

export default Facultati;
