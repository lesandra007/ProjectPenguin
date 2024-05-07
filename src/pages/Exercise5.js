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



const Exercise5 = () => {
  // Set the flag to true when on an exercise page
  const [isExercisePage, setIsExercisePage] = useState(true);

  const [codeOutput, setCodeOutput] = useState("");
  const [codeInput, setCodeInput] = useState("");

  const [activeRoute, setActiveRoute] = useState(""); //

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
      <h2>Print Hello World!</h2>
      <p>
        As with most programming languages, you will begin with Python by
        writing a program to print "Hello World!" to the console.
      </p>
      <h3> Input Format </h3>
      <p>Hardcode or type 'Hello World!'' using the print() function.</p>
      <h3> Output Format </h3>
      <p>Print 'Hello World!'' in the console.</p>
      <h3> Sample Output</h3>
      <textarea
        value="Hello World!"
        disabled
        style={{ color: "blue", width: "100%", height: "50px" }}
      />
      <h3> Explanation </h3>
      <p>
        Given the function print(). The string 'Hello World!' encapsulated
        within print will display the following string in the console.{" "}
      </p>
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

export default Exercise5;