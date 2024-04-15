import React from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import PengyStats from '../components/PengyStats';

const itemListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
    width: '90%',
    gap: '5vw', // Gap between items
    marginTop: '5vh',
    marginLeft: '5vh',
    marginRight: '5vh',
};

export default function Home() {
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row', backgroundColor: '#1F2947'}}>
            <Sidebar/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1'}}>
                <Title title='Project Penguin'/>
                <div style={itemListStyle}>

                    {/* PENGY STATS BOX */}
                    <div style={{backgroundColor:'#416181', height: '35vh', padding: '20px'}}>
                        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                            <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                PENGY STATS
                            </div>
                            <hr style={{width: '100%'}}></hr>
                        </div>
                        <PengyStats title="Applications" number="28"/>
                        <PengyStats title="Interviews" number="2"/>
                        <PengyStats title="Questions" number="10"/>
                        <PengyStats title="Hacks" number="7"/>
                    </div>

                    {/* PENGY Character BOX */}
                    <div style={{backgroundColor:'#416181', height: '35vh'}}>
                        <div style={{width: '100%', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <div style={{ fontSize: '5vh', color: '#FFFFFF', fontWeight: 'bold'}}>
                                Pengy Stats
                            </div>
                            <hr style={{width: '80%'}}></hr>
                        </div>
                        <PengyStats title="Applications" number="28"/>
                        <PengyStats title="Interviews" number="2"/>
                        <PengyStats title="Questions" number="10"/>
                        <PengyStats title="Hacks" number="7"/>
                    </div>

                </div>
            </div>
        </div>
    );
}