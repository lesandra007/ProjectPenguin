import React from 'react'
import "../App.css";
import {SidebarButtons} from "./SidebarButtons";

export default function Sidebar() {
    return (
        <div className="Sidebar"> 
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