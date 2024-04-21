import React, { useState, useEffect }  from 'react'
import "../App.css";
import Sidebar from '../components/Sidebar';
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
        //userGoalsDb is database with users's goals, tasks, and badges information
        setUserGoalsJson({
          badgesCount: userGoalsJson.badgesCount,
          badges: userGoalsJson.badges,
          goals: userGoalsJson.goals,
          userTasks: userGoalsJson.tasks
        })
      }
    )
  }, []);

  // Tasks array
  const tasksArray = [
    {id: 1, title: "probably a very important task 1"},
    {id: 2, title: "probably a very important task 2"},
    {id: 3, title: "probably a very important task 3"}];
  const [tasks, setTasks] = useState(tasksArray);

  // ADD TASK TO TASKS LIST

  //input field
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    //if no input, do nothing
    if (!input) return;

    addTask(input);
    
    //clear input field
    setInput("");
  };

  //add a task to tasks array
  const addTask = title => {
    setTasks(tasks => [...tasks, {id: tasks.length + 1, title}]);
  };



  // DROP AND DRAGGABLE TASKS LISTS

  //helper function: finds id of given task in tasks array; if task is equal to the task given, return the id
  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  //handing drag so tasks are positioned appropriately according to where they are dragged to
  const handleDragEnd = (event) => {
    //active is event (task) being dragged
    //over is event (task) to be replaced by active
    const { active, over } = event;

    //if dragged task returns to position, then do nothing
    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id); //id before task was dragged
      const newPos = getTaskPos(over.id); //id after task is dragged

      //updates array
      return arrayMove(tasks, originalPos, newPos);
    });
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
              // console.log("else display" + userBadgesDb.badges)
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
              <div className='addTaskContainer'>
                <div className='taskIcon'><ChecklistIcon/></div>
                <input 
                  type="text" 
                  placeholder='Your Task'
                  className="addTaskInput" 
                  value = {input} 
                  onChange={e => setInput(e.target.value)}/>
                <button onClick={handleSubmit}>Add</button>
              </div>

              {/* Drag and dropable task section */}
              <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <TaskDraggable tasks={tasks}/>
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
    </div>
  );
}
