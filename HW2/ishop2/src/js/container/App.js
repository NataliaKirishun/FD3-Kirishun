import React, {Component, Fragment} from "react";

import ShopsTable from "../presentational/ShopsTable";
import Backdrop from "../presentational/Backdrop";
import DeleteModal from "../presentational/DeleteModal";


class App extends Component {

    state = {
        selectedItem: null,
        idItemToDelete: null,
        deleteModalIsShown: false,
        phonesArray: [
            {name: 'Apple iPhone X', price: 2149, count: 10, url: 'src/images/Apple iPhone X 64GB.jpeg', id: 1},
            {name: 'Apple iPhone 7', price: 1215, count: 5, url: 'src/images/Apple iPhone 7.jpeg', id: 2},
            {name: 'Honor 8X', price: 549, count: 6, url: 'src/images/Honor 8X.jpeg', id: 3},
            {name: 'Honor 8X', price: 549, count: 6, url: 'src/images/Honor 8X.jpeg', id: 12},
            {name: 'Huawei Mate 20 Lite', price: 695, count: 3, url: 'src/images/Huawei Mate 20 Lite.jpeg', id: 4},
            {name: 'Huawei P20 Lite', price: 570, count: 7, url: 'src/images/Huawei P20 Lite.jpeg', id: 5},
            {name: 'Samsung Galaxy A7', price: 744, count: 6, url: 'src/images/Samsung Galaxy A7.jpeg', id: 6},
            {name: 'Samsung Galaxy S8', price: 1098, count: 4, url: 'src/images/Samsung Galaxy S8.jpeg', id: 7},
            {name: 'Xiaomi Mi A2 Lite', price: 467, count: 3, url: 'src/images/Xiaomi Mi A2 Lite.jpeg', id: 8},
            {name: 'Xiaomi Pocophone F1', price: 775, count: 6, url: 'src/images/Xiaomi Pocophone F1.jpeg', id: 9},
            {
                name: 'Xiaomi Redmi Note 6Pro',
                price: 539,
                count: 7,
                url: 'src/images/Xiaomi Redmi Note 6 Pro.jpeg',
                id: 10
            },
            {
                name: 'Xiaomi Redmi Note 6Pro',
                price: 539,
                count: 7,
                url: 'src/images/Xiaomi Redmi Note 6 Pro.jpeg',
                id: 13
            },
            {name: 'Xiaomi Redmi 6A', price: 189, count: 6, url: 'src/images/Xiaomi Redmi 6A.jpeg', id: 11}
        ]
    };

    showModal = (id) => {
        this.setState({
            deleteModalIsShown: !this.state.deleteModalIsShown,
            idItemToDelete: id
        })
    };

    deleteItem = (evt, id) => {
        evt.target.className === "AgreeBtn" ?
            this.setState({
                deleteModalIsShown: !this.state.deleteModalIsShown,
                phonesArray: this.state.phonesArray.filter(item => item.id !== id)
            }) :
            this.setState({
                deleteModalIsShown: !this.state.deleteModalIsShown
            })
    };

    handlerClick = (evt, id) => {
        evt.target.className === "DeleteButton" ?
            this.showModal(id)
            :
            id !== this.state.selectedItem ?
                this.setState({
                    selectedItem: id
                }) :
                this.setState({
                    selectedItem: null
                })
    };

    render() {
        return (
            <Fragment>
                <ShopsTable
                    listOfGoods={this.state.phonesArray}
                    handlerClick={this.handlerClick}
                    currentItem={this.state.selectedItem}
                />
                {this.state.deleteModalIsShown ?
                    <Fragment>
                        <DeleteModal
                            idItemToDelete={this.state.idItemToDelete}
                            deleteItem={this.deleteItem}
                        />
                        <Backdrop/>
                    </Fragment> :
                    null
                }
            </Fragment>
        )
    }
};

export default App;
