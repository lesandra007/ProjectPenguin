import React from 'react'
import "../App.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
import penguinlogo from "../penguinlogo.png";

export default function Login() {
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

    const handleLogin = () => {
        if(email && password){
            Parse.User.logIn(email, password).then(function(user) {
               console.log('User created successful with name: ' + user.get("username"));
               navigate('/Home');
       }).catch(function(error){
           console.log("Error: " + error.code + " " + error.message);
           console.log("email: " + email + " password: " + password);
           setErrorMessage('Incorrect email or password.');
      });
        }
        else{
            setErrorMessage('Please enter both email and password.');
        }
    }

    const redirectToSignUp = () => {
        navigate('/Signup');
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
                    <div>Welcome back!</div>
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
                    <input className={"button"} type="button" onClick={handleLogin} value={"Log In"} />
                </div>
                <div>
                    {errorMessage && (
                            <p style={{textAlign: 'center', color: 'red'}}>{errorMessage}</p>
                    )}
                </div>
                <div style={{ height: '8px' }}></div>
                <div style={{textAlign: 'center'}}>
                    <a href="" onClick={redirectToSignUp} style={{display: 'inline-block'}}>Don't have an account? Sign Up Here!</a>
                </div>
            </div>
        </div>
    );

}

