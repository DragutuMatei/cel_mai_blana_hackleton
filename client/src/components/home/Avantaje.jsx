import React from "react";
import Avantaj from "./Avantaj";

const dim_svg = {
  w: 200,
  h: 200,
};

function Avantaje() {
  return (
    <div className="avantaje">
      <Avantaj
        icon={
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="#ffc300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M83.1252 175L91.6668 116.25H61.2502C59.7224 116.25 58.6113 115.556 57.9168 114.167C57.2224 112.778 57.2224 111.458 57.9168 110.208L108.959 25H117.5L108.959 83.5417H138.958C140.486 83.5417 141.632 84.2361 142.396 85.625C143.16 87.0139 143.195 88.3333 142.5 89.5833L91.6668 175H83.1252Z" />
          </svg>
        }
        // text="pula mea coaie nushpula mea coaie nushpula mea coaie nush"
        title="RAPID  SI EFICIENT"
      />
      <Avantaj
        icon={
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="#ffc300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M99.7918 175L39.3752 141.875V91.875L8.3335 75L99.7918 25L191.667 75V141.042H179.167V82.2917L160.208 91.875V141.875L99.7918 175ZM99.7918 110.833L165.417 75L99.7918 39.7917L34.5835 75L99.7918 110.833ZM99.7918 160.833L147.708 134.375V99.375L99.7918 125L51.8752 98.9583V134.375L99.7918 160.833Z" />
          </svg>
        }
        // text="pula mea coaie nushpula mea coaie nushpula mea coaie nush"
        title="DEDICAT ABSOLVENTILOR DE LICEU"
      />
      <Avantaj
        icon={
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="#ffc300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M169.375 187.292L148.75 166.667H29.1665C25.8332 166.667 22.9165 165.417 20.4165 162.917C17.9165 160.417 16.6665 157.5 16.6665 154.167V45.8333C16.6665 44.3056 16.9443 42.8472 17.4998 41.4583C18.0554 40.0694 18.8193 38.8194 19.7915 37.7083L5.4165 23.3333L14.3748 14.375L178.333 178.333L169.375 187.292ZM29.1665 154.167H136.25L77.4998 95.4167H29.1665V154.167ZM29.1665 68.5417H50.6248L30.6248 48.5417L29.1665 47.0833V68.5417ZM180.208 162.292L170.833 152.917V95.4167H113.333L86.4582 68.5417H170.833V45.8333H63.7498L51.2498 33.3333H170.833C174.167 33.3333 177.083 34.5833 179.583 37.0833C182.083 39.5833 183.333 42.5 183.333 45.8333V154.167C183.333 155.694 183.055 157.153 182.5 158.542C181.944 159.931 181.18 161.181 180.208 162.292Z" />
          </svg>
        }
        // text="pula mea coaie nushpula mea coaie nushpula mea coaie nush"
        title="INFORMATII IN TIMP REAL GRATIS"
      />
      <Avantaj
        icon={
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="#ffc300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.0833 106.25V67.7083L99.9999 52.5L122.917 67.7083V106.25H110.417V81.25H89.5832V106.25H77.0833ZM99.9999 166.875C118.472 150.069 132.118 134.826 140.937 121.146C149.757 107.465 154.167 95.4166 154.167 85C154.167 68.6111 148.924 55.2083 138.437 44.7916C127.951 34.375 115.139 29.1666 99.9999 29.1666C84.861 29.1666 72.0485 34.375 61.5624 44.7916C51.0763 55.2083 45.8333 68.6111 45.8333 85C45.8333 95.4166 50.3471 107.465 59.3749 121.146C68.4027 134.826 81.9444 150.069 99.9999 166.875ZM99.9999 183.333C77.6388 164.306 60.9374 146.632 49.8958 130.312C38.8541 113.993 33.3333 98.8889 33.3333 85C33.3333 64.1666 40.0346 47.5694 53.4374 35.2083C66.8402 22.8472 82.361 16.6666 99.9999 16.6666C117.639 16.6666 133.16 22.8472 146.562 35.2083C159.965 47.5694 166.667 64.1666 166.667 85C166.667 98.8889 161.146 113.993 150.104 130.312C139.062 146.632 122.361 164.306 99.9999 183.333Z"
            />
          </svg>
        }
        // text="pula mea coai/e nushpula mea coaie nushpula mea coaie nush"
        title="ACCES NELIMITAT DIN CONFORTUL PROPRIEI CASEI"
      />
    </div>
  );
}

export default Avantaje;