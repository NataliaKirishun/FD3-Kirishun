import React from "react";
import PropTypes from "prop-types";
import ShopsItem from "../presentational/ShopsItem";

import "../../styles/ShopTable.less";

const ShopsTable = ({listOfGoods, handlerClick, currentItem}) => (
    <ul className="ListItem">
        {listOfGoods.map((item) =>
                    <ShopsItem
                        key={item.id}
                        item={item}
                        handlerClick={handlerClick}
                        currentItem={currentItem}
                    />
                )
            }
    </ul>
);

export default ShopsTable;

ShopsTable.propTypes = {
    listOfGoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            count: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    ),
    handlerClick: PropTypes.func.isRequired,
    currentItem: PropTypes.number
};