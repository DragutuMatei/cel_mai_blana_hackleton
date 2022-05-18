import React, { useEffect, useState } from "react";
import Elevi from "./Elevi";
import Fac from "./Fac";
import Sec from "./Sec";
import CountUp from "react-countup";

function Counts() {
  let [elevi, setElevi] = useState(0);
  let [facultati, setFacultati] = useState(0);
  let [sec, setSec] = useState(0);
  //   useEffect(() => {
  //     let a = setInterval(() => {
  //       setSec((s) => s + 1);
  //       console.log(sec);
  //     }, 1000);
  //       return () => clearInterval(a);
  //   }, []);

  return (
    <div className="counts">
      <div className="elem">
        <h1>
          <CountUp start={0} end={120} duration={6} />
        </h1>{" "}
        <p> Elevi care ne-au folosit platforma </p>
      </div>
      <div className="elem">
        <h1>
          <CountUp start={0} end={50} duration={4} />
        </h1>{" "}
        {/* <Fac facultati={facultati} setFacultati={setFacultati} /> */}
        <p> Facultati care s-au inscris pe platforma noastra </p>
      </div>
      <div className="elem">
        <Sec secunde={sec} setSecunde={setSec} />
        <p>
          Secunde petrecute pe Platforma. Aplica acum la facultatea ta preferata
        </p>
      </div>
    </div>
  );
}

export default Counts;
