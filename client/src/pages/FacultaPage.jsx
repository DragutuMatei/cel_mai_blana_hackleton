import React, { useEffect, useState } from "react";
import { axios_cu_cred } from "../utils/api";
import Compressor from "compressorjs";
import { Navigate } from "react-router";
import Aplicatie from "../components/UserPage/Aplicatie";
import Select from "react-select";
import Aplicant from "../components/UserPage/Aplicant";

let array = [];

function FacultaPage() {
  const [kkk, setKKK] = useState(true);
const [aplicanti, setAplicanti] = useState([]);


  const getAplicanti = async () => {
    await axios_cu_cred.get("/api/test/getUserAplAsUni").then(res => {
      setAplicanti(res.data);
    })
  }

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
    getAplicanti();
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
    medie: "",
    link:""
  });



  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [bac, setBac] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [locuri, setLocuri] = useState(0);
  const [oras, setOras] = useState("");
  const [profil, setProfil] = useState("");
  const [examen, setExamen] = useState(false);
  const [specializari, setSpecializari] = useState([]);
  const [spec, setSpec] = useState([]);

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
      .post("/api/test/updateFacultate", {
        id: user.id,
        email: email,
        medie: bac,
        examen,
        taxa,
        locuri,
        oras,
        profil,
        link,
        specialiati: specializari,
      })
      .then((res) => {
        setUser(res.data);
        if (res.data) {
          alert("User Actualizat! ")
        }
      });
  };

  const getSpecialitati = async () => {
    await axios_cu_cred.get("/api/test/getSpecialitati").then((res) => {
      setSpec(res.data);
      res.data.forEach((e) => {
        array.push({
          value: e.spec,
          label: e.spec,
        });
      });
    });
  };

  const iafrt = async () => {
    await axios_cu_cred.get("/api/test/userInfo").then((res) => {
      setUser(res.data);

      console.log(res.data.examen)

    });
  };

  useEffect(() => {
    iafrt();
    getSpecialitati();
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
              width="572.88018"
              height="361.34732"
              viewBox="0 0 572.88018 361.34732"
            >
              <path
                d="M731.57189,357.32634c0,34.66808-54.18983,136.907-85.26017,192.6776a24.31162,24.31162,0,0,1-42.47966,0c-31.07034-55.77059-85.26017-158.00952-85.26017-192.6776,0-48.60106,47.68168-88,106.5-88S731.57189,308.72528,731.57189,357.32634Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#ffd60a"
              />
              <circle cx="312.01198" cy="87" r="58" fill="#fff" />
              <circle
                cx="69.98172"
                cy="104.73964"
                r="34.73965"
                fill="#ff6584"
              />
              <ellipse
                cx="311.51198"
                cy="354.85574"
                rx="84.09209"
                ry="6.49158"
                fill="#ffd60a"
              />
              <circle
                cx="356.74039"
                cy="401.75807"
                r="19.98596"
                transform="translate(-410.53337 420.21116) rotate(-80.78252)"
                fill="#ffd60a"
                opacity="0.4"
                style={{ isolation: "isolate" }}
              />
              <path
                d="M824.33011,504.85631c-157.39-59-349.35-1.48-460.18,116.18-.63.66-1.26,1.33-1.87,2h-1.69c.58-.67,1.18-1.34,1.77-2C475.49014,494.42632,664.90011,443.96635,824.33011,504.85631Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M867.34012,524.42632a375.73279,375.73279,0,0,0-43.01-19.57A341.32459,341.32459,0,0,1,867.34012,524.42632Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <circle
                cx="467.6406"
                cy="174.31504"
                r="21.92017"
                fill="#ffd60a"
                opacity="0.4"
                style={{ isolation: "isolate" }}
              />
              <path
                d="M783.64133,612.24746c1.694,6.26184,7.4961,10.14,7.4961,10.14s3.05572-6.27435,1.36175-12.53619-7.49609-10.14-7.49609-10.14S781.94742,605.98562,783.64133,612.24746Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M786.13047,610.9017c4.64819,4.52484,5.216,11.48059,5.216,11.48059s-6.9685-.3805-11.6167-4.90534-5.216-11.48059-5.216-11.48059S781.48228,606.37685,786.13047,610.9017Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#ffd60a"
              />
              <path
                d="M316.91989,525.1817v9.66l-.48.52v-10.28C316.59989,525.11175,316.75992,525.15173,316.91989,525.1817Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M347.69992,621.03174c-.14.23-.29.46-.44.69h-30.82v-96.06l.48-.48,4.09,4.65v-6.8h13v21.58l13.13,14.91.12.14c.16.5.31,1,.46,1.5a.03476.03476,0,0,0,.01.02,177.4055,177.4055,0,0,1,4.84,19.19C355.4299,595.66174,354.99991,609.6817,347.69992,621.03174Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#ccc"
              />
              <rect
                x="5.4271"
                y="308.95298"
                width="8.27446"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="5.4271"
                y="321.36466"
                width="8.27446"
                height="6.89539"
                fill="#3f3d56"
              />
              <path
                d="M582.14777,565.178l-4.137-6.895,38.614-33.098c28.54712-13.74067,62.95819-9.77594,99.294,0l0,9.653-35.856,38.615-41.373,8.274Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M733.01077,544.608c6.85712-7.62726,7.80982-14.88007,0-21.577h-13v6.804l-4.092-4.65-33.098,33.098-5.517,5.516-6.895,27.582,12.412,30.339h63.437V559.662Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#ccc"
              />
              <path
                d="M578.01077,558.28271H682.82053v63.43753l-104.80976,0C565.33081,608.00159,571.918,582.99731,578.01077,558.28271Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#f2f2f2"
              />
              <rect
                x="332.71515"
                y="308.95298"
                width="22.06525"
                height="19.30707"
                fill="#3f3d56"
              />
              <rect
                x="304.4441"
                y="308.26344"
                width="19.30707"
                height="44.1304"
                fill="#ccc"
              />
              <polygon
                points="282.379 315.159 282.379 308.264 274.105 308.264 274.105 315.159 281.689 315.159 282.379 315.159"
                fill="#3f3d56"
              />
              <polygon
                points="281.689 320.675 274.105 320.675 274.105 327.571 282.379 327.571 282.379 320.675 281.689 320.675"
                fill="#3f3d56"
              />
              <rect
                x="287.89515"
                y="308.26344"
                width="8.27448"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="287.89515"
                y="320.67512"
                width="8.27448"
                height="6.89539"
                fill="#3f3d56"
              />
              <polygon
                points="398.911 315.849 398.911 308.953 390.636 308.953 390.636 315.849 398.221 315.849 398.911 315.849"
                fill="#3f3d56"
              />
              <polygon
                points="398.221 321.365 390.636 321.365 390.636 328.26 398.911 328.26 398.911 321.365 398.221 321.365"
                fill="#3f3d56"
              />
              <rect
                x="404.42707"
                y="308.95298"
                width="8.27448"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="404.42707"
                y="321.36466"
                width="8.27448"
                height="6.89539"
                fill="#3f3d56"
              />
              <polygon
                points="81.966 180.01 75.071 174.493 113.685 140.016 211.599 140.016 211.599 170.356 148.162 213.108 81.966 180.01"
                fill="#3f3d56"
              />
              <path
                d="M543.01078,428.682V410.031h-13v4.568l-4.852-5.257-31.719,34.477-12.411,8.275-19.245,140.603,29.023,29.023,67.45,0c10.33481-51.98779,18.53-105.39435,0-176.522Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#ccc"
              />
              <path
                d="M388.63034,443.8194l104.80979,0V621.72024l-104.80979,0C377.1612,552.60724,371.55982,488.51465,388.63034,443.8194Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#f2f2f2"
              />
              <rect
                x="115.75318"
                y="308.95298"
                width="19.30707"
                height="43.44092"
                fill="#ccc"
              />
              <polygon
                points="95.067 321.365 95.067 314.47 86.793 314.47 86.793 321.365 94.378 321.365 95.067 321.365"
                fill="#3f3d56"
              />
              <polygon
                points="94.378 326.881 86.793 326.881 86.793 333.777 95.067 333.777 95.067 326.881 94.378 326.881"
                fill="#3f3d56"
              />
              <rect
                x="100.58335"
                y="314.46928"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <polygon
                points="150.92 326.881 143.335 326.881 143.335 333.777 151.609 333.777 151.609 326.881 150.92 326.881"
                fill="#3f3d56"
              />
              <rect
                x="157.12546"
                y="314.46928"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="157.12546"
                y="326.88096"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <polygon
                points="209.53 183.457 209.53 176.562 201.256 176.562 201.256 183.457 208.841 183.457 209.53 183.457"
                fill="#3f3d56"
              />
              <polygon
                points="208.841 188.974 201.256 188.974 201.256 195.869 209.53 195.869 209.53 188.974 208.841 188.974"
                fill="#3f3d56"
              />
              <rect
                x="215.04667"
                y="176.56168"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="215.04667"
                y="188.97334"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <polygon
                points="209.53 222.072 209.53 215.176 201.256 215.176 201.256 222.072 208.841 222.072 209.53 222.072"
                fill="#3f3d56"
              />
              <polygon
                points="208.841 227.588 201.256 227.588 201.256 234.483 209.53 234.483 209.53 227.588 208.841 227.588"
                fill="#3f3d56"
              />
              <rect
                x="215.04667"
                y="215.17579"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="215.04667"
                y="227.58747"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <polygon
                points="209.53 260.686 209.53 253.79 201.256 253.79 201.256 260.686 208.841 260.686 209.53 260.686"
                fill="#3f3d56"
              />
              <polygon
                points="208.841 266.202 201.256 266.202 201.256 273.097 209.53 273.097 209.53 266.202 208.841 266.202"
                fill="#3f3d56"
              />
              <rect
                x="215.04667"
                y="253.78992"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="215.04667"
                y="266.20161"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <polygon
                points="209.53 299.3 209.53 292.404 201.256 292.404 201.256 299.3 208.841 299.3 209.53 299.3"
                fill="#3f3d56"
              />
              <polygon
                points="208.841 304.816 201.256 304.816 201.256 311.711 209.53 311.711 209.53 304.816 208.841 304.816"
                fill="#3f3d56"
              />
              <rect
                x="215.04667"
                y="292.40406"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="215.04667"
                y="304.81574"
                width="8.27444"
                height="6.89539"
                fill="#3f3d56"
              />
              <path
                d="M400.35248,452.78338H480.3389V469.3323c-25.63812-7.07562-52.37369-6.56811-79.98642,0Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M400.35248,485.88122q37.44695,11.03275,79.98642,0v16.54892H400.35248Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M400.35248,518.979H480.3389V535.528c-27.25916-8.7044-53.94943-9.11462-79.98642,0Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M400.35248,552.07684c26.08606,10.05365,52.77219,9.63519,79.98642,0v16.549H400.35248Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M830.2399,523.32634h56.2v27.07982l-5.02,1.57056-16.7,5.21211-26.2-6.0692-26.17-6.06457-13.81995-3.20141-6.9-2.55278C797.36991,531.42479,807.80991,525.23049,830.2399,523.32634Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M886.43991,539.30087v82.42087h-94.81c-.03-.051-.05-.0973-.08-.14826v-.00464a1.26523,1.26523,0,0,0-.08-.16678q-2.22006-4.46852-3.98-8.91386c-9.95-25.07837-8.87-49.49422,4.14-73.18733Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#f2f2f2"
              />
              <rect
                x="518.75318"
                y="308.95298"
                width="19.30707"
                height="43.44092"
                fill="#ccc"
              />
              <polygon
                points="498.067 321.365 498.067 314.47 489.793 314.47 489.793 321.365 497.378 321.365 498.067 321.365"
                fill="#3f3d56"
              />
              <polygon
                points="497.378 326.881 489.793 326.881 489.793 333.777 498.067 333.777 498.067 326.881 497.378 326.881"
                fill="#3f3d56"
              />
              <rect
                x="503.58332"
                y="314.46928"
                width="8.27448"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="503.58332"
                y="326.88096"
                width="8.27448"
                height="6.89539"
                fill="#3f3d56"
              />
              <polygon
                points="554.609 321.365 554.609 314.47 546.335 314.47 546.335 321.365 553.92 321.365 554.609 321.365"
                fill="#3f3d56"
              />
              <polygon
                points="553.92 326.881 546.335 326.881 546.335 333.777 554.609 333.777 554.609 326.881 553.92 326.881"
                fill="#3f3d56"
              />
              <rect
                x="560.12543"
                y="314.46928"
                width="8.27448"
                height="6.89539"
                fill="#3f3d56"
              />
              <rect
                x="560.12543"
                y="326.88096"
                width="8.27448"
                height="6.89539"
                fill="#3f3d56"
              />
              <path
                d="M812.35251,491.32634h11.88584a44.20156,44.20156,0,0,1,44.20156,44.20156v0h-56.0874Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M452.35251,371.32634h11.88584a44.20156,44.20156,0,0,1,44.20156,44.20156v0h-56.0874Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <path
                d="M642.35251,482.32634h11.88584a44.20156,44.20156,0,0,1,44.20156,44.20156v0h-56.0874Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <rect
                x="498.79261"
                y="282.75053"
                width="56.0874"
                height="16.54892"
                fill="#3f3d56"
              />
              <rect
                x="2.88018"
                y="351.70996"
                width="570"
                height="2"
                fill="#3f3d56"
              />
              <rect
                x="53.45087"
                y="272.7053"
                width="2"
                height="79"
                fill="#3f3d56"
              />
              <path
                d="M387.46851,552.09933c.12732,27.62433-19.30786,50.10833-19.30786,50.10833s-24.88929-22.78231-19.76892-49.92824c5.14959-27.30091,21.199-49.99243,19.30786-50.10834C367.69959,502.17108,387.34119,524.47494,387.46851,552.09933Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#ffd60a"
              />
              <rect
                x="253.45087"
                y="272.7053"
                width="2"
                height="79"
                fill="#3f3d56"
              />
              <path
                d="M587.46851,552.0993c1.80276,27.56574-19.30786,50.10836-19.30786,50.10836s-19.6416-22.30389-19.76892-49.92822,19.30786-50.10836,19.30786-50.10836C565.80478,509.74341,586.00986,529.79541,587.46851,552.0993Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#ffd60a"
              />
              <polygon
                points="125.513 144.289 212.387 140.039 248.83 170.458 242.387 176.275 184.678 174.976 125.513 144.289"
                fill="#3f3d56"
              />
              <path
                d="M352.38992,554.78174l-4.68,4.23-.57.51-1.19,1.08-29.51-.66v-34.86q-1.44-.315-2.88-.6l2.39-.12.49.41,4.57,3.81,13,10.86,14.52,12.12Z"
                transform="translate(-313.55991 -269.32634)"
                fill="#3f3d56"
              />
              <polygon
                points="315.513 259.289 402.387 255.039 438.83 285.458 432.387 291.275 374.678 289.976 315.513 259.289"
                fill="#3f3d56"
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
                  quality: 0.4,
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
          <div className="field">
            <h3>Link-ul facultatii: </h3>
            <input
              type="text"
              defaultValue={user.link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <h3>Email: </h3>
            <input
              defaultValue={user.email}
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <h3>Orasul in care este facultatea: </h3>
            <input
              type="text"
              defaultValue={user.oras}
              onChange={(e) => {
                setOras(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <h3>Specialitaile facultatii: </h3>
            <Select
              options={array}
              isMulti={true}
              onChange={(e) => {
                // if (e.length - 1 === specializari.length)
                //   setSpecializari((old) => [...old, e[e.length - 1].value]);
                // else {
                let p = e.map((el) => el.value);
                setSpecializari(p);
                // }
                console.log(e);
                console.log(specializari);
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

            {/* <select onChange={e => {
              console.log(e.target.value)
            }} multiple >
              {
                spec.map(sp => (
                  <option value={sp.spec}>{sp.spec}</option>
                ))
}

            </select> */}
          </div>
          <div className="field">
            <h3>Media minima necesara de la BAC:</h3>
            <input
              type="number"
              step="0.01"
              defaultValue={user.medie}
              onChange={(e) => {
                setBac(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <h3>Numar de locuri:</h3>
            <input
              type="number"
              defaultValue={user.locuri}
              onChange={(e) => {
                setLocuri(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <h3>Taxa:</h3>
            <input
              type="number"
              defaultValue={user.taxa}
              onChange={(e) => {
                setTaxa(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <h3>Se da examen? </h3>
            <input
              type="checkbox"
              // checked={user.examen}
              // defaultValue={user.examen ? "checked" : "off"}
              onChange={(e) => {
                setExamen(e.target.checked);
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
          {
            aplicanti && aplicanti.map(apl => (
              <Aplicant user={apl} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default FacultaPage;
