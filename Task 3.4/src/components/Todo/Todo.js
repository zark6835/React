import { useContext } from "react";
import { TodoContext } from "../../context/TodoData";


const Todo = () => {
  const todos = useContext(TodoContext);

  return (
    <ul style={{textAlign: 'center'}}>
      {todos.map(todo => (
        <li key={todo.id} style={{padding: '10px'}}>
          <h2>{todo.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
