import React from 'react';
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";

import { Task } from "../components/Task";

export const TaskDraggable = ({ tasks }) => {
  return (
    <div>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  );
};