import React, { useState, useEffect }  from 'react'
import "../App.css";
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Title from '../components/Title';
import ProgressBar from '../components/ProgressBar';
import { TaskDraggable } from "../components/TaskDraggable";

import Badge from '../components/Badge';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

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
  // Tasks array
  // const tasksArray = [
  //   {id: 1, title: "probably a very important task 1"},
  //   {id: 2, title: "probably a very important task 2"},
  //   {id: 3, title: "probably a very important task 3"}];
  // const [tasks, setTasks] = useState(tasksArray);

  // ADD TASK TO TASKS LIST

  //input field
  const [input, setInput] = useState("");
  // const handleSubmit = () => {
  //   //if no input, do nothing
  //   if (!input) return;

  //   addTask(input);
    
  //   //clear input field
  //   setInput("");
  // };

  // //add a task to tasks array
  // const addTask = title => {
  //   setTasks(tasks => [...tasks, {id: tasks.length + 1, title}]);
  // };

  const [tasks, setTasks] = useState(userGoalsJson.userTasks)
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

  // DROP AND DRAGGABLE TASKS LISTS

  //helper function: finds id of given task in tasks array; if task is equal to the task given, return the id
  const getTaskPos = (id) => userGoalsJson.userTasks.findIndex((task) => task.id === id);

  //handing drag so tasks are positioned appropriately according to where they are dragged to
  const handleDragEnd = (event) => {
    // //active is event (task) being dragged
    // //over is event (task) to be replaced by active
    // const { active, over } = event;

    // //if dragged task returns to position, then do nothing
    // if (active.id === over.id) return;

    // setTasks((tasks) => {
    //   const originalPos = getTaskPos(active.id); //id before task was dragged
    //   const newPos = getTaskPos(over.id); //id after task is dragged

    //   //updates array
    //   return arrayMove(tasks, originalPos, newPos);
    // });
  };

  // make drag and droppable on mobile/keyboard
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  
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

              {/* Drag and dropable task section */}
              <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                {(typeof userGoalsJson.userTasks === 'undefined') ? ( 
                  // if badges array is undefined
                  <p>Loading...</p> 
                ): (
                  <TaskDraggable tasks={userGoalsJson.userTasks}/>
                )}
              </DndContext>
            </div>
            <div className='AccomplishmentsSection'>
              <h2>Accomplishments</h2>
              <hr></hr>
              <div className='badgesList'>
                  {(typeof userGoalsJson.badges === 'undefined') ? ( 
                    // if badges array is undefined
                    <p>Loading...</p> 
                  ): (
                    //else display badges
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
