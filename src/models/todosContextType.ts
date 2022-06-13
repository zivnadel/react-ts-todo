import Todo from "./todo";

interface TodosContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export default TodosContextType;
