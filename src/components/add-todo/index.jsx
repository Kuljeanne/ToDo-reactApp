import { useState } from "react";
import styles from "./index.module.css";
import { addTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

export const AddTodo = () => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo(value));
    setValue('')
  }



  return (
    <div>
      <label htmlFor="todo" className={styles.label}>✏️</label>
      <input className={styles.input} id="todo" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Write todo..." />
      <button className={styles.addButton} onClick={addTask}>
        Add
      </button>
    </div>
  );
};



