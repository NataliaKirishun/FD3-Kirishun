import React, {Component} from "react";
import RainbowFrames from "./RainbowFrame";


class App extends Component {

    render() {
        let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
        return (
            <RainbowFrames colors={colors}>
                Hello!
            </RainbowFrames>
        );
    }
};

export default App;
