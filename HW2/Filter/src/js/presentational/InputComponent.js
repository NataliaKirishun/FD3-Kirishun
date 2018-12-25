import React, {Fragment} from "react";
import PropTypes from "prop-types";

const InputComponent = ({handlerSort, handlerText}) => (
    <Fragment>
        <input type="checkbox" onClick={handlerSort}/>
        <input type="text" onChange={handlerText}/>
    </Fragment>
);

export default InputComponent;

InputComponent.propTypes = {
    handlerSort:PropTypes.func.isRequired,
    handlerText:PropTypes.func.isRequired
};