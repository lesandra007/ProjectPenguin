import React from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';


export default function Questions() {
  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Title title='Questions'/>
        </div>
        <div style={{position: 'absolute', left: '300px', top: '150px', background: "black", height: '200px', width: '300px', padding: '50px', color: '#FFFFFF'}}>
          <h2>Question of the Day</h2>
          <p>Test Message</p>
        </div>
    </div>
  );
}