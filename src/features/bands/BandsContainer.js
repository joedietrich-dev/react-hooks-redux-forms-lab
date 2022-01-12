import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const bands = useSelector((state) => state.bands.entities);
  const bandItems = bands.map((band) => <li key={band}>{band}</li>);

  const dispatch = useDispatch();
  return (
    <div>
      <BandInput onBandSubmit={bandAdded} dispatch={dispatch} />
      <ul>{bandItems}</ul>
    </div>
  );
}

export default BandsContainer;
