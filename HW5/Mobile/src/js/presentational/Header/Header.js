import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Variables from "../Common/Variables/Variables";
import Button from "../Common/Button/Button";
import {companiesEvents} from '../../events';


class Header extends PureComponent {

    checkCurrentCompany = (e) => {
        companiesEvents.emit('changeCurrentCompany', e.target.innerHTML);
    };

    renderBtnGroup() {
        return this.props.btnTitles.map((item, index) => {
            let isCurrent = this.props.currentCompanyIndex === index;
            return <Button
                rounded
                key = {index}
                current = {isCurrent}
                onClick = {this.checkCurrentCompany}
            >
                {item}
            </Button>
        });
    };

    render() {
        console.log('render HEADER');
        return (
            <HeaderWrapper>
                <BtnGroupWrapper>
                    {this.renderBtnGroup()}
                </BtnGroupWrapper>
                <CurrentCompany>Компания: <span>{this.props.btnTitles[this.props.currentCompanyIndex] }</span></CurrentCompany>
            </HeaderWrapper>
        )
    }

}

Header.defaultProps = {
    btnTitles: [],
};

Header.propTypes = {
    btnTitles: PropTypes.array.isRequired,
    currentCompanyIndex: PropTypes.number
};

export default Header;

const HeaderWrapper = styled.div`
    border-bottom: 1px solid ${Variables.colors.grey}
`;

const BtnGroupWrapper = styled.div`
    margin: 10px;
`;

const CurrentCompany = styled.span`
        line-height: 40px;
        font-size: 20px;
        padding: 10px;
        
        & span {
            font-weight: 600;
        }        
`;