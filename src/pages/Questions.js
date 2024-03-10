import React from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';


export default function Questions() {
  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        {/* <h1>Questions</h1> */}
        <div className="PageContent">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Title title='Questions'/>
          </div>
        </div>
    </div>
  );
}