import React from 'react';

export default function Title({ title }) {
    return (
        <div style={{ fontSize: '10vh', color: '#F39237', fontWeight: 'bold', fontFamily: 'Andale Mono, monospace', fontVariant: 'small-caps' }}>
            {title}
        </div>
    );
}