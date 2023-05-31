import styles from './index.module.css';

export const Todo = ({ text, completed }) => {

  console.log()
  return (
    <li className={styles.item}>
      <input type="checkbox" checked={completed}/>
      <span>{text}</span>
      <button >X</button>
    </li>
  );
};

