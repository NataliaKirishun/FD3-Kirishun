import React from "react";
import PropTypes from "prop-types";

import "../../styles/ShopItem.less";

const ShopsItem = ({item, handlerClick, currentItem}) => {
    let currentClass = currentItem === item.id ? 'Current' : 'Item';
    return(
    <li className={currentClass} onClick={(evt)=> handlerClick(evt,item.id)} >
        <h2 className="Title">{item.name}</h2>
        <img className="Image" src={item.url} alt={item.name}/>
        <span className="Price">{item.price}$ </span>
        <span className="Count">{item.count} шт.</span>
        <button className="DeleteButton">Delete</button>
    </li>
)};

export default ShopsItem;

ShopsItem.propTypes = {
    item:PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
        }),
    handlerClick: PropTypes.func.isRequired,
    currentItem: PropTypes.number
};