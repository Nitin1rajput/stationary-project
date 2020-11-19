import React from "react";

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import "./sign-in.style.scss";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };
  handleChange = e => {
      const {value,name} = e.target;

        this.setState( { [name]:value }) ;
    }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>
        <form onClick={this.handleSubmit}>
          
          <FormInput
            name="email"
            label="Email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            required
          />
          
          <FormInput
            name="password"
            label="Password"
            value={this.state.password}
            type="password"
            handleChange={this.handleChange}
            required
          />

          <Button type="submit" value="Submit Form">Sign In</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
