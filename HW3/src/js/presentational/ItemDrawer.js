import React from "react";
import PropTypes from "prop-types";
import "../../styles/ItemDescriptionDrawer.less";
import Input from "./Input";

const ItemDrawer = ({item, drawerClickHandler, workMode, formControls, isFormValid, onChangeInputHandler}) => {
    switch (workMode) {
        case 1:
            return (
                <div className="DrawerWrapper" onClick={(evt) => (drawerClickHandler(evt))}>
                    <div className="DrawerContent">
                        <h2 className="Title">Your choice</h2>
                        <h3 className="Title">Name: {item.name}</h3>
                        <img className="Image" src={item.url} alt={item.name}/>
                        <span className="Price">Price: {item.price}$ </span>
                        <span className="Count">Count: {item.count} шт.</span>
                    </div>
                    <div className="IconClose"></div>
                </div>
            );
        case 2:
            const inputs = Object.keys(formControls).map((controlName, index) => {
                const control = formControls[controlName];
                return (
                    <Input
                        key={controlName + index}
                        type={control.type}
                        value={formControls[controlName].value}
                        label={control.label}
                        errorMessage={control.errorMessage}
                        valid={control.valid}
                        touched={control.touched}
                        shouldValidate={!!control.validation}
                        onChange={evt => onChangeInputHandler(evt, controlName)}
                    />
                )
            });
            return (
                <div className="DrawerWrapper" onClick={(evt) => (drawerClickHandler(evt))}>
                    <div className="DrawerContent">
                        <h2 className="Title">Edit item</h2>
                        {inputs}
                        <div className="BtnGroup">
                            <button disabled={!isFormValid} className="SaveBtn">Save</button>
                            <button className="CancelBtn">Cancel</button>
                        </div>
                    </div>
                    <div className="IconClose"></div>
                </div>
            );
        case 3:
            const addInputs = Object.keys(formControls).map((controlName, index) => {
                const control = formControls[controlName];
                return (
                    <Input
                        key={controlName + index}
                        type={control.type}
                        value={formControls[controlName].value}
                        label={control.label}
                        errorMessage={control.errorMessage}
                        valid={control.valid}
                        touched={control.touched}
                        shouldValidate={!!control.validation}
                        onChange={evt => onChangeInputHandler(evt, controlName)}
                    />
                )
            });
            return (
                <div className="DrawerWrapper" onClick={(evt) => (drawerClickHandler(evt))}>
                    <div className="DrawerContent">
                        <h2 className="Title">New item</h2>
                        {addInputs}
                        <div className="BtnGroup">
                            <button disabled={!isFormValid} className="AddBtn">Add</button>
                            <button className="CancelBtn">Cancel</button>
                        </div>
                    </div>
                    <div className="IconClose"></div>
                </div>
            );
    }
};


ItemDrawer.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }),
    drawerClickHandler: PropTypes.func.isRequired,
    workMode: PropTypes.number.isRequired,
    formControls: PropTypes.object,
    isFormValid: PropTypes.bool.isRequired,
    onChangeInputHandler: PropTypes.func.isRequired
};

export default ItemDrawer;