import { useSelector } from 'react-redux';
import { Todo } from '../todo';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

export const TodoList = () => {

  const [filter, setFilter] = useState({
    all: true,
    done: false,
    undone: false,
  })

  const todos = useSelector(state => state.todos.todos)

  const filtered = filter.done ?
    todos.filter(todo => todo.completed === true) :
    filter.undone ?
      todos.filter(todo => todo.completed === false) :
      todos

  return (
    <>
      <div className={styles.filter}>
        <div >
          <input type="radio" name="filter" id="done" checked={filter.done} onChange={() => {
            setFilter({
              all: false,
              done: true,
              undone: false,
            })
          }} />
          <label htmlFor="done"> Completed</label>
        </div>
        <div >
          <input type="radio" name="filter" id="undone" checked={filter.undone} onChange={() => {
            setFilter({
              all: false,
              done: false,
              undone: true,
            })
          }} />
          <label htmlFor="undone"> Uncompleted</label>
        </div>
        <div >
          <input type="radio" name="filter" id="all" checked={filter.all} onChange={() => {
            setFilter({
              all: true,
              done: false,
              undone: false,
            })
          }} />
          <label htmlFor="all"> All</label>
        </div>
      </div >
      <ul className={styles.list}>
        {filtered.map(todo => <Todo key={todo.id} {...todo} />)}
      </ul>
    </>
  );
};

