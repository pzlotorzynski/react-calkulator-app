import React from "react";
import PropTypes from "prop-types";
import Drzwi from "./Drzwi";

function Konstrukcja(props) {
  return <Drzwi {...props} />;
}

Konstrukcja.propTypes = {
  skala: PropTypes.number.isRequired
};

export default Konstrukcja;
