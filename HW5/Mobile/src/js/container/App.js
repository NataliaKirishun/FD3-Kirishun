import React, {PureComponent, Fragment} from "react";
import axios from "axios";
import {companiesEvents} from '../events';

import Header from "../presentational/Header/Header";
import Filter from "../presentational/Filter/Filter";
import Table from "../presentational/Table/Table";

class App extends PureComponent {

    state = {
        mobileCompanies: [],
        mobileCompaniesClients: [],
        currentCompanyIndex: 0,
        filterBtnArray: ['Все', 'Активные', 'Заблокированные'],
        currentFilterState: 0,
        isLoaded: false
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://ishop-7d7fa.firebaseio.com/mobileCompanies.json');
            const mobileCompanies = response.data.map((item) => {
                return item.companyName
            });
            const mobileCompaniesClients = response.data.map((item) => {
                return item.clients
            });
            this.setState({
                mobileCompanies,
                mobileCompaniesClients,
                currentMobileCompany: mobileCompaniesClients[this.state.currentCompanyIndex],
                isLoaded: true
            });
        } catch (e) {
            console.log(e);
        }
        companiesEvents.addListener('changeCurrentCompany', this.setNewCurrent);
        companiesEvents.addListener('changeFilterState', this.setNewFilterState);
        companiesEvents.addListener('editClient', this.editClient);
        companiesEvents.addListener('deleteClient', this.deleteClient);
        companiesEvents.addListener('addClient', this.addClient);
    };

    componentWillUnmount = () => {
        companiesEvents.removeListener('changeCurrentCompany', this.setNewCurrent);
        companiesEvents.removeListener('changeFilterState', this.setNewFilterState);
        companiesEvents.removeListener('editClient', this.editClient);
        companiesEvents.removeListener('deleteClient', this.deleteClient);
        companiesEvents.removeListener('addClient', this.addClient);
    };

    addClient = (id) => {
        console.log(id);
        let mobileClients = [...this.state.mobileCompaniesClients];
        let currentCompany = [...mobileClients[this.state.currentCompanyIndex]];
        let newClient = {
            name: null,
            surname: null,
            patronymic: null,
            balance: null,
            id: id
        };
        currentCompany.push(newClient);
        mobileClients[this.state.currentCompanyIndex]=currentCompany;
        this.setState({
            mobileCompaniesClients: mobileClients
        });

    };

    deleteClient = (id) => {
        let mobileClients = [...this.state.mobileCompaniesClients];
        let currentCompanyClients =[ ...mobileClients[this.state.currentCompanyIndex]];
        currentCompanyClients.forEach((client, index)=>{
            if (client.id === id) {
                currentCompanyClients.splice(index,1);
            }
        });
        mobileClients[this.state.currentCompanyIndex]=currentCompanyClients;
        this.setState({mobileCompaniesClients:mobileClients});
    };

    editClient = ({ newName, newSurname, newPatronymic, newBalance, id}) => {
        let changed = false;
        let mobileClients = [...this.state.mobileCompaniesClients];
        mobileClients[this.state.currentCompanyIndex].forEach((client, index)=>{
            if (client.id === id &&
                (client.name !==newName ||
                    client.surname !== newSurname ||
                    client.patronymic !== newPatronymic ||
                    client.balance !== newBalance)
            ){
                let newClient = {...client};
                newClient.name = newName;
                newClient.surname = newSurname;
                newClient.patronymic = newPatronymic;
                newClient.balance = newBalance;
                mobileClients[this.state.currentCompanyIndex][index]=newClient;
                changed = true;
            }
        });
        if (changed) {
            this.setState({mobileCompaniesClients:mobileClients})
        }

    };

    setNewCurrent = (company) => {
        let newIndex = this.state.mobileCompanies.indexOf(company);
        this.setState({currentCompanyIndex: newIndex});
    };

    setNewFilterState = (filter) => {
        let newIndex = this.state.filterBtnArray.indexOf(filter);
        this.setState({currentFilterState: newIndex});
    };

    filteredCompany = () => {
        let currentCompany = this.state.mobileCompaniesClients[this.state.currentCompanyIndex];
        switch (this.state.currentFilterState) {
            case 1:
                return currentCompany.filter((item) => {
                    return item.balance > 0
                });
            case 2:
                return currentCompany.filter((item) => {
                    return item.balance < 0
                });
            default:
                return currentCompany
        }
    };

    render() {
        console.log('render App');
        return (
            <Fragment>
                <Header
                    btnTitles={this.state.mobileCompanies}
                    currentCompanyIndex={this.state.currentCompanyIndex}
                />
                <Filter
                    filterBtnArray={this.state.filterBtnArray}
                    currentFilterState={this.state.currentFilterState}
                />
                { this.state.isLoaded ?
                    <Table
                        filteredCompany={this.filteredCompany()}
                    /> : 'isLoading........'
                }

            </Fragment>
        )
    }
};



export default App;
