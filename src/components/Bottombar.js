import React from 'react'
import "../App.css";
import {SidebarButtons} from "./SidebarButtons";

export default function Buttombar() {
    return (
        <div className="Bottombar"> 
            <div className="BottombarList">
                {SidebarButtons.map((val,key)=> {
                    return (
                        <span 
                            key={key} 
                            className="tab" 
                            onClick={()=>{window.location.pathname = val.link}}
                            id={window.location.pathname === val.link ? "active" : ""}
                            >
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </span>
                    );
                })}
            </div>
        </div>
    )
}