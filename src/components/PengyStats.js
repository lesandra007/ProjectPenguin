import React from 'react';

export default function PengyStats({ title, number }) {
    return (
        <div style={{width: '100px', height: '45px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
            <div style={{ fontSize: '25px', fontWeight:'bold', color: 'silver', margin: '5px'}}>
                {number}   
            </div>
            <div style={{ fontSize: '20px', fontWeight:'bold', color: '#F39237'}}>
                {title}
            </div>
        </div>
    );
}