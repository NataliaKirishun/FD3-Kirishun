import React from "react";
import PropTypes from "prop-types";
import "../../styles/Input.less";

function isInvalidFunc(valid, touched, shouldvalidate) {
    return !valid && shouldvalidate && touched
}

const Input = ({type, label, value, errorMessage, valid, touched, shouldValidate, onChange}) => {
    const inputType = type || 'text';
    const htmlFor = `${type}-${Math.random()}`;
    let classNames = ['InputWrapper'];
    let isInvalid = isInvalidFunc(valid, touched, shouldValidate);
    if (isInvalid) {
        classNames.push('Wrong');
    }
    return (
        <div className={classNames.join(' ')}>
            <label className="Label" htmlFor={htmlFor}>{label}</label>
            <input
                className="Input"
                type={inputType}
                id={htmlFor}
                value={value}
                onChange={onChange}
            />
            {
                isInvalid ?
                    <span className="Error">{errorMessage}</span> :
                    null
            }

        </div>
    )
};

Input.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    errorMessage: PropTypes.string
};

export default Input;

