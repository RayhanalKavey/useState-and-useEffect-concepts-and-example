import React, { useEffect, useState } from "react";

function ExplainUseEffect() {
  const [toggle, setToggle] = useState(true);

  console.count("Render");

  return (
    <div>
      {toggle && <h1>Explain</h1>}
      <button
        className="px-3 py-2 bg-cyan-400 rounded-md"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ExplainUseEffect;
