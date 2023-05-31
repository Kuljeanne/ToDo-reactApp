
import { useSelector } from 'react-redux';
import { Todo } from '../todo';
import styles from './index.module.css';

export const TodoList = () => {

  const todos = useSelector(state => state.todos.todos)

  return (
    <ul className={styles.list}>
      {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
};

