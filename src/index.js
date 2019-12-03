import React from "react";
import ReactDOM from "react-dom";
import Konstrukcja from "./components/drzwi/Konstrukcja";
import tech from "./components/drzwi/technologie";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Konstrukcja
        wysokosc={2300}
        szerokosc={1030}
        skala={0.5}
        technologia={tech.ZEW2_RamPl}
        kierunek={"prawe"}
        otwieranie={"na zewnątrz"}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
