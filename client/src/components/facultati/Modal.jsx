import React from "react";
import { axios_cu_cred } from "../../utils/api";

function Modal({ close, id }) {
  const aplica = async () => {
    console.log(id);
    await axios_cu_cred.post("/aplica", { id }).then((res) => console.log(res));
  };

  return (
    <div className="modal">
      <span onClick={close()}>PULA MEA</span>

      <h1 onClick={aplica}>aplica la pula</h1>
    </div>
  );
}

export default Modal;
