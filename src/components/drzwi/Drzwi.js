import React from "react";
import { Stage } from "react-konva";
import PropTypes from "prop-types";
import Oscieznica from "./Oscieznica";
import Skrzydlo from "./Skrzydlo";

function Drzwi(props) {
  const height = props.wysokosc * props.skala,
    width = props.szerokosc * props.skala,
    {
      wysokosc,
      szerokosc,
      skala,
      kierunek,
      otwieranie,
      technologia: { oscieznica, skrzydlo }
    } = props;
  return (
    <Stage width={width} height={height}>
      <Oscieznica
        wysokosc={wysokosc}
        szerokosc={szerokosc}
        skala={skala}
        kierunek={kierunek}
        otwieranie={otwieranie}
        {...oscieznica}
      />
      <Skrzydlo
        {...skrzydlo}
        oscieznica={oscieznica}
        wysokoscOscieznicy={wysokosc}
        szerokoscOscieznicy={szerokosc}
        skala={skala}
        otwieranie={otwieranie}
        kierunek={kierunek}
      />
    </Stage>
  );
}

Drzwi.propTypes = {
  szerokosc: PropTypes.number.isRequired,
  wysokosc: PropTypes.number.isRequired,
  skala: PropTypes.number.isRequired
};

export default Drzwi;
