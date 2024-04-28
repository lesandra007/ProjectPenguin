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
                <div className='title' style={{ textAlign: 'center', color: 'white', fontSize: '25px', fontWeight: 'bold', margin: '0px' }}>Pengy</div>
                <div className='level' style={{ textAlign: 'center', color: 'silver', fontSize: '15px', margin: '8px' }}>Level 20</div>
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
                <span 
                    className="tab" 
                    onClick={()=>{window.location.pathname = LogoutButton.link}}
                    id={window.location.pathname === LogoutButton.link ? "active" : ""}>
                    <div id="icon">{LogoutButton.icon}</div>
                    <div id="title">{LogoutButton.title}</div>
                </span>
            </ui>
        </div>
    )
}