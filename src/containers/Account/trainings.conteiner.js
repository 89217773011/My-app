import React, { Component } from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.account.css';

class Trainings extends Component {
    constructor(props) {
        super(props);
        this.removeTraining = this.removeTraining.bind(this);
    }

    removeTraining(event) {
        event.preventDefault();
        this.props.onRemoving();
        const currentUserData = JSON.parse(localStorage.getItem(this.props.appState.login));
        const newUserData = JSON.stringify({
            ...currentUserData,
            trainings: currentUserData.trainings.filter((training, i, trainings) => i < trainings.length - 1)
        });
        localStorage.setItem(this.props.appState.login, newUserData);
    }

    render () {
        return (
            <Segment inverted>
                <Button 
                    compact 
                    circular 
                    floated = 'right'
                    >  
                        <Link to='/'>
                            Log out
                        </Link>
                </Button>
                <Form.Field>
                    <h4>Hello, { this.props.appState.login }</h4>
                </Form.Field>
                <div className = 'addition_form'>
                    <Form onSubmit = {this.removeTraining}>
                        <Form.Field style = {{ display: 'flex' }}>                                                   
                            <div style = {{ margin: '10px' }}> { this.props.appState.trainings.map((it, i) => <p key = { i }>Type of training: { it.training }</p>) }</div>
                            <div style = {{ margin: '10px' }}> { this.props.appState.trainings.map((it, i) => <p key = { i }>Trainer: { it.trainer }</p>) }</div>
                            <div style = {{ margin: '10px' }}> { this.props.appState.trainings.map((it, i) => <p key = { i }>Date: { it.date }</p>) }</div>
                            <div style = {{ margin: '10px' }}> { this.props.appState.trainings.map((it, i) => <p key = { i }>Time: { it.time }</p>) }</div>
                            <div style = {{ margin: '10px' }}> { this.props.appState.trainings.map((it, i) => <p key = { i }>Towel: { String(it.towel) }</p>) }</div>
                            <div style = {{ margin: '10px' }}> { this.props.appState.trainings.map((it, i) => <p key = { i }>Solarium: { String(it.solarium) }</p>) }</div>
                        </Form.Field>
                        <Button 
                            type='submit'
                            >
                             Remove training
                        </Button>
                    </Form>
                </div>    
                <p className = 'addition_form'>You can add one more <Link to='/addition'>here</Link></p>   
            </Segment> 
        )
    }
};

export default Trainings;

