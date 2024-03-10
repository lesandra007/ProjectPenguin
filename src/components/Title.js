import React from 'react';

export default function Title({ title }) {
    return (
        <div style={{width: '100%', height: '15vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{ fontSize: '10vh', color: '#F39237', fontWeight: 'bold', fontFamily: 'Andale Mono, monospace', fontVariant: 'small-caps' }}>
                {title}
            </div>
            <hr style={{width: '80%'}}></hr>
        </div>
    );
}