import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";

import "./index.less";

import App from "./js/container/App";


const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.querySelector('#root'));


