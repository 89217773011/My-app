import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import './style.authorisation.css';
import Header from './../../components/Header/header.component';
import { history } from '../../index';

class Authorisation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            registeredPassword: ''
        }
        this.handleSubmitAuthorisation = this.handleSubmitAuthorisation.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handleRegisteredPassword = this.handleRegisteredPassword.bind(this);
    }

    handleSubmitAuthorisation (event) {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem(this.state.userName));
        if (!!users) {
            if (
                users.login === this.state.userName &&
                users.password === this.state.registeredPassword 
            ) {
                this.props.onLogin(users);
                history.push('/addition');
                alert('You are signed in');
            } else {
                alert('Please, check your password');
            }
        } else {
            alert('You are not registrated');
        } 
    };
    handleUserName (event) {
        this.setState({ userName: event.target.value });   
    };
    handleRegisteredPassword (event) {
        this.setState({ registeredPassword: event.target.value });
    };

    render () {
        return (
            <div>
                <Header />
                <div className = 'authorisation_form'>
                    <Segment inverted>
                        <Form inverted onSubmit = {this.handleSubmitAuthorisation}>
                        <Form.Group widths='equal'>
                            <Form.Input 
                                fluid label='Login' 
                                placeholder='Enter your login' 
                                value = { this.state.userName }
                                onChange = { (e) => this.handleUserName(e) }
                                required
                                />
                            <Form.Input 
                                fluid label='Password' 
                                placeholder='Enter your password' 
                                type = 'password'
                                value = { this.state.registeredPassword }
                                onChange = { (e) => this.handleRegisteredPassword(e) }
                                required
                                />
                        </Form.Group>
                        <Button 
                            type='submit'
                            >
                                Submit
                            </Button>
                        </Form>
                    </Segment>
                </div>
                <p className = 'authorisation_form'> You can register <Link to='/registration'>here</Link></p>
            </div>
        )
    }
}

export default Authorisation;