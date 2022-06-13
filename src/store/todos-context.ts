import React from "react";
import TodosContextType from "../models/todosContextType";

const TodosContext = React.createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export default TodosContext;
