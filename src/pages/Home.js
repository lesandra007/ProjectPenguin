import React from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

export default function Home() {
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', backgroundColor: '#324376'}}>
            <Sidebar/>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Title title='PROJECT PENGUIN'/>
            </div>
        </div>
    );
}