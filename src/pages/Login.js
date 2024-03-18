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

    return (
        <div className={'outerContainer'}>
            <div className={'logoContainer'}>
                <img src={penguinlogo} alt="logo" className="logo"/>
            </div>
            <div className={'titleContainer'}>
                <div>Project Penguin</div>
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
        </div>
    );
}