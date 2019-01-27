import React, {Component} from "react";

class Br2jsx extends Component {

    renderText = () => {
        let array = this.props.text.split(/<br *\/?>/);
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            i === array.length-1 ? newArr.push(array[i]) : newArr.push(array[i], <br key={i}/>);
        }
        return newArr;
    };

    render() {
        return (
            <div className="Wrapper">
                {this.renderText()}
            </div>
        )
    }
}

export default Br2jsx;

