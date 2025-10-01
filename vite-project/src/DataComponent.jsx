// DataComponent.jsx
import React from "react";
import { getData } from "./fakeApi";

const dataResource = getData();

function DataComponent() {
  const data = dataResource.read();
  return <h2>{data.message}</h2>;
}

export default DataComponent;
