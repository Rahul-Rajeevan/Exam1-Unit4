import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'
const Tasks = ({data1,onDelete,onTicked}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {data1.map((e)=>(
          <Task id={e.id} text={e.text} done={e.done} count1={e.count} onDelete={onDelete} onTicked={onTicked}/>
          ))}
         
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
      
    </>
  );
};

export default Tasks;
