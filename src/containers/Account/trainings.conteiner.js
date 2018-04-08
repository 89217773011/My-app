import React, { Component } from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.account.css';

class Trainings extends Component {
    constructor(props) {
        super(props);
        
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
                    <Form>
                        <Form.Field>
                            <p>Type of training: { this.props.appState.trainings }</p>
                            <p>Trainer: { this.props.appState.trainer }</p>
                            <p>Date: { this.props.appState.date }</p>
                            <p>Time: { this.props.appState.time }</p>
                            <p>Towel: { this.props.appState.towel }</p>
                            <p>Solarium: { this.props.appState.solarium }</p>
                        </Form.Field>
                    </Form>
                </div>    
                <p className = 'addition_form'>You can add one more <Link to='/addition'>here</Link></p>   
            </Segment> 
        )
    }
};

export default Trainings;

