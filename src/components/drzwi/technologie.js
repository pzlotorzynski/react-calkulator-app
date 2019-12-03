import __ from "lodash";

const tech = {
  ZEW2_RamPl: {
    oscieznica: {
      rama: [
        // numery kierunków jak w css
        { kierunek: 0, szerokosc: 88, strona: "góra", zachodzenieSkrzydla: 19 }, // góra
        {
          kierunek: 1,
          szerokosc: 65,
          strona: "zawias",
          zachodzenieSkrzydla: 12
        }, // prawy
        { kierunek: 2, szerokosc: 18, strona: "dół", zachodzenieSkrzydla: 10 }, // dół
        { kierunek: 3, szerokosc: 65, strona: "zamek", zachodzenieSkrzydla: 23 } // lewy
      ],
      laczenieRamy: {
        "01": "poziome",
        "12": "poziome",
        "23": "poziome",
        "30": "poziome"
      }
    },
    skrzydlo: {
      plytowe: true
    }
  }
};

function zastosujSkale(props, skala) {
  let newProps = {};
  if (props.constructor === Array) {
    newProps = [];
  }
  __.map(props, (val, key) => {
    if (key === "skala") {
      newProps[key] = val;
    } else {
      if (props[key].constructor === Array) {
        newProps[key] = zastosujSkale(props[key], skala);
      } else if (!isNaN(props[key])) {
        newProps[key] = val * skala;
      }
    }
  });
  return newProps;
}

export default tech;
export { zastosujSkale };
