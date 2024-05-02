import React from 'react'
import "../App.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
import penguinlogo from "../penguinlogo.png";
import { PasswordRounded } from '@mui/icons-material';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const onButtonClick = () => {
        if(email && password){
            navigate('/Home');
        }
        else{
            setErrorMessage('Please enter both email and password.');
        }
    }
  
    const handleSignUp = async () => {
        if(email && password){
            try {
                 var user = new Parse.User();
                 user.set("username", email);
                 user.set("email", email);
                 user.set("password", password);
                 
                user.signUp().then(function(user) {
                    navigate('/Home');
                   console.log('User created successful with username: ' + user.get("username"));
                }).catch(function(error){
                    setErrorMessage('Incorrect email or password format.');
                });  
            } catch (error) {
                console.error('Error saving new User: ', error);
                alert('Failed to add user. Please try again.');
            }
        }
        else{
            setErrorMessage('Please enter both email and password.');
        }
    }

    const redirectToLogin = () => {
        navigate('/');
    }
    
    return (
        <div className={'outerContainer'}>
            <div className='loginBox'>
                <div className={'logoContainer'}>
                    <img src={penguinlogo} alt="logo" className="logo"/>
                </div>
                <div className={'titleContainer'}>
                    <div>Project Penguin</div>
                </div>
                <div className={'greetingContainer'}>
                    <div>Create Account</div>
                </div>
                <div classname={'inputContainer'} >
                    <input 
                        value={email}
                        placeholder={"Email"}
                        onChange={(input) => setEmail(input.target.value)}
                        type="text"
                    />
                </div>
                <div classname={'inputContainer'} >
                    <input
                        value={password}
                        placeholder={"Password"}
                        onChange={(input) => setPassword(input.target.value)}
                        type="password"
                        className="passwordInput"
                    />
                </div>
                <div className={'buttonContainer'}>
                    <input className={"button"} type="button" onClick={handleSignUp} value={"Sign Up"} />
                </div>
                <div>
                    {errorMessage && (
                            <p style={{textAlign: 'center', color: 'red'}}>{errorMessage}</p>
                    )}
                </div>
                <div style={{ height: '8px' }}></div>
                <div style={{textAlign: 'center'}}>
                    <a href="" onClick={redirectToLogin} style={{display: 'inline-block'}}>Already have an account? Log In Here!</a>
                </div>
            </div>
        </div>
    );

}