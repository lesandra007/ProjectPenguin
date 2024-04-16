import React from 'react';

export default function PengyStats({ title, number }) {
    return (
        <div style={{width: '100%', height: '6vh', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{ fontSize: '15px', fontWeight:'bold', color: '#FFFFFF', width: '5vh', marginRight:'3vh', textAlign: 'right'}}>
                {number}   
            </div>
            <div style={{ fontSize: '15px', fontWeight:'bold', color: '#F39237'}}>
                {title}
            </div>
        </div>
    );
}