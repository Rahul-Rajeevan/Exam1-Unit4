import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({putValue}) => {
  // NOTE: do not delete `data-cy` key value pair
  let [value,setValue]=useState("");
  let [id,setId]=useState(6);
  const handle=(e)=>{setValue(e.target.value)}
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={value} type="text" onChange={handle}/>
      <button data-cy="add-task-button" onClick={()=>{
        setId(id+1)
        putValue(value,id);
        setValue("");
      }}>ADD</button>
    </div>
  );
};

export default AddTask;
