import { useState } from "react";
import Todo from "../models/todo";
import TodosContext from "./todos-context";
import TodosContextType from "../models/todosContextType";

interface Props {
  children?: React.ReactNode;
}

const TodosContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextType = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
