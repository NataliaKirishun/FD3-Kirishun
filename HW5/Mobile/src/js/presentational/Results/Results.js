import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Variables from "../Common/Variables/Variables";
import Button from "../Common/Button/Button";

import {companiesEvents} from '../../events';

class Results extends PureComponent {


    render () {

        return (

        )
    }

}

Results.propTypes = {
    filterBtnArray: PropTypes.array.isRequired,
    currentFilterState: PropTypes.number.isRequired
};

export default Results;