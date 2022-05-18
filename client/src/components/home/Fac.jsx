import React, { useEffect } from "react";
var facultati = 0;

function Fac( ) {
  
    useEffect(() => {
    let a = setInterval(() => {
        
      if (facultati >= 18) {
        clearInterval(a);
      }
      
        facultati += 1;
   
    }, 300);
  
    }, []);
  //   return <>{facultati != NaN ? facultati : 20}</>;
  return <h1>{facultati}</h1>;
}

export default Fac;
