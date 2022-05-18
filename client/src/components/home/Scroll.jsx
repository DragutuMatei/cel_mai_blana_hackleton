import React, { useEffect, useState } from "react";
import UnSvgCaMieLene from "./UnSvgCaMieLene";

function Scroll() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="scroll">
      <div className="t">
        <p>
          <i>
            Absolvirea este doar un concept. În viața reală absolvi în fiecare
            zi. Absolvirea este un proces care continuă până în ultima zi a
            vieții tale. Dacă înțelegeți asta, veți face o diferență.{" "}
          </i>
        </p>
        <h5>Arie Pencovici</h5>
      </div>
      {/* <UnSvgCaMieLene top={scrollTop} /> */}
    </div>
  );
}

export default Scroll;
