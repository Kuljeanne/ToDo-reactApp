import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../store/todoSlice';
import styles from './index.module.css';

export const Todo = ({ id, text, completed }) => {

  const dispatch = useDispatch();


  console.log()
  return (
    <li className={styles.item}>
      <input className={styles.checkbox} type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({ id }))} />
      <span className={styles.text}>{text}</span>
      <button className={styles.btn} onClick={() => dispatch(removeTodo({ id }))}>❌</button>
    </li>
  );
};

