import React, {Component} from "react";

class Br2jsx extends Component {

    renderText = () => {
        let array = this.props.text.split(/<br *\/?>/);
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            newArr.push(array[i], <br/>);
        }
        return newArr;
    };

    render() {
        return (
            <div class="Wrapper">
                {this.renderText()}
            </div>
        )
    }
}

export default Br2jsx;

