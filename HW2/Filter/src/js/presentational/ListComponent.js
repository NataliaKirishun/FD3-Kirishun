import React from "react";
import PropTypes from "prop-types";

import ListItem from "./ListItem";

const ListComponent = ({list}) => (
    <ul className="List">
        {list.map((item)=>(
            <ListItem key={item.id} value={item.word}/>
        ))}
    </ul>
)

export default ListComponent;

ListComponent.propTypes = {
    list:PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    )
};