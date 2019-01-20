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
        currentMobileCompany:[],
        currentCompanyIndex: 0,
        filterBtnArray : ['Все','Активные','Заблокированные'],
        currentFilterState:0
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
                currentMobileCompany: mobileCompaniesClients[this.state.currentCompanyIndex]
            });
            console.log(this.state);
        } catch (e) {
            console.log(e);
        }
        companiesEvents.addListener('changeCurrentCompany', this.setNewCurrent);
        companiesEvents.addListener('changeFilterState', this.setNewFilterState);
    };


    componentWillUnmount = () => {
        companiesEvents.removeListener('changeCurrentCompany', this.setNewCurrent);
        companiesEvents.removeListener('changeFilterState', this.setNewFilterState);
    };

    setNewCurrent = (company) => {
        let newIndex = this.state.mobileCompanies.indexOf(company);
        this.setState({currentCompanyIndex: newIndex});
    };

    setNewFilterState = (filter) => {
        let newIndex = this.state.filterBtnArray.indexOf(filter);
        this.setState({currentFilterState: newIndex});
    };

    render() {
        console.log('render App');
        return (
            <Fragment>
                <Header
                    btnTitles={ this.state.mobileCompanies }
                    currentCompanyIndex={ this.state.currentCompanyIndex }
                />
                <Filter
                    filterBtnArray = { this.state.filterBtnArray }
                    currentFilterState = { this.state.currentFilterState }
                />
                <Table currentMobileCompany={this.state.currentMobileCompany}/>
            </Fragment>
        )
    }
};

export default App;
