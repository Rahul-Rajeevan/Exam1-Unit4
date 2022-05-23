import React from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'
const Task = ({id,text,done,count1,onDelete,onTicked}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={done} onChange={()=>onTicked(!{done},{id})}/>
      <div data-cy="task-text" className={done?styles.q:null} >{text}</div>
      <Counter count1={count1}/>
      {/* Counter here */}
      <button data-cy="task-remove-button" onClick={()=>onDelete({id})}>X</button>
    </li>
  );
};

export default Task;
