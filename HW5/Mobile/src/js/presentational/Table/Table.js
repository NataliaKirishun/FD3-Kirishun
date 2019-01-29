import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Variables from "../Common/Variables/Variables";
import Button from "../Common/Button/Button";
import Client from "../Client/Client"

import {companiesEvents} from '../../events';

class Table extends PureComponent {

   state = {
        idClientToEdit: null
    };

    componentDidMount() {
        companiesEvents.addListener('makeClientEditable', this.setNewIdClientToEdit);
    };

    componentWillUnmount = () => {
        companiesEvents.removeListener('makeClientEditable', this.setNewIdClientToEdit);
    };

    setNewIdClientToEdit=(id)=>{
        this.setState({ idClientToEdit: id});
    };

    handlerClick = (e) => {
      this.addNewClient();
    };

    addNewClient = () => {
        let randomId=Math.floor(Math.random()*1000);
        companiesEvents.emit('addClient', randomId);
        this.setState({ idClientToEdit: randomId});
    };



    renderTHead = () => {
        let headerArray = ['Фамилия', 'Имя', 'Отчество', 'Баланс', 'Статус', 'Редактировать', 'Удалить'];
        return ( <TrWrapper>
                {headerArray.map((item, index) => <TH key={index}> {item} </TH>)}
            </TrWrapper>
        )
    };

    renderTBody = () => {
        return this.props.filteredCompany.map((element)=>{
            return <Client
                key={element.id}
                element={element}
                isEditable = {this.state.idClientToEdit === element.id}
            />
        })
    };

    render() {
        console.log('renderTable');
        return (
            <Fragment>
                <TableWrapper>
                    <THeadWrapper>
                        {this.renderTHead()}
                    </THeadWrapper>
                    <TBody>
                    {this.renderTBody()}
                    </TBody>
                </TableWrapper>
                <WrapperButton>
                    <TableButton data-edit-type="add" onClick={(e)=>this.handlerClick(e)}>Добавить клиента</TableButton>
                </WrapperButton>
            </Fragment>
        )
    }

}

Table.propTypes = {
    filteredCompany: PropTypes.array
};

export default Table;


const TableWrapper = styled.table`
    border-collapse: collapse;
`;
const THeadWrapper = styled.thead`
    background-color: ${Variables.colors.light_pink};   
`;
export const TrWrapper = styled.tr``;
const TBody = styled.tbody`
    text-align: center;      
   
`;

const TH = styled.th`
    padding: 20px;  
`;

export const TD = styled.td`
    padding: 20px;   
    height: 100%;
    border-bottom: solid 1px ${Variables.colors.dark_pink};
    
    &.active {
        background-color: ${Variables.colors.light_green};
    }
    
    &.blocked {
        background-color: ${Variables.colors.red};
    }     
`;

export const TableButton = styled(Button)`
     border: 1px solid ${Variables.colors.grey};
     background-color: ${Variables.colors.light_grey};  
`;

const WrapperButton = styled.div`
    margin: 20px;
`;




