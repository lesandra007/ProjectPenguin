import React from 'react'
import Sidebar from '../components/Sidebar';
import "../App.css";
import Title from '../components/Title';


export default function Questions() {
  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Title title='Questions'/>
        </div>
        {/* <div style={{position: 'absolute', left: '300px', top: '150px', background: "black", height: '200px', width: '300px', padding: '50px', color: '#FFFFFF'}}> */}
        {/* <div className="QuestionItems">
          <div className="question">
            <h2>Question of the Day</h2>
            <p>Test Message</p>
          </div>
        </div> */}
         <div className="QuestionItems">
              <div className="question">
                <h2>Question of the Day</h2>
                <p>Describe a time when you had to work with a difficult team member. What actions did you take to resolve the situation to encourage the team's ongoing progress?</p>
              </div>
              <div className="question">
                <h2>Your Response</h2>
                <p>Type your response here...</p>
              </div>
          </div>
    </div>
  );
}