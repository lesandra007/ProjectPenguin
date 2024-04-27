import React from 'react'
import "../App.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import penguinlogo from "../penguinlogo.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('Home');
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
                        type="text"
                        classname="inputBox"
                    />
                </div>
                <div className={'buttonContainer'}>
                    <input className={"button"} type="button" onClick={onButtonClick} value={"Log In"} />
                </div>
                <div style={{ height: '8px' }}></div>
                <div style={{textAlign: 'center'}}>
                    <a href="" onClick={redirectToSignUp} style={{display: 'inline-block'}}>Don't have an account? Sign Up Here!</a>
                </div>
            </div>
        </div>
    );

}

