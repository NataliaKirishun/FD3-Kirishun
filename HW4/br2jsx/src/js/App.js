import React, {Component} from "react";
import Br2jsx from "./Br2jsx";


class App extends Component {
    render() {
        let text="первый<br>второй<br/>третий<br />последний";
        return <Br2jsx text={text}/>;
    }
};

export default App;
