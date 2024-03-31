import React from 'react'
import "../App.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import {CSS} from "@dnd-kit/utilities";

// export default function Task({title}){
//     return(
//         <div style={{
//             backgroundColor: 'var(--darker-blue)',
//             width: '100%',
//             height: 'auto',
//             borderRadius: '5px',
//             boxSizing: 'border-box',
//             padding: '15px',
            
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             gap: '15px'
//             }}>
//             <div style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
//                 <input type="checkbox" style={{width: '20px', height: '20px', accentColor: 'var(--dark-orange)'}}/>
//                 <div style={{color: 'silver', flexWrap: 'wrap'}}>{title}</div>
                
//             </div>
//             <MoreVertIcon/>
//         </div>
//     )
// }

export const Task = ({ id, title }) => {
    // Sortable variables
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    // Style during transition (dragging)
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };
  
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="task"
      >
        <div style={{display: 'flex', flexDirection: 'row', gap: '15px'}}>
            {/* checkbox */}
            <input type="checkbox" style={{width: '20px', height: '20px', accentColor: 'var(--dark-orange)'}} />
            {/* task title */}
            <div style={{color: 'silver', flexWrap: 'wrap'}}>{title}</div>
        </div>
        {/* 3 dots icon */}
        <MoreVertIcon/>
      </div>
    );
  };