import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment, Form } from 'semantic-ui-react';
import { TIME, TRAINER, TRAINING } from './../../const';
import './style.account.css';
import { history } from '../../index';
import moment from 'moment';

class Addition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            training: '',
            trainer: '',
            date: '',
            time: '',
            towel: false,
            solarium: false
        };
        this.handleSubmitAdditionForm = this.handleSubmitAdditionForm.bind(this);
        this.handleTraining = this.handleTraining.bind(this);
        this.handleTrainer = this.handleTrainer.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleTowel = this.handleTowel.bind(this);
        this.handleSolarium = this.handleSolarium.bind(this);
    }
    
    validateAdditionForm () {
		if (
            this.state.training !== '' &&
            this.state.trainer !== '' &&
            this.state.time !== '' 
        ) {
            return true;
        } else {
			return alert('something wrong with addition, please, check your data');
		}
    }
    setNewTraining() {
        const newTraining = {
            training: this.state.training,
            trainer: this.state.trainer,
            date: this.state.date,
            time: this.state.time,
            towel: this.state.towel,
            solarium: this.state.solarium
        }
        this.props.onAddition(newTraining);
        const currentUserData = JSON.parse(localStorage.getItem(this.props.globalState.login));
        const newUserData = JSON.stringify({
            ...currentUserData,
            trainings: currentUserData.trainings.concat(newTraining)
        });
        localStorage.setItem(this.props.globalState.login, newUserData);
		console.log(localStorage.getItem('trainings'));
		history.push('/currenttrainings');
	}
    handleSubmitAdditionForm (event) {
        event.preventDefault();
        if (
            !!this.validateAdditionForm ()
        )  {
            this.setNewTraining()
        } 
    }
    handleTraining (event) {       
        this.setState({ training: event.target.value });
    }
    handleTrainer (event) {
        this.setState({ trainer: event.target.value });
    }
    handleDate (event) {
        this.setState({ date: event.target.value });
    }
    handleTime (event) {
        this.setState({ time: event.target.value });
    }
    handleTowel (event) {
        this.setState({ towel: event.target.checked ? true : false });
    }
    handleSolarium (event) {
        this.setState({ solarium: event.target.checked ? true : false });
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
                    <h4>Hello, { this.props.globalState.login }</h4>
                </Form.Field >
                <Form className="segment" onSubmit = {this.handleSubmitAdditionForm} style={{margin: "auto", maxWidth: "70%"}}>
                    <Form.Field >
                        <label>Type of training</label>
                        <select
                            placeholder='Type of training' 
                            value = {this.state.training}
                            onChange = {(e) => this.handleTraining(e)}
                            >
                                { TRAINER.map((trainer, i) => <option key = { i }>{trainer}</option>) }
                        </select>
                    </Form.Field>
                    <Form.Field>
                        <label>Trainer</label>
                        <select  
                            placeholder='Trainer' 
                            value = { this.state.trainer }
                            onChange = {this.handleTrainer}
                            >
                                { TRAINING.map((training, i) => <option key = { i }>{training}</option>) }  
                        </select> 
                    </Form.Field>
                    <Form.Field>  
                        <label>Date</label>
                        <input  
                            type = 'date'
                            placeholder = 'Date' 
                            value = { this.state.date }
                            onChange = {this.handleDate}
                            min = { (() => moment().add(1, 'days').format('YYYY-MM-DD'))() }
                            required
                            >   
                        </input>
                    </Form.Field>                        
                    <Form.Field>  
                        <label>Time</label>
                        <select  
                            placeholder='Time' 
                            value = { this.state.time }
                            onChange = {this.handleTime}
                            >
                                { TIME.map((time, i) => <option key = { i }>{time}</option>) }
                        </select>
                    </Form.Field>
                    <Form.Field>                        
                        <label>Additional services</label>
                    </Form.Field>
                    <Form.Field>
                        <label>Towel</label>
                        <input 
                            type = 'checkbox' 
                            value='towel'
                            onChange = { this.handleTowel }
                        />    
                    </Form.Field>
                    <Form.Field>
                        <label>Solarium</label>
                        <input 
                            type = 'checkbox'                    
                            value = 'solarium'
                            onChange = { this.handleSolarium }
                        /> 
                    </Form.Field>
                    <button 
                        onClick = { value => this.handleSubmitAdditionForm(value) }
                        >
                            Submit
                    </button>
                </Form>
                <p className = 'addition_form'>You can see your current trainings <Link to='/currenttrainings'>here</Link></p>
            </Segment>
        )
    }
}

export default Addition;