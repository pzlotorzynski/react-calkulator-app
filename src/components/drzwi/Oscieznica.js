import React from "react";
import PropTypes from "prop-types";
import RamiakOscieznicy from "./RamiakOscieznicy";
import { Layer } from "react-konva";

function Oscieznica(props) {
  const { laczenieRamy, rama, wysokosc, szerokosc, skala } = props;
  let szerokoscLewy, szerokoscPrawy, szerokoscGora, szerokoscDol;

  rama.map(ramiak => {
    switch (ramiak.kierunek) {
      case 0:
        szerokoscGora = ramiak.szerokosc;
        break;
      case 1:
        szerokoscPrawy = ramiak.szerokosc;
        break;
      case 2:
        szerokoscDol = ramiak.szerokosc;
        break;
      case 3:
        szerokoscLewy = ramiak.szerokosc;
        break;
      default:
        break;
    }
    return null;
  });

  return (
    <Layer>
      {rama.map(ramiak => {
        return (
          <RamiakOscieznicy
            kierunek={ramiak.kierunek}
            szerokosc={ramiak.szerokosc}
            wysokoscOscieznicy={wysokosc}
            szerokoscOscieznicy={szerokosc}
            skala={skala}
            szerokoscLewy={szerokoscLewy}
            szerokoscPrawy={szerokoscPrawy}
            szerokoscGora={szerokoscGora}
            szerokoscDol={szerokoscDol}
            laczenieRamiakow={laczenieRamy}
          />
        );
      })}
    </Layer>
  );
}

Oscieznica.propTypes = {
  wysokosc: PropTypes.number.isRequired,
  szerokosc: PropTypes.number.isRequired,
  skala: PropTypes.number.isRequired
  // wysokoscMin: PropTypes.number.isRequired,
  // wysokoscMax: PropTypes.number.isRequired,
  // szerokoscMin: PropTypes.number.isRequired,
  // szerokoscMax: PropTypes.number.isRequired,
  // lewy: PropTypes.instanceOf(Ramiak).isRequired,
  // prawy: PropTypes.instanceOf(Ramiak).isRequired,
  // gorny: PropTypes.instanceOf(Ramiak).isRequired,
  // dolny: PropTypes.instanceOf(Ramiak).isRequired
};

export default Oscieznica;
