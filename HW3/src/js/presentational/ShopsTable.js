import React from "react";
import PropTypes from "prop-types";
import ShopsItem from "../presentational/ShopsItem";

import "../../styles/ShopTable.less";

const ShopsTable = ({listOfGoods, itemClickHandler, targetItemId}) => {
    return (
        <ul className="ListItem">
            {listOfGoods.map((item) =>
                <ShopsItem
                    key={item.id}
                    item={item}
                    itemClickHandler={itemClickHandler}
                    targetItemId={targetItemId}
                />
            )
            }
        </ul>
    );
}

export default ShopsTable;

ShopsTable.propTypes = {
    listOfGoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            count: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    ),
    itemClickHandler: PropTypes.func.isRequired,
    targetItemId: PropTypes.number
};