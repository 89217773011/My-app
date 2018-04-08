import React, { Component } from 'react';
import { connect } from 'react-redux';
import Registration from './../Registration/registration.container';
import Addition from '../Account/addition.container';
import Authorisation from '../Authorisation/authorisation.container';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Trainings from '../Account/trainings.conteiner';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            email: '',
            trainings: []
        }
        this.setStateOnLogin = this.setStateOnLogin.bind(this);
        this.updateStateOnAddition = this.updateStateOnAddition.bind(this);
    }
    setStateOnLogin(state) {
        this.setState(state);
    }
    updateStateOnAddition(training) {
        this.setState({
            ...this.state,
            trainings: this.state.trainings.concat(training)
        });
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Route  exact path = '/' render = { () => <Authorisation onLogin = { this.setStateOnLogin } /> } /> 
                <Route  path = '/registration' component = { Registration } />
                <Route  path = '/addition' render = { () => <Addition appState = { this.state } onAddition={this.updateStateOnAddition}/> } />
                <Route  path = '/currenttrainings' render = { () => <Trainings appState = { this.state } /> } />
            </div>
        )
    };
};

export default App;
