import React, {Component, Fragment} from "react";
import axios from 'axios';

import ShopsTable from "../presentational/ShopsTable";
import Backdrop from "../presentational/Backdrop";
import DeleteModal from "../presentational/DeleteModal";
import ItemDrawer from "../presentational/ItemDrawer";
import Button from "../presentational/Button";


class App extends Component {

    state = {
        targetItemId: null,
        modalIsShown: false,
        backdropIsShown: false,
        drawerIsShown: false,
        workMode: 1,
        phonesArray: [],
        isFormValid: true,
        formControls: {
            name: {
                value: '',
                type: 'text',
                label: 'Name',
                errorMessage: 'Введите корректное имя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 3,
                }
            },
            url: {
                value: '',
                type: 'text',
                label: 'Url',
                errorMessage: 'Введите url',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }
            },
            price: {
                value: '',
                type: 'text',
                label: 'Price',
                errorMessage: 'Введите стоимость',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 1
                }
            },
            count: {
                value: '',
                type: 'text',
                label: 'Count',
                errorMessage: 'Введите остаток товаров',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 1
                }
            }
        }
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://ishop-7d7fa.firebaseio.com/phones.json');
            this.setState({
                phonesArray: response.data
            });
        } catch (e) {
            console.log(e);
        }
    }

    findTargetItem = (id) => {
        return this.state.phonesArray.find(item => item.id === id)
    };

    showModal = (id) => {
        this.setState({
            modalIsShown: !this.state.modalIsShown,
            targetItemId: id,
            backdropIsShown: !this.state.backdropIsShown
        });
    };

    hideModal = () => {
        this.setState({
            modalIsShown: !this.state.modalIsShown,
            backdropIsShown: !this.state.backdropIsShown
        })
    };

    showDrawer = (id, workMode) => {
        this.setState({
            targetItemId: id,
            drawerIsShown: !this.state.drawerIsShown,
            backdropIsShown: !this.state.backdropIsShown,
            workMode: workMode
        });
        if (workMode === 2) {
            let formControls = Object.assign({}, this.state.formControls);
            let targetItem = this.findTargetItem(id);
            Object.keys(formControls).forEach((control) => {
                formControls[control].value = targetItem[control];
                formControls[control].valid = true;
            });
            this.setState({
                formControls
            });
        }
        // if  (workMode ===3) {
        //     let newItem = {};
        //     Object.keys(this.state.formControls).forEach((control) => {
        //         newItem[control] = this.state.formControls[control].value;
        //         newItem.id = Math.random();
        //     });
        //     this.setState({
        //         phonesArray: this.state.phonesArray.push(newItem)
        //     })
        // }

    };

    closeDrawer = () => {
        this.setState({
            targetItemId: null,
            drawerIsShown: !this.state.drawerIsShown,
            backdropIsShown: !this.state.backdropIsShown
        })
    };

    editItem = () => {
        let phonesArray = this.state.phonesArray.slice();
        let itemEdited = phonesArray.find((item) => {
            return item.id === this.state.targetItemId
        });
        Object.keys(this.state.formControls).forEach(control => {
            itemEdited[control] = this.state.formControls[control].value;
        });
        this.setState({
            phonesArray,
            backdropIsShown: false,
            drawerIsShown: false,
            targetItemId: null
        });
    };

    drawerClickHandler = (evt) => {
        switch (evt.target.className) {
            case "IconClose":
                this.closeDrawer();
                break;
            case 'SaveBtn':
                this.editItem();
                break;
            case 'CancelBtn':
                this.closeDrawer();
        }
    };

    itemClickHandler = (evt, id) => {
        switch (evt.target.className) {
            case "DeleteButton":
                this.showModal(id);
                break;
            case "EditButton":
                this.showDrawer(id, 2);
                break;
            case "Item":
                this.showDrawer(id, 1);
        }
    };

    deleteTargetItem = (id) => {
        this.setState({
            targetItemId: null,
            modalIsShown: !this.state.modalIsShown,
            backdropIsShown: !this.state.backdropIsShown,
            phonesArray: this.state.phonesArray.filter(item => item.id !== id)
        })
    };

    deleteItemHandler = (evt, id) => {
        switch (evt.target.className) {
            case "AgreeBtn":
                this.deleteTargetItem(id);
                break;
            case "DisagreeBtn" :
                this.hideModal();
        }
    };

    validateControl = (value, validation) => {
        if (!validation) {
            return true;
        }
        let isValid = true;
        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }
        return isValid;
    };

    onChangeInputHandler = (evt, controlName) => {
        const formControls = Object.assign({}, this.state.formControls);
        const control = Object.assign({}, formControls[controlName]);
        control.value = evt.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControls[controlName] = control;
        let isFormValid = Object.keys(formControls).every(name => {
            return formControls[name].valid;
        });
        this.setState({
            formControls,
            isFormValid
        });
    };

    backDropHandler = (evt) => {
        this.setState({
            targetItemId: null,
            modalIsShown: false,
            backdropIsShown: false,
            drawerIsShown: false
        });
    };

    addButtonHandler = (evt) => {
        this.showDrawer(null, 3);
    };

    render() {
        return (
            <Fragment>
                <Button className="AddButton" btnName="Add new phone" addButtonHandler={this.addButtonHandler}/>
                <ShopsTable
                    listOfGoods={this.state.phonesArray}
                    itemClickHandler={this.itemClickHandler}
                    targetItemId={this.state.targetItemId}
                />
                {this.state.modalIsShown ?
                    <DeleteModal
                        targetItemId={this.state.targetItemId}
                        deleteItemHandler={this.deleteItemHandler}
                    /> :
                    null
                }
                {this.state.drawerIsShown ?
                    <ItemDrawer
                        item={this.findTargetItem(this.state.targetItemId)}
                        drawerClickHandler={this.drawerClickHandler}
                        workMode={this.state.workMode}
                        formControls={this.state.formControls}
                        isFormValid={this.state.isFormValid}
                        onChangeInputHandler={this.onChangeInputHandler}
                    /> :
                    null
                }
                {this.state.backdropIsShown ?
                    <Backdrop
                        backDropHandler={this.backDropHandler}
                    /> :
                    null
                }

            </Fragment>
        )
    }
};

export default App;
