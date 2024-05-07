import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Title from '../components/Title';
import "../App.css";
import Editor from '@monaco-editor/react';


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

const Exercise4 = () => {
  // Set the flag to true when on an exercise page
  const [isExercisePage, setIsExercisePage] = useState(true);
  const [codeInput, setCodeInput] = useState("");
  const [codeOutput, setCodeOutput] = useState("");

  const [activeRoute, setActiveRoute] = useState(""); //



  async function executeCode() {
    //const submissionData = await executeCodeJudge0(codeInput);
    //setCod
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
      <h2>Exercise 4</h2>
      <p>Prompt: Write a program to...</p>
      </section>
      <section style={{ float: "right", width: "50%", color: "#FFFF" }}>
      {!isExercisePage ? null : (
              <Editor
                height="500px"
                defaultValue="# Start typing your code here..."
                defaultLanguage="python" // Set to the appropriate language (e.g., "java")
                value={codeInput}
                onChange={setCodeInput}
              />
            )}
            {!isExercisePage ? null : (
              <button onClick={executeCode}> Run Code</button>
            )}
            {!isExercisePage ? null : <h2>Output</h2>}
            {!isExercisePage ? null : (
              <textarea
                value={codeOutput}
                disabled
                style={{ color: "blue", width: "100%", height: "100px" }}
              />
            )}
      </section>
      </main>
    </div>
    </div>
  );
};

export default Exercise4;
