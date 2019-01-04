import React from "react";
import PropTypes from "prop-types";
import "../../styles/Backdrop.less";

const Backdrop = ({backDropHandler}) =>
    <div className="Backdrop" onClick={(evt)=>{backDropHandler(evt)}}></div>
;

Backdrop.propTypes = {
    backDropHandler: PropTypes.func.isRequired
};

export default Backdrop;