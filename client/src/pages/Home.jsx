import React from "react";
import About from "../components/home/About";
import Avantaje from "../components/home/Avantaje";
import Counts from "../components/home/Counts";
import Landing from "../components/home/Landing";
import Scroll from "../components/home/Scroll";

function Home() {
  return (
    <>
      <Landing />
      <Avantaje />
      <div className="bara"></div>
      {/* <Scroll /> */}
      <About />
      <div className="container">
        <div className="citat">
          <img src={require("../assets/img/banci_faculta.jpg")} alt="" />
          <div className="t">
            <p>
              <i>
                "Absolvirea este doar un concept. În viața reală absolvi în
                fiecare zi. Absolvirea este un proces care continuă până în
                ultima zi a vieții tale. Dacă înțelegeți asta, veți face o
                diferență."{" "}
              </i>
            </p>
            <h5>Arie Pencovici</h5>
          </div>
        </div>
      </div>
      <Counts />
    </>
  );
}

export default Home;
