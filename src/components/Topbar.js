import React from 'react'
import "../App.css";
import {LogoutButton} from "./SidebarButtons";

export default function Topbar() {
    return (
        <div className="Topbar"> 
            <div className='title' style={{ textAlign: 'center', color: 'silver', fontSize: '25px', fontWeight: 'bold', margin: '0px' }}>Pengy</div>
            <div className='level' style={{ textAlign: 'center', color: 'silver', fontSize: '25px', fontWeight: 'bold', margin: '0px' }}>Level 20</div>
            {/* <ui className="TopbarList">
                <span 
                    className="tab" 
                    onClick={()=>{window.location.pathname = LogoutButton.link}}
                    id={window.location.pathname === LogoutButton.link ? "active" : ""}>
                    <div id="icon">{LogoutButton.icon}</div>
                    <div id="title">{LogoutButton.title}</div>
                </span>
            </ui> */}
        </div>
    )
}