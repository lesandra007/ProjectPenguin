import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Title from '../components/Title';
import "../App.css";
import Editor from '@monaco-editor/react';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";
import Exercise1 from "./Exercise1"; // Import your exercise components
import Exercise2 from "./Exercise2";
import Exercise3 from "./Exercise3"; // Import your exercise components
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import {CodeNavigation} from "../components/CodeNavigation";
import {CodeProgress} from "../components/CodeProgress"; 

const APIKEY = "12e4de10d2msh0f6a4f449d5099dp12b366jsn4fbb377bd02b";
const HOST = "judge0-ce.p.rapidapi.com";

async function executeCodeJudge0(sourceCode) {
  const url =
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&fields=*";
  const data = {
    language_id: 71,
    source_code: sourceCode,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Host": HOST,
      "X-RapidAPI-Key": APIKEY,
    },
    body: JSON.stringify(data),
  });

  const jsonResponse = await response.json();
  const submissionToken = jsonResponse.token;
  const submissionStatus = await fetchSubmission(submissionToken);
  return submissionStatus;
}

async function fetchSubmission(token) {
  const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`;

  console.log("url", url);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": HOST,
      "X-RapidAPI-Key": APIKEY,
    },
  });

  const jsonResponse = await response.json();
  return jsonResponse;
}


const Hackings = () =>{
  const [codeOutput, setCodeOutput] = useState("");
  const [codeInput, setCodeInput] = useState("");

  const [activeRoute, setActiveRoute] = useState(""); //

  const [isExercisePage, setIsExercisePage] = useState(false); // Initialize as false

  const HeadText = isExercisePage ? "Prompt" : "Coding Exercise";
  const HeadText2 = isExercisePage ? "Python Editor" : "Hacking Progress";
  // Listen for route changes
  const location = useLocation();
  React.useEffect(() => {
    setActiveRoute(location.pathname);
    setIsExercisePage(location.pathname.startsWith("/hackings/exercise")); // Check if on an exercise page
  }, [location.pathname]);

  async function executeCode() {
    //const submissionData = await executeCodeJudge0(codeInput);
    //setCodeOutput(atob(submissionData.stdout));
  }

  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <Topbar/>
        <div className="PageContent">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Title title='Hackings'/>
          </div>
          <main>
          <section style={{ float: "left", width: "45%", color: "#FFFF" }}>
            <Box width={500}>
            <div className="TasksAndAccomplishments">
            <div className='TasksSection'>
              <h2>{HeadText}</h2>
              <hr></hr>
              </div>
              </div>
          {isExercisePage ? null : <CodeNavigation />}
          <Routes>
            <Route path="/hackings/exercise1" element={<Exercise1 />} />
            <Route path="/hackings/exercise2" element={<Exercise2 />} />
            <Route path="/hackings/exercise3" element={<Exercise3 />} />
            <Route path="/hackings/exercise4" element={<Exercise4 />} />
            <Route path="/hackings/exercise5" element={<Exercise5 />} />
            {/* Add more routes for other exercises */}
          </Routes>
        </Box>
      </section>
      <section style={{ float: "right", width: "50%", color: "#FFFF" }}>
        {/* Hacking progress box */}
        <div className="TasksAndAccomplishments">
            <div className='TasksSection'>
              <h2>{HeadText2}</h2>
              <hr></hr>
              </div>
              </div>

            {isExercisePage ? null : <CodeProgress percentage={20} />}

      </section>
          </main>
        </div>
        <Bottombar/>
      </div>
  );
};
export default Hackings;