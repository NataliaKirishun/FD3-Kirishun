import React, {Component, Fragment} from "react";
import InputComponent from "../presentational/InputComponent";
import ListComponent from "../presentational/ListComponent";

class App extends Component {

    state = {
        inputText: '',
        isSorted: false,
        list: [
            {
                word: 'бургомистрство',
                id: 1
            },
            {
                word: 'высокопревосходительство',
                id: 2
            },
            {
                word: 'герольдство',
                id: 3
            },
            {
                word: 'делопроизводительница',
                id: 4
            },
            {
                word: 'констрстратегия',
                id: 5
            },
            {
                word: 'частнопредпринимательский',
                id: 6
            },
            {
                word: 'переосвидетельствоваться',
                id: 7
            },
            {
                word: 'контрстратегия',
                id: 8
            },
            {
                word: 'монстрский',
                id: 9
            }
        ]
    };

    handlerSort = () => {
        this.setState({isSorted: !this.state.isSorted});
    };

    handlerText = (evt) => {
        this.setState({inputText: evt.target.value});
    };

    getItemsList = () => {
        const itemsList = this.state.inputText ?
            this.state.list.filter(item =>
                item.word.toLowerCase().indexOf(this.state.inputText.toLocaleLowerCase()) !== -1)
            : this.state.list.slice();
        return this.state.isSorted ? itemsList.sort(this.sortedFunction) : itemsList;
    };

    sortedFunction = (item1,item2) => (
            item1.word > item2.word ? 1 : -1
    );

    render() {
        return (
            <Fragment>
                <InputComponent
                    handlerSort={this.handlerSort}
                    handlerText={this.handlerText}
                />
                <ListComponent list={this.getItemsList()}/>
            </Fragment>
        )
    }
};

export default App;
