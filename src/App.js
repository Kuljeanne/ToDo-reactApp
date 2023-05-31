import { AddTodo } from "./components/add-todo";
import { TodoList } from "./components/todo-list";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className="App-header">
        <AddTodo />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
