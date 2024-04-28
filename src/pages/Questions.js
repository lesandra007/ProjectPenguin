import React from 'react'
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import "../App.css";
import Title from '../components/Title';


export default function Questions() {
  const handleSubmit = () => {
    const submit = window.confirm('Confirm to submit response!');
    if (submit) {
        console.log('Form submitted!');
    }
  };

  
  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <Topbar/>
        <div className="PageContent">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Title title='Questions'/>
        </div>
         <div className="QuestionItems">
              <div className="question">
                <h2>Question of the Day</h2>
                <p>Describe a time when you had to work with a 
                  difficult team member. What actions did you take
                  to resolve the situation to encourage the team's 
                  ongoing progress?</p>
              </div>
              <div className="question">
                <h2>Your Response</h2>
                <p>Type your response here...</p>
                <form onSubmit={handleSubmit}>
                  <textarea type="text"/>
                  <button type="submit" className="submitButton">Submit </button>
                </form>
              </div>
          </div>
        </div>
        <Bottombar/>
    </div>
  );
}