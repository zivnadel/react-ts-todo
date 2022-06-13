import { useContext } from "react";

import TodosContext from "../store/todos-context";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

const Todos = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosContext.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onRemoveTodo={todosContext.removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
