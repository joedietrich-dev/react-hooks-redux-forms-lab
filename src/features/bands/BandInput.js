import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onBandSubmit(name);
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Band Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="Add Band" />
      </form>
    </div>
  );
}

export default BandInput;
