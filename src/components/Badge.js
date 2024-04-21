import React from 'react'
import "../App.css";
// import penguinlogo from "../penguinlogo.png";

export default function Badge({title, description}){
    return(
        // <div className='badgeButton'>
        //     {/* <img src={penguinlogo} alt="logo" className="logo"/> */}
        //     <div style={{fontWeight: 'bold'}}>{title}:</div>
        //     <div style={{color: 'silver'}}>{description}</div>
        // </div>

        // <div className='badgeButton'>{title}</div>

        <div>
            <button className='badgeButton'>
                <span className="title">{title}</span>
                <hr></hr>
                <p>{description}</p>
            </button>
        </div>
    )
}