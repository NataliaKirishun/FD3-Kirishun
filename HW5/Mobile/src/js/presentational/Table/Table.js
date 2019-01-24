import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Variables from "../Common/Variables/Variables";
import Button from "../Common/Button/Button";

import {companiesEvents} from '../../events';

class Table extends PureComponent {

    state = {
        idClientToEdit: null
    };

    newNameRef = null;
    newSurnameRef = null;
    newPatronymic = null;
    newBalance = null;

    setNewName = (ref) => {
        this.newNameRef = ref;
    };

    setNewSurname = (ref) => {
        this.newSurnameRef = ref;
    };

    setNewPatronymic = (ref) => {
        this.newPatronymic = ref;
    };

    setNewBalance = (ref) => {
        this.newBalance = ref;
    };

    handlerClick = (e, id) => {
        let eventType = e.target.getAttribute('data-edit-type');
        switch (eventType) {
            case 'edit' :
                this.setState({idClientToEdit: id});
                break;
            case 'save' :
                this.saveNewClientsData();
                break;
            case 'delete' :
                companiesEvents.emit('deleteClient', id);
                break;
            case 'add' :
                this.addNewClient();
        }
    };

    addNewClient = () => {
        let randomId=Math.floor(Math.random()*1000);
        companiesEvents.emit('addClient', randomId);
        this.state.idClientToEdit=randomId;
    };

    saveNewClientsData = () => {
        companiesEvents.emit('editClient', {
            newName: this.newNameRef.value,
            newSurname: this.newSurnameRef.value,
            newPatronymic: this.newPatronymic.value,
            newBalance: this.newBalance.value,
            id: this.state.idClientToEdit
        });
        this.setState({idClientToEdit: null});
    };

    renderTHead = () => {
        let headerArray = ['Фамилия', 'Имя', 'Отчество', 'Баланс', 'Статус', 'Редактировать', 'Удалить'];
        return ( <TrWrapper>
                {headerArray.map((item, index) => <TH key={index}> {item} </TH>)}
            </TrWrapper>
        )
    };

    renderTBody = () => {
        console.log(this.props.filteredCompany);
        return this.props.filteredCompany.map((element) => {
                let status = element.balance > 0 ? 'active' : 'blocked';
                return (
                    <TrWrapper key={element.id} onClick={(e) => {
                        this.handlerClick(e, element.id)
                    }}>
                        {this.state.idClientToEdit !== element.id ?
                            (
                                <Fragment>
                                    <TD>{element.name}</TD>
                                    <TD>{element.surname}</TD>
                                    <TD>{element.patronymic}</TD>
                                    <TD>{element.balance}</TD>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <TD>
                                        <input
                                            type="text"
                                            defaultValue={element.name}
                                            ref={this.setNewName}
                                        />
                                    </TD>
                                    <TD>
                                        <input
                                            type="text"
                                            defaultValue={element.surname}
                                            ref={this.setNewSurname}
                                        />
                                    </TD>
                                    <TD>
                                        <input
                                            type="text"
                                            defaultValue={element.patronymic}
                                            ref={this.setNewPatronymic}
                                        />
                                    </TD>
                                    <TD>
                                        <input
                                            type="text"
                                            defaultValue={element.balance}
                                            ref={this.setNewBalance}
                                        /></TD>
                                </Fragment>
                            )
                        }
                        <TD className={status}>{status}</TD>
                        {
                            this.state.idClientToEdit !== element.id ?
                                (<TD>
                                    <TableButton data-edit-type="edit">Редактировать</TableButton>
                                </TD>) :
                                (<TD>
                                    <TableButton
                                        data-edit-type="save">
                                        Сохранить
                                    </TableButton>
                                </TD>)
                        }

                        <TD><TableButton data-edit-type="delete">Удалить</TableButton></TD>
                    </TrWrapper>
                )
            }
        )
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
const TrWrapper = styled.tr``;
const TBody = styled.tbody`
    text-align: center;      
   
`;

const TH = styled.th`
    padding: 20px;  
`;

const TD = styled.td`
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

const TableButton = styled(Button)`
     border: 1px solid ${Variables.colors.grey};
     background-color: ${Variables.colors.light_grey};  
`;

const WrapperButton = styled.div`
    margin: 20px;
`;




