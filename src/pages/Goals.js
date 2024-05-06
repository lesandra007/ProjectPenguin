import React, { useState, useEffect }  from 'react'
import "../App.css";
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Title from '../components/Title';
import ProgressBar from '../components/ProgressBar';
import {Task} from '../components/Task';
import Badge from '../components/Badge';
import ChecklistIcon from '@mui/icons-material/Checklist';



export default function Goals() {
  // Goals Database
  const [userGoalsJson, setUserGoalsJson] = useState({
    badgesCount: 0,
    badges: [],
    goals: [],
    userTasks: []
  });
  // Fetch data from API
  useEffect(() => {
    fetch("/goals")
    .then(response => response.json())
    .then(
      userGoalsJson => {
        //userGoalsJson is database with users's goals, tasks, and badges information
        setUserGoalsJson({
          badgesCount: userGoalsJson.badgesCount,
          badges: userGoalsJson.badges,
          goals: userGoalsJson.goals,
          userTasks: userGoalsJson.tasks
        })
      }
    )
  }, []);
  // console.log("intialuserTasks=" + JSON.stringify(userGoalsJson.userTasks))

  // ADD TASK TO TASKS LIST

  //input field
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit() {
    //if no input, do nothing
    if (!input) return;
    console.log("input:" + input)
    console.log("inputjson:" + JSON.stringify(input))
    //diable add button
    setIsPending(true)

    //form to pass data to flask backend
    let data = new FormData()
    data.append("title", input)
    console.log(data.getAll("title"))

    //pass form data to backend and retrieve results
    const response = await fetch("/goals", {
      method: "POST",
      body: data
    })
    const jsonData = await response.json();

    //set frontend variables
    setUserGoalsJson({
      badgesCount: userGoalsJson.badgesCount,
      badges: userGoalsJson.badges,
      goals: userGoalsJson.goals,
      userTasks: jsonData.newTasks
    })
    console.log("tasks=" + JSON.stringify(userGoalsJson.userTasks))

    //clear input field
    setInput("");

    //enable add button
    setIsPending(false)
  }
  
  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <Topbar/>
        <div className="PageContent">

          {/* Title */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Title title='Goals'/>
          </div>

          {/* Goal Items */}
          <div className="GoalItems">
            {(typeof userGoalsJson.goals === 'undefined') ? ( 
              // if badges array is undefined
              <p>Loading...</p> 
            ): (
              //else display badges
              // console.log(userGoalsJson)
              (userGoalsJson.goals).map((goals) => {
                return (
                  <div className="goal" key={goals.description}>
                    <h2>{goals.title}</h2>
                    <p style={{margin: '0px'}}># {goals.description}</p>
                    <ProgressBar percentCompleted={goals.completed/goals.goal * 100}/>
                  </div> )
              })
            )}
          </div>

          {/* Tasks and Accomplishments */}
          <div className="TasksAndAccomplishments">
            <div className='TasksSection'>
              <h2>Today's Tasks</h2>
              <hr></hr>
              {/* Add task */}
              <form className='addTaskContainer' id="form">
                <div className='taskIcon'><ChecklistIcon/></div>
                  <input 
                    type="text" 
                    placeholder='Your Task'
                    className="addTaskInput" 
                    name="taskToAdd"
                    value = {input} 
                    onChange={e => setInput(e.target.value)}/>
                  {!isPending && <button type="button" onClick={handleSubmit}>Add</button>}
                  {isPending && <button disabled>Adding...</button>}
              </form>

              <div>
                {(typeof userGoalsJson.userTasks === 'undefined') ? ( 
                  // if tasks array is undefined
                  <p>Loading...</p> 
                ): (
                  //else display tasks
                  (userGoalsJson.userTasks).map((task) => (
                    <Task key={task.id} id={task.id} title={task.title} />
                  ))
                )}
              </div>
              
            </div>
            <div className='AccomplishmentsSection'>
              <h2>Accomplishments</h2>
              <hr></hr>
              <div className='badgesList'>
                  {(typeof userGoalsJson.badges === 'undefined') ? ( 
                    // if goals array is undefined
                    <p>Loading...</p> 
                  ): (
                    //else display goals
                    // console.log("else display" + userBadgesDb.badges)
                    (userGoalsJson.badges).toReversed().map((badges) => {
                      return <Badge key={badges.title} title={badges.title} description={badges.description}/>
                    })
                  )}
              </div>
            </div>
          </div>
        </div>
        <Bottombar/>
    </div>
  );
}

export let toDelete = [0,0];
export function setToDelete(idNum) {
  toDelete[0]++;
  toDelete[1] = idNum;
  console.log(toDelete);
  if (toDelete[0] === 2){
    handleDelete();
    resetDelete();
    console.log("reset: " + toDelete)
  }
}

export function resetDelete(){
  toDelete[0] = 0;
  toDelete[1] = 0;
}

export async function handleDelete() {
  //form to pass data to flask backend
  let data = new FormData()
  data.append("id", toDelete[1])
  console.log(data.getAll("id"))

  //pass form data to backend and retrieve results
  const response = await fetch("/goals", {
    method: "DELETE",
    body: data
  })
  const jsonData = await response.json();
  window.location.reload(true);

  //set frontend variables
  // setUserGoalsJson({
  //   badgesCount: userGoalsJson.badgesCount,
  //   badges: userGoalsJson.badges,
  //   goals: userGoalsJson.goals,
  //   userTasks: jsonData.newTasks
  // })
  // console.log("tasks=" + JSON.stringify(userGoalsJson.userTasks))
}