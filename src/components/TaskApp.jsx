import React,{useState} from "react";
import AddTask from './AddTask/AddTask'
import TaskHeader from './TaskHeader/TaskHeader'
import Tasks from './Tasks/Tasks'
import styles from "./taskApp.module.css";
import data from "../data/tasks.json"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  
  let [data1,setData]=useState(data);
  const putValue=(value,id)=>{
    if(value!=='')
    {let p=0;
      for(let i=0;i<data1.length;++i)
      {if(data1[i].text===value)
        ++p;}
      if(p===0)
      setData([...data1,{id:id,text:value,done:false,count:1}]);}
  }

  const onDelete=(id)=>{
    let newData=data1.filter(g=>g.id!==id.id);
    setData(newData);    
  }
  const onTicked=(value,id)=>{
    let data2=[]
    for(let i=0;i<data1.length;++i)
    {
      if(data1[i].id===id.id)
      data1[i].done=value;
      data2.push(data1[i])
    }
   data1=[...data2]
    
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader/>
      <AddTask putValue={putValue}/>
      <Tasks data1={data1} onDelete={onDelete} onTicked={onTicked}/>
      {/* {console.log(data1)} */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
