import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',') //All values joined + seperated by commas
    console.log(bcg);
  return <h4>Single color</h4>;
};

export default SingleColor;
