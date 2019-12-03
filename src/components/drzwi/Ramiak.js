import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-konva";
import { zastosujSkale } from "./technologie";

function Ramiak(props) {
  let newProps = zastosujSkale(props, props.skala);

  newProps.skala = props.skala;
  let fill = props.fill || "fuchsia",
    stroke = props.stroke || "black";
  return (
    <Line
      points={newProps.punkty}
      fill={fill}
      stroke={stroke}
      strokeWidth={1}
      closed={true}
    />
  );
}

Ramiak.propTypes = {
  szerokosc: PropTypes.number.isRequired,
  kierunek: PropTypes.number.isRequired
};

export default Ramiak;
