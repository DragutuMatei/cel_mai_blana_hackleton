import React, { useEffect, useState } from "react";
import { axios_cu_cred } from "../utils/api";
import Compressor from "compressorjs";
import { Navigate } from "react-router";
import Aplicatie from "../components/UserPage/Aplicatie";

let apli = [];

function UserPage() {
  const [kkk, setKKK] = useState(true);

  const getAllAplications = async () => {
    await axios_cu_cred.get("/api/test/getAllAplications").then((res) => {
      console.log(res.data);
      res.data.forEach(async (apl) => {
        console.log(apl);
        apli.push({
          ...res.data,
          faculta: await getById(apl.id_facultate),
        });
        console.log(apli);
      });
    });
  };

  const getById = async (id) => {
    await axios_cu_cred.post("/api/test/getById", { id: id }).then((res) => {
      console.log(res.data);
      return res.data;
    });
  };

  useEffect(() => {
    const a = async () => {
      await axios_cu_cred.get("/api/test/isLogged").then((res) => {
        if (res.data) {
          setKKK(true);
        } else {
          setKKK(false);
        }
      });
    };

    a();
    getAllAplications();
  }, []);

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
    link: "",
    medie: "",
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dosar, setDosar] = useState([]);
  const [bac, setBac] = useState("");
  const [scrisoare, setScrisoare] = useState("");
  const [profil, setProfil] = useState("");
  const [rezumat, setRezumat] = useState("");

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const update = async () => {
    await axios_cu_cred
      .post("/api/test/updateUser", {
        id: user.id,
        email,
        dosar,
        bac,
        scrisoare,
        profil,
        rezumat,
      })
      .then((res) => {
        setUser(res.data);
        if (res.data) {
          alert("User Actualizat! ");
        }
      });
  };

  const iafrt = async () => {
    await axios_cu_cred.get("/api/test/userInfo").then((res) => {
      setUser(res.data);
      // console.log(res.data.roles[0].name);
      // console.log(res.data.authorities[0].authority);
    });
  };

  useEffect(() => {
    iafrt();
  }, []);

  return (
    <div className="userpage">
      {!kkk && <Navigate to="/login" />}
      <div className="top">
        <div className="poza">
          {user.profil ? (
            <img src={user.profil} alt="" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="654.23657"
              height="682.11354"
              viewBox="0 0 654.23657 682.11354"
            >
              <title>mathematics</title>
              <path
                d="M892.88171,744.55677c0,25.68-138.79,46.5-310,46.5s-310-20.82-310-46.5c0-18.18,69.57-33.93,170.96-41.57,41.81-3.16,89.05-4.93,139.04-4.93,20.55,0,40.63.3,60.05.87C785.40173,703.12678,892.88171,721.95673,892.88171,744.55677Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#3f3d56"
              />
              <ellipse
                cx="270"
                cy="630.61354"
                rx="119"
                ry="14.5"
                opacity="0.1"
              />
              <ellipse
                cx="269.5"
                cy="521.11354"
                rx="112.5"
                ry="120"
                fill="#3f3d56"
              />
              <rect
                x="235"
                y="592.11354"
                width="70"
                height="64"
                fill="#ffd60a"
              />
              <polygon
                points="396.5 607.614 392.5 629.614 418.5 633.614 435.5 623.614 434.5 607.614 396.5 607.614"
                fill="#575a89"
              />
              <path
                d="M538.38171,303.55677s-2,23-7,24,11,41,11,41h24l19-5-9-22s-12-16-3-29S538.38171,303.55677,538.38171,303.55677Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#a0616a"
              />
              <path
                d="M538.38171,303.55677s-2,23-7,24,11,41,11,41h24l19-5-9-22s-12-16-3-29S538.38171,303.55677,538.38171,303.55677Z"
                transform="translate(-272.88171 -108.94323)"
                opacity="0.1"
              />
              <path
                d="M488.38171,479.55677s-26,50-5,60,26,9,26,12-4,2-2,7-4,25,2,37,4,21,4,21,0,1,2,5,3,7,2,9-7,15-1,18,37,5,40,0-3-8,0-11,5-4,3-6-4-27-4-27,5-29,3-33-5-8-3-11,4-2,5-6,3-13,3-13l11-1,26,5s29,32,61,42c0,0,9,9,12,9s3,0,2,2-4,2-2,4,5-1,3,2-4,3-2,5-1,13-1,14-9,95-6,97,45,8,48,0-2-18-2-18,15-120,11-128-18-44-93-67c0,0-21-4-21-7s-2-22-6-23-27-2-27-2l-29,9-40-7Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#2f2e41"
              />
              <path
                d="M523.38171,647.55677l-5,18s-4,29,1,36c3.92739,5.49834,10.93965,12.23063,23.94449,13.4122a16.07115,16.07115,0,0,0,16.77855-11.11774,5.00653,5.00653,0,0,0,.277-1.29446c0-2-3-26-3-26l-5-25-1-7Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#2f2e41"
              />
              <path
                d="M669.38171,733.55677s-5-5-6,0-5,26,2,27,74,11,81,7,20-10,12-13-31-12-31-12-13-17-15-18-13,1-18,5S669.38171,733.55677,669.38171,733.55677Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#2f2e41"
              />
              <circle cx="289.5" cy="184.61354" r="31" fill="#a0616a" />
              <path
                d="M559.38171,363.55677l-12-13-13.30147-26s-9.69853-3-11.69853,2-38,21-38,21,9,84,5,92-11,40-5,43,34,0,43,4,35,4,42-1,9-9,16-6c5.95926,2.554,19.89075-84.761,23.90164-110.781a11.844,11.844,0,0,0-4.90807-11.50971c-8.97276-6.29384-25.13277-17.13965-27.99357-15.70925C572.38171,343.55677,559.38171,363.55677,559.38171,363.55677Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#575a89"
              />
              <path
                d="M602.38171,359.55677h0a11.85952,11.85952,0,0,1,8.91063,10.19577l8.08936,72.80423s-20,43-30,14S602.38171,359.55677,602.38171,359.55677Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#575a89"
              />
              <path
                d="M600.38171,449.55677l22-6s4,28,8,28-14,16-23,14-22-9-23-14,9-26,9-26Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#575a89"
              />
              <path
                d="M538.98,306.92974c2.10792-4.648,1.74193-10.06966,3.48463-14.86653a17.72716,17.72716,0,0,1,26.95315-8.38071c2.24178,1.59841,4.48928,3.84417,7.22559,3.539,2.94671-.32859,5.575-3.61593,8.2842-2.41116,3.00277,1.33533,2.19174,6.71676,5.23391,7.95972,1.6013.65426,3.49355-.35311,4.41715-1.8157a11.2246,11.2246,0,0,0,1.28583-4.97622c.41976-4.26508.79909-8.779-1.05062-12.64493a30.28893,30.28893,0,0,1-2.02829-4.08992,13.99385,13.99385,0,0,1-.38561-4.03439c-.01689-5.01309-.38281-10.24215-2.90568-14.57417-2.79955-4.80711-7.97447-7.881-13.37326-9.22227s-11.055-1.13561-16.59807-.66635c-9.16324.77574-18.71927,2.43858-25.93856,8.135a10.14728,10.14728,0,0,0-2.49336,2.61953,13.525,13.525,0,0,0-1.32811,3.84148,79.44958,79.44958,0,0,1-6.96764,18.27716,39.65627,39.65627,0,0,0-3.59543,7.76544c-.76559,2.75442-.71387,5.89343.8887,8.26085,1.30475,1.92745,3.39065,2.95463,5.02945,4.53044,1.62387,1.56146,2.38368,4.56438,4.18252,5.74673,1.57033,1.03215,3.4513.30356,5.0529,1.39752C536.40966,302.72479,536.55818,305.80443,538.98,306.92974Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#2f2e41"
              />
              <path
                d="M564.38171,378.55677l3-6s44,13,53,25c0,0,22-14,34-12l12,2-37,33-47-4Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#f2f2f2"
              />
              <path
                d="M562.38171,372.55677l-41,57,59,29s5.51572,3,9.75786,0l39.24214-18,37-53-37,19s-4-8-12-4Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#ffd60a"
              />
              <path
                d="M625.38171,473.55677l8-21s18-23,8-34-21,32-21,32Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#a0616a"
              />
              <path
                d="M533.07939,470.20556l17.45624-14.152s27.11-10.865,23.97851-25.39746-34.22053,17.14513-34.22053,17.14513Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#a0616a"
              />
              <path
                d="M489.88171,369.05677h-1s-15.5-18.5-18.5,6.5-13,108,13,111,44.5-12.5,44.5-12.5,19-29,12-29c-3.38691,0-12.59835-1.52116-21-1-8.96272.556-17.01615,3.08078-16.5.5C503.38171,439.55677,517.88171,376.05677,489.88171,369.05677Z"
                transform="translate(-272.88171 -108.94323)"
                opacity="0.1"
              />
              <path
                d="M488.38171,349.55677l-4-2s-16,3-19,28-13,108,13,111,61-4,61-4,7-38,0-38-43,5-42,0S516.38171,356.55677,488.38171,349.55677Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#575a89"
              />
              <polygon
                points="338 353.114 349.027 336.213 356 364.114 338 372.114 338 353.114"
                fill="#575a89"
              />
              <circle cx="111.47314" cy="85.11354" r="27" fill="#f2f2f2" />
              <rect
                x="79.47314"
                y="286.11354"
                width="64"
                height="64"
                fill="#f2f2f2"
              />
              <polygon
                points="372 0 388.199 28.057 404.397 56.114 372 56.114 339.603 56.114 355.801 28.057 372 0"
                fill="#f2f2f2"
              />
              <path
                d="M927.11829,277.17226q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.59861-6.89283-10.5984-6.892-32.60592,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33968l4.05409-38.108H854.14538Q847.196,290.14515,842.73627,303.871q-4.46013,13.72556-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06434,12.06434,0,0,1-4.0541-9.4983q0-5.326,8.3976-14.884,8.39721-9.55611,9.32434-17.43233l6.94976-54.32423H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41313H803.7594q5.67412-17.6052,13.95764-26.46706,8.28-8.86106,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.799-.75455,13.89963-.75278,27.9151,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99618.17377-1.44695.174-1.79536Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#ffd60a"
              />
              <path
                d="M927.11829,277.17226q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.59861-6.89283-10.5984-6.892-32.60592,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33968l4.05409-38.108H854.14538Q847.196,290.14515,842.73627,303.871q-4.46013,13.72556-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06434,12.06434,0,0,1-4.0541-9.4983q0-5.326,8.3976-14.884,8.39721-9.55611,9.32434-17.43233l6.94976-54.32423H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41313H803.7594q5.67412-17.6052,13.95764-26.46706,8.28-8.86106,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.799-.75455,13.89963-.75278,27.9151,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99618.17377-1.44695.174-1.79536Z"
                transform="translate(-272.88171 -108.94323)"
                opacity="0.1"
              />
              <path
                d="M927.11829,273.55326q-.58078,17.95539-8.74513,28.78352-8.16571,10.82931-19.40145,10.83029-9.15176,0-16.04242-10.5986-6.89283-10.59841-6.892-32.60593,0-4.8648.23169-9.26642.23089-4.40064.57921-8.33967l4.05409-38.10806H854.14538Q847.196,286.52615,842.73627,300.252q-4.46013,13.72557-15.11568,13.726a12.78019,12.78019,0,0,1-8.57155-3.59073,12.06432,12.06432,0,0,1-4.0541-9.49829q0-5.326,8.3976-14.884,8.39721-9.55612,9.32434-17.43233l6.94976-54.32424H828.43149a19.9108,19.9108,0,0,0-9.09265,2.25854,17.15586,17.15586,0,0,0-6.54451,5.27024l-4.98084,7.41314H803.7594q5.67412-17.60522,13.95764-26.46706,8.28-8.86107,19.05393-8.861H925.2652v20.38611H895.381q-1.39011,13.89963-2.14289,27.79906-.75455,13.89962-.75278,27.91509,0,9.499,4.40162,15.40548,4.40064,5.90738,11.00386,5.90718,4.05312,0,8.51344-3.30132a11.97,11.97,0,0,0,5.03856-8.62908q.34754-2.54667.52109-3.99617.17377-1.447.174-1.79537Z"
                transform="translate(-272.88171 -108.94323)"
                fill="#ffd60a"
              />
            </svg>
          )}
          <div className="change">
            <h2>Schimba poza de profil</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                let file = e.target.files[0];
                new Compressor(file, {
                  quality: 0.6,
                  success: (compressedResult) => {
                    getBase64(compressedResult, (r) => {
                      setProfil(r);
                    });
                  },
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="doua">
        <div className="primu">
          <h1>Scrie doar ce vrei sa uploadezi la profilul tau</h1>

          {/* <div className="field">
            <h3>Username: </h3>
            <input
              type="text"
              defaultValue={user.username}

              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div> */}

          <div className="field">
            <h3>Email: </h3>
            <input
              type="text"
              defaultValue={user.email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <h3>Scurt rezumat despre tine: </h3>
            <textarea
              cols="30"
              defaultValue={user.rezumat}
              rows="10"
              onChange={(e) => {
                setRezumat(e.target.value);
              }}
              placeholder="(activitati extrascolare, realizari personale...)"
            ></textarea>
          </div>
          <div className="field">
            <h3>Dosar: </h3>
            {/* TODO: NUMAI POZE, e gata dar mi-e lene sa sterg asta asa ca pierd timpu scriind asta, smoort:)) */}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                for (let i = 0; i < e.target.files.length; i++) {
                  console.log(i);
                  let file = e.target.files[i];
                  new Compressor(file, {
                    quality: 0.6,
                    success: (compressedResult) => {
                      getBase64(compressedResult, (r) => {
                        setDosar((old) => [...old, r]);
                      });
                    },
                  });
                }
              }}
            />
          </div>
          <div className="field">
            <h3>Media de la BAC:</h3>
            <input
              type="number"
              step="0.01"
              defaultValue={user.bac}
              onChange={(e) => {
                setBac(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <h3>Scrisoare de recomandare: </h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                let file = e.target.files[0];
                new Compressor(file, {
                  quality: 0.6,
                  success: (compressedResult) => {
                    getBase64(compressedResult, (r) => {
                      setScrisoare(r);
                    });
                  },
                });
              }}
            />
          </div>
          <div
            className="mainButton"
            onClick={update}
            style={{ textAlign: "center", margin: 10 }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Update
          </div>
        </div>

        <div className="doi primu">
          <Aplicatie
            faculta={"Facultatea Politehnica bucuresti"}
            rezultat={"Respins"}
            id={1}
          />
          <Aplicatie
            faculta={"Facultatea Politehnica bucuresti"}
            rezultat={"Respins"}
            id={1}
          />
          <Aplicatie
            faculta={"Facultatea Politehnica bucuresti"}
            rezultat={"Respins"}
            id={1}
          />
          <Aplicatie
            faculta={"Facultatea Politehnica bucuresti"}
            rezultat={"Respins"}
            id={1}
          />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
