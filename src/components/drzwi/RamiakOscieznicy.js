import React from "react";
import PropTypes from "prop-types";
import Ramiak from "./Ramiak";

function RamiakOscieznicy(props) {
  const {
    kierunek,
    szerokosc,
    skala,
    szerokoscOscieznicy,
    wysokoscOscieznicy,
    szerokoscLewy,
    szerokoscPrawy,
    szerokoscGora,
    szerokoscDol,
    laczenieRamiakow
  } = props;
  let ramiak = {};
  ramiak.punkty = [];

  switch (kierunek) {
    case 0: // góra
      ramiak.punkty.push(
        laczenieRamiakow["30"] === "pionowe" ? szerokoscLewy : 0
      ); // x0
      ramiak.punkty.push(0); // y0
      ramiak.punkty.push(
        laczenieRamiakow["01"] === "pionowe"
          ? szerokoscOscieznicy - szerokoscPrawy
          : szerokoscOscieznicy
      ); // x1
      ramiak.punkty.push(0); // y1
      ramiak.punkty.push(
        laczenieRamiakow["01"] === "poziome"
          ? szerokoscOscieznicy
          : szerokoscOscieznicy - szerokoscPrawy
      ); // x2
      ramiak.punkty.push(szerokosc); // y2
      ramiak.punkty.push(
        laczenieRamiakow["30"] === "poziome" ? 0 : szerokoscLewy || szerokosc
      ); //x3
      ramiak.punkty.push(szerokosc); // y3
      break;
    case 1: // prawy
      ramiak.punkty.push(szerokoscOscieznicy - szerokoscPrawy); // x0
      ramiak.punkty.push(
        laczenieRamiakow["01"] === "pionowe" ? 0 : szerokoscGora
      ); // y0
      ramiak.punkty.push(szerokoscOscieznicy); // x1
      ramiak.punkty.push(
        laczenieRamiakow["01"] === "poziome" ? szerokoscGora : 0
      ); // y1
      ramiak.punkty.push(szerokoscOscieznicy); // x2
      ramiak.punkty.push(
        laczenieRamiakow["12"] === "poziome"
          ? wysokoscOscieznicy - szerokoscDol
          : wysokoscOscieznicy
      ); // y2
      ramiak.punkty.push(szerokoscOscieznicy - szerokoscPrawy); //x3
      ramiak.punkty.push(
        laczenieRamiakow["12"] === "pionowe"
          ? wysokoscOscieznicy
          : wysokoscOscieznicy - szerokoscDol
      ); // y3
      break;
    case 2: // dół
      ramiak.punkty.push(
        laczenieRamiakow["23"] === "poziome" ? 0 : szerokoscLewy
      ); // x0
      ramiak.punkty.push(wysokoscOscieznicy - szerokoscDol); // y0
      ramiak.punkty.push(
        laczenieRamiakow["12"] === "poziome"
          ? szerokoscOscieznicy
          : szerokoscOscieznicy - szerokoscPrawy
      ); // x1
      ramiak.punkty.push(wysokoscOscieznicy - szerokoscDol); // y1
      ramiak.punkty.push(
        laczenieRamiakow["12"] === "pionowe"
          ? szerokoscOscieznicy - szerokoscPrawy
          : szerokoscOscieznicy
      ); // x2
      ramiak.punkty.push(wysokoscOscieznicy); // y2
      ramiak.punkty.push(
        laczenieRamiakow["23"] === "pionowe" ? szerokoscLewy : 0
      ); // x3
      ramiak.punkty.push(wysokoscOscieznicy); //y3
      break;
    case 3: // lewy
      ramiak.punkty.push(0); // x0
      ramiak.punkty.push(
        laczenieRamiakow["30"] === "poziome" ? szerokoscGora : 0
      ); // y0
      ramiak.punkty.push(szerokoscLewy); // x1
      ramiak.punkty.push(
        laczenieRamiakow["30"] === "pionowe" ? 0 : szerokoscGora
      ); // y1
      ramiak.punkty.push(szerokoscLewy); // x2
      ramiak.punkty.push(
        laczenieRamiakow["23"] === "pionowe"
          ? wysokoscOscieznicy
          : wysokoscOscieznicy - szerokoscDol
      ); // y2
      ramiak.punkty.push(0); // x3
      ramiak.punkty.push(
        laczenieRamiakow["23"] === "poziome"
          ? wysokoscOscieznicy - szerokoscDol
          : wysokoscOscieznicy
      ); //y3
      break;
    default:
      break;
  }
  return <Ramiak kierunek={kierunek} skala={skala} {...ramiak} />;
}

RamiakOscieznicy.PropTypes = {
  szerokosc: PropTypes.number.isRequired,
  kierunek: PropTypes.number.isRequired
};

export default RamiakOscieznicy;
