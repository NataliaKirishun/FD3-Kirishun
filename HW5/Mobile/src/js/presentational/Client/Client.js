import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Variables from "../Common/Variables/Variables";
import Button from "../Common/Button/Button";
import {TrWrapper, TD, TableButton} from "../Table/Table"

import {companiesEvents} from '../../events';

class Client extends PureComponent {

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

    editClient = (id) => {
        companiesEvents.emit('makeClientEditable', id);
    };

    saveEditedClient = () => {
        companiesEvents.emit('editClient', {
            newName: this.newNameRef.value,
            newSurname: this.newSurnameRef.value,
            newPatronymic: this.newPatronymic.value,
            newBalance: this.newBalance.value,
            id: this.props.element.id
        });
        companiesEvents.emit('makeClientEditable', null);
    };

    handlerClick = (e) => {
        let eventType = e.target.getAttribute('data-edit-type');
        switch (eventType) {
            case 'edit' :
                this.editClient(this.props.element.id);
                break;
            case 'save' :
                this.saveEditedClient();
                break;
            case 'delete' :
                companiesEvents.emit('deleteClient', this.props.element.id);
        }
    };

    render() {
        console.log('renderClient with id', this.props.element.id);
        let status = this.props.element.balance > 0 ? 'active' : 'blocked';
        return (
            <TrWrapper onClick={(e) => this.handlerClick(e)}>
                {!this.props.isEditable ?
                    (
                        <Fragment>
                            <TD>{this.props.element.name}</TD>
                            <TD>{this.props.element.surname}</TD>
                            <TD>{this.props.element.patronymic}</TD>
                            <TD>{this.props.element.balance}</TD>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <TD>
                                <input
                                    type="text"
                                    defaultValue={this.props.element.name}
                                    ref={this.setNewName}
                                />
                            </TD>
                            <TD>
                                <input
                                    type="text"
                                    defaultValue={this.props.element.surname}
                                    ref={this.setNewSurname}
                                />
                            </TD>
                            <TD>
                                <input
                                    type="text"
                                    defaultValue={this.props.element.patronymic}
                                    ref={this.setNewPatronymic}
                                />
                            </TD>
                            <TD>
                                <input
                                    type="text"
                                    defaultValue={this.props.element.balance}
                                    ref={this.setNewBalance}
                                /></TD>
                        </Fragment>
                    )
                }
                <TD className={status}>{status}</TD>
                {
                    !this.props.isEditable ?
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
}

export default Client;






