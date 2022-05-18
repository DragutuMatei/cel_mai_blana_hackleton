import React, { useEffect } from "react";

function Sec({ secunde, setSecunde }) {
  useEffect(() => {
    let a = setInterval(() => {
      setSecunde((s) => s + 1);
    }, 1000);
    return () => clearInterval(a);
  }, []);
  return <h1>{secunde}</h1>;
}

export default Sec;
