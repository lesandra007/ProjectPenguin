import React from 'react'
import "../App.css";
// import penguinlogo from "../penguinlogo.png";

export default function ShopItem(){
    return(
        <div style={{
            width: '100px', height: '100px', 
            backgroundColor: 'white',
            borderRadius: '5px',
        }}>
            {/* <img src={penguinlogo} alt="logo" className="logo"/> */}
        </div>
    )
}