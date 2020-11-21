import React from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in.style.scss";

import { auth,signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" });
      
    } catch (error) {
      console.log(error);
    }
    
  };
  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    const { email,password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            value={email}
            type="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            label="Password"
            value={password}
            type="password"
            handleChange={this.handleChange}
            autoComplete="on"
            required
          />
          <div className='buttons'>
          <Button type="submit" value="Submit Form">
            Sign In
          </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
          </div>
          
        </form>
      </div>
    );
  }
}

export default SignIn;
