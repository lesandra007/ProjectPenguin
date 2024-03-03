import React from 'react'
import "../App.css";
import {SidebarButtons} from "./SidebarButtons";
import penguinlogo from "../penguinlogo.png";

export default function Sidebar() {
    return (
        <div className="Sidebar"> 
            <div className="Icon">
                <img src={penguinlogo} alt="logo"/>
                <h3 style={{ textAlign: 'center', color: 'white', fontSize: '15px', margin: '0' }}>Level 1</h3>
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
        </div>
    )
}