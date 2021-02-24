import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Testing");
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSumbit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </form>
      </section>
      <section className="colors">
        <h4>List of colors goes here.</h4>
      </section>
    </>
  );
}

export default App;
