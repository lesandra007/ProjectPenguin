import React from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

export default function Shop() {
  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <div className="PageContent">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Title title='Shop'/>
          </div>
        </div>
    </div>
  );
}