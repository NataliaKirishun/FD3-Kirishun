import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Variables from "../Common/Variables/Variables";
import Button from "../Common/Button/Button";

import {companiesEvents} from '../../events';

class Filter extends PureComponent {

    checkFilterState(e){
        companiesEvents.emit('changeFilterState', e.target.innerHTML);
    }

    renderFilter() {
        return this.props.filterBtnArray.map((item, index) => {
            let current = this.props.currentFilterState === index;
            return <Button
                current={current}
                key={index}
                onClick = {this.checkFilterState}
            >
                {item}
            </Button>
        });
    }

    render() {
        return (
            <FilterWrapper>
                <BtnGroupWrapper>
                    {this.renderFilter()}
                </BtnGroupWrapper>
            </FilterWrapper>
        )
    }


}

Filter.propTypes = {
    filterBtnArray: PropTypes.array.isRequired,
    currentFilterState: PropTypes.number.isRequired
};

export default Filter;

const FilterWrapper = styled.div`
    border-bottom: 1px solid ${Variables.colors.grey};
`

const BtnGroupWrapper = styled.div`
    margin: 10px;
`;
