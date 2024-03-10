import React from 'react'
import "../App.css";
import {SidebarButtons} from "./SidebarButtons";
import {LogoutButton} from "./SidebarButtons";
import penguinlogo from "../penguinlogo.png";

export default function Sidebar() {
    return (
        <div className="Sidebar"> 
            <div className="Icon">
                <img src={penguinlogo} alt="logo"/>
                <h2 style={{ textAlign: 'center', color: 'white', margin: '0px' }}>Pengy</h2>
                <h3 style={{ textAlign: 'center', color: 'silver', fontSize: '15px', margin: '8px' }}>Level 1</h3>
            </div>
            <ul className="SidebarList">
            
                {SidebarButtons.map((val,key)=> {
                    return (
                        <li 
                            key={key} 
                            className="tab" 
                            onClick={()=>{window.location.pathname = val.link}}
                            id={window.location.pathname === val.link ? "active" : ""}
                            >
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            <ui className="SidebarList">
                    <li 
                        className="tab" 
                        onClick={()=>{window.location.pathname = LogoutButton.link}}
                        id={window.location.pathname === LogoutButton.link ? "active" : ""}>
                        <div id="icon">{LogoutButton.icon}</div>
                        <div id="title">{LogoutButton.title}</div>
                    </li>
                </ui>
        </div>
    )
}