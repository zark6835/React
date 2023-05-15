import React from 'react';

import "./style.css"

const TodoList = () => {
  const todos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
  ];

  return (
    <div className='todoList-wrapper'>
      {todos.map(todo => (
        <div key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} />
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;