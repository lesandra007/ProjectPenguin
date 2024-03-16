import React from 'react'
import "../App.css";
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

export default function Goals() {
  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <div className="PageContent">

          {/* Title */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Title title='Goals'/>
          </div>

          {/* Goal Items */}
          <div className="GoalItems">
              {/* Goal 1 */}
              <div className="goal">
                <h2>Goal1</h2>
                <p>description...</p>
              </div>
              {/* Goal 2 */}
              <div className="goal">
                <h2>Goal2</h2>
                <p>description...</p>
              </div>
              {/* Goal 3 */}
              <div className="goal">
                <h2>Goal3</h2>
                <p>description...</p>
              </div>
          </div>

          {/* Tasks and Accomplishments */}
          <div className="TasksAndAccomplishments">
            <div className='TasksSection'>
              <h2>My Tasks</h2>
              <hr></hr>
            </div>
            <div className='AccomplishmentsSection'>
              <h2>Accomplishments</h2>
              <hr></hr>
            </div>
          </div>
        </div>
    </div>
  );
}
