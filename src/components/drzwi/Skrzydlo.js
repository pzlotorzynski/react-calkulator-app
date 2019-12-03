import React from "react";
import { Layer, Rect, Group, Line } from "react-konva";

import { zastosujSkale } from "./technologie";

function Skrzydlo(props) {
  return (
    <Layer>
      {props.plytowe === true ? <SkrzydloPlytowe {...props} /> : null}
    </Layer>
  );
}

function wymiarySkrzydla(props) {
  let x,
    y,
    width,
    height,
    {
      oscieznica: { rama },
      wysokoscOscieznicy,
      szerokoscOscieznicy
    } = props;
  width = szerokoscOscieznicy;
  height = wysokoscOscieznicy;
  width -= rama.reduce((prev, ramiak) => {
    return (
      prev +
      ((ramiak.kierunek + 1) % 2 === 0
        ? ramiak.szerokosc - ramiak.zachodzenieSkrzydla
        : 0)
    );
  }, 0);
  height -= rama.reduce((prev, ramiak) => {
    return (
      prev +
      (ramiak.kierunek % 2 === 0
        ? ramiak.szerokosc - ramiak.zachodzenieSkrzydla
        : 0)
    );
  }, 0);
  x = rama.reduce((prev, ramiak) => {
    if (props.kierunek === "lewe" && ramiak.strona === "zawias") {
      return prev + ramiak.szerokosc - ramiak.zachodzenieSkrzydla;
    }
    if (props.kierunek === "prawe" && ramiak.strona === "zamek") {
      return prev + ramiak.szerokosc - ramiak.zachodzenieSkrzydla;
    } else {
      return prev;
    }
  }, 0);
  y = rama.reduce(
    (prev, ramiak) =>
      prev +
      (ramiak.strona === "góra"
        ? ramiak.szerokosc - ramiak.zachodzenieSkrzydla
        : 0),
    0
  );
  return { x, y, width, height };
}

function SkrzydloPlytowe(props) {
  let dims = zastosujSkale(wymiarySkrzydla(props), props.skala);
  console.log(props, dims);
  return (
    <Group>
      <Rect {...dims} fill="rgba(0,255,0,0.5)" />
      <KierunekDrzwi {...dims} kierunek={props.kierunek} />
    </Group>
  );
}

function KierunekDrzwi(props) {
  let points = [],
    { x, y, height, width, kierunek } = props;
  if (kierunek === "lewe") {
    points = [x, y, x + width, y + height / 2, x, y + height];
  } else {
    points = [x + width, y, x, y + height / 2, x + width, y + height];
  }

  return <Line points={points} stroke={"rgba(0,0,0,0.6)"} dash={[5, 10]} />;
}

export default Skrzydlo;
