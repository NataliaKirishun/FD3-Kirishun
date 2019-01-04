import React from "react";
import PropTypes from "prop-types";
import "../../styles/ShopItem.less";

const ShopsItem = ({item, itemClickHandler, targetItemId}) => {
    let currentClass = targetItemId === item.id ? 'Current' : 'Item';
    return (
        <li className={currentClass} onClick={(evt) => itemClickHandler(evt, item.id)}>
            <h2 className="Title">{item.name}</h2>
            <img className="Image" src={item.url} alt={item.name}/>
            <span className="Price">Price: {item.price}$ </span>
            <span className="Count">Count:{item.count} шт.</span>
            <div className="BtnGroup">
                <button className="EditButton">Edit</button>
                <button className="DeleteButton">Delete</button>
            </div>
        </li>
    )
};

export default ShopsItem;

ShopsItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }),
    itemClickHandler: PropTypes.func.isRequired,
    targetItemId: PropTypes.number
};