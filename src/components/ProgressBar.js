import React from 'react'
import "../App.css";
import {animate, motion} from 'framer-motion';
import {useEffect, useRef} from 'react';

export default function ProgressBar({percentCompleted}){
    const progressTestRef = useRef(null);
    useEffect(() => {
        if(progressTestRef.current != null){
            animate(0, percentCompleted, {
                duration: 1,
                onUpdate : (currPercent) => {
                    progressTestRef.current.textContent = currPercent.toFixed(0)
                }
            })
        }
    }, [percentCompleted]);
    return(
        <div className='progressContainer'>
            <div className="progressBar">
                <motion.div 
                    className="progressFill"
                    animate={{
                        width: `${percentCompleted}%`
                    }}
                    transition={{
                        duration: 1
                    }}
                />
            </div>
            <div className='progressText'>
                <p ref={progressTestRef}>0</p>
                <p>%</p>
            </div>
        </div>
    );
}