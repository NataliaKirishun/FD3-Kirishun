import React from "react";
import PropTypes from "prop-types";
import "../../styles/Button.less";

const Button = ({className, btnName, addButtonHandler}) => (
    <button className={className} onClick={(evt) => {
        addButtonHandler(evt)
    }}>
        {btnName}
        </button>
);

Button.propTypes = {
    className: PropTypes.string,
    btnName: PropTypes.string,
    addButtonHandler: PropTypes.func
};

export default Button;