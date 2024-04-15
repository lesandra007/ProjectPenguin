import React from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

const itemListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
    gap: '10px', // Gap between items
};

export default function Home() {
    return (
        <div style={{width: '100vh', height: '100vh', display: 'flex', flexDirection: 'row', backgroundColor: '#1F2947'}}>
            <Sidebar/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1'}}>
                <Title title='Project Penguin'/>
                <div style={itemListStyle}>
                    <div style={{backgroundColor:'#010101'}}>
                        Tit
                    </div>
                    <div style={{backgroundColor:'#010101'}}>
                        Title
                    </div>
                </div>
            </div>
        </div>
    );
}