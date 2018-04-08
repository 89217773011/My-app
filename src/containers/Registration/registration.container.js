import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.registration.css";
import { Button, Segment, Form } from "semantic-ui-react";
import Header from "./../../components/Header/header.component";
import { history } from "../../index";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      confirmation: "",
      email: ""
    };

    this.handleSubmitRegistration = this.handleSubmitRegistration.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmationChange = this.handleConfirmationChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  validateRegistrationForm() {
    if (localStorage.getItem(this.state.login)) {
      alert("This user already exists");
      return false;
    }
    if (this.state.password === this.state.confirmation) {
      return true;
    } else {
      alert("Password and confirmation doesn't match");
      return false;
    }
  }

  setNewUser() {
    const { login, email, password } = this.state;
    localStorage.setItem(
      login,
      JSON.stringify({ login, email, password, trainings: [] })
    );
    history.push("/");
  }

  handleSubmitRegistration(event) {
    event.preventDefault();
    if (this.validateRegistrationForm()) {
      this.setNewUser();
    }
  }
  handleLoginChange(event) {
    this.setState({ login: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleConfirmationChange(event) {
    this.setState({ confirmation: event.target.value });
    if (this.state.password === event.target.value) {
    }
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="authorisation_form">
          <Segment inverted>
            <Form inverted onSubmit={this.handleSubmitRegistration}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Login"
                  placeholder="Enter your login"
                  value={this.state.login}
                  onChange={e => this.handleLoginChange(e)}
                  required
                />
                <Form.Input
                  fluid
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  required
                />
                <Form.Input
                  fluid
                  label="Password confirmation"
                  placeholder="Enter your password again"
                  type="password"
                  value={this.state.confirmation}
                  onChange={this.handleConfirmationChange}
                  required
                />
                <Form.Input
                  fluid
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  required
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </div>
        <p className="registration_form">
          If you are registered click <Link to="/">here</Link>
        </p>
      </div>
    );
  }
}

export default Registration;
