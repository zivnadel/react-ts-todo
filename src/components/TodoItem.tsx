import styles from "./TodoItem.module.css";

interface Props {
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
}

const TodoItem = ({ id, text, onRemoveTodo }: Props) => {
  return (
    <li onClick={onRemoveTodo.bind(null, id)} className={styles.item}>
      {text}
    </li>
  );
};

export default TodoItem;
