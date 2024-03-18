import React from 'react'
import "../App.css";
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import ProgressBar from '../components/ProgressBar';
import Task from '../components/Task';
import Badge from '../components/Badge';

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
                <p style={{margin: '0px'}}>description...</p>
                <ProgressBar percentCompleted={50}/>
              </div>
              {/* Goal 2 */}
              <div className="goal">
                <h2>Goal2</h2>
                <p style={{margin: '0px'}}>description...</p>
                <ProgressBar percentCompleted={20}/>
              </div>
              {/* Goal 3 */}
              {/* <div className="goal">
                <h2>Goal3</h2>
                <p>description...</p>
                <ProgressBar percentCompleted={75}/>
              </div> */}
          </div>

          {/* Tasks and Accomplishments */}
          <div className="TasksAndAccomplishments">
            <div className='TasksSection'>
              <h2>Today's Tasks</h2>
              <hr></hr>
              <div className='tasksList'>
                <Task title='probably a very important task'/>
                <Task title='probably a very important task'/>
                <Task title='ahhh so many important tasks'/>
                <Task title='probably a very important task'/>
              </div>
            </div>
            <div className='AccomplishmentsSection'>
              <h2>Accomplishments</h2>
              <hr></hr>
              <div className='badgesList'>
                  <Badge/>
                  <Badge/>
                  <Badge/>
                  <Badge/>
                  <Badge/>
                  <Badge/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
