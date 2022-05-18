import React, { useEffect } from "react";

let elevi = 0;

function Elevi() {
  useEffect(() => {
    let a = setInterval(() => {
      if (elevi >= 100) {
        clearInterval(a);
      }

      elevi += 1;
    }, 400);
  }, []);

  return <h1>{elevi}</h1>;
}

export default Elevi;
