import React, { useState } from "react";

import "../styles/Child.css";

export default function Selection({ applyColor }) {
  const [color, setColor] = useState({ background: "" });

  function handleClick() {
    applyColor(setColor);
    console.log("done");
  }

  return (
    <div className="flex-box" style={color} onClick={handleClick}>
      <h2 className="subheding"> Selection </h2>
    </div>
  );
}
