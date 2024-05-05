import React, { useEffect, useRef, useState } from 'react'
import "../App.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from "@dnd-kit/utilities";
import { toDelete, setToDelete } from '../pages/Goals';

export const Task = ({ id, title }) => {
    // // Sortable variables
    // const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    // // Style during transition (dragging)
    // const style = {
    //   transition,
    //   transform: CSS.Transform.toString(transform),
    // };
    const ref = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
      const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
          setIsMenuOpen(false)
        }
      }
      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [isMenuOpen])
  
    return (
      <div
        // ref={setNodeRef}
        // style={style}
        // {...attributes}
        // {...listeners}
        className="task" 
      >
        <div style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
            {/* checkbox */}
            <input type="checkbox" style={{width: '20px', height: '20px', accentColor: 'var(--dark-orange)', cursor: 'pointer'}} />
            {/* task title */}
            <div style={{color: 'silver', flexWrap: 'wrap'}}>{title}</div>
        </div>
        {/* 3 dots icon */}
        <div className='taskOptions' ref={ref} onClick={() => {setIsMenuOpen(oldState => !oldState); setToDelete(id)}}> 
          <div><MoreVertIcon/></div>
          {isMenuOpen && (
            <div className="delete">
                <div id='icon'><DeleteIcon/></div> 
                <div id="title">Delete</div>
            </div>
          )}
        </div>
      </div>
    );
  };