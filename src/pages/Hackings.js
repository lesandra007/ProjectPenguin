import React, {useRef, useState} from 'react'
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import "../App.css";
import Editor from '@monaco-editor/react';
import { Box } from '@mui/material';
import { executeCode } from '../api';


export default function Hackings() {
  const editorRef = useRef()
  const[code, setInput] = useState('');
  const [output, setOutput] = useState(null);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if(!sourceCode) return;
    try {
      const {run:result} = await executeCode(sourceCode);
      setOutput(result.output)
    } catch (error) {
      
    }
  
  };
  return (
    <div className="PageMenuAndContent">
        <Sidebar/>
        <div className="PageContent">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Title title='Hackings'/>
          </div>
          <main>
            <section style={{float: 'left', width: '45%', color: '#FFFF'}}>
              <Box width={500}>
            <h2>Objective</h2>
            <p>Description...</p>
            <h2>Task</h2>
            <p>Description...</p>
            <h2>Input Format</h2>
            <p>Description...</p>
            <h2>Output Format</h2>
            <p>Description...</p>
            </Box>
            <Box style={{width:'500', color:'#FFFF'}}>
              <h2>Sample Input</h2>
              <i>Description...</i>
              <h2>Sample Output</h2>
              <i>Description...</i>

            </Box>
          </section>
          <section style={{float: 'right', width:'55%', color:'#FFFF'}}>
          <Editor
        height="500px"
        defaultLanguage="java"
        defaultValue="// Start typing your code here..."
        onMount={onMount}
        value={code}
        onChange={(code)=> setInput(code)}
      />
      
      <button onClick={runCode}>Run Code</button>
          <h2>Output</h2>
          {
            output ? output : 'Click "Run Code" to see the output here'
          }
          <textarea value={output} disabled style={{width: '100%', height: '200px'}}/>
          </section>
          </main>
        </div>
      </div>
  );
}