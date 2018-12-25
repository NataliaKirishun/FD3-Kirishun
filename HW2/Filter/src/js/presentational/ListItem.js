import React from "react";
import PropTypes from "prop-types";

const ListItem = ({value}) => (
    <li className="ListItem">
        <span>{value}</span>
    </li>
);

export default ListItem;

PropTypes.propTypes = {
    value: PropTypes.string.isRequired
}