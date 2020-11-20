import React from 'react';

import SignIn from '../sign-in/sigin-in.component';
import SignUp from '../sign-up/sign-up.componrnt'
import './sign-in-sign-up.style.scss';


const SignInSignUp = () => (
    <div className= 'sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUp;