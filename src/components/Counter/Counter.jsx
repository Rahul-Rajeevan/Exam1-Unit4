import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count1}) => {
  // sample value to be replaced
  let [count,setCount] = useState(count1);
  const increment=(val)=>{setCount(count+val)}
    // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>increment(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>increment(-1)}>-</button>
    </div>
  );
};

export default Counter;
