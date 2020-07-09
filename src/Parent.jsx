import React, { useState } from 'react';
import './css/index.css';
const Todo = ({ todo, index }) => {
  return <div className='todo'>{todo.text}</div>;
};

const Parent = () => {
  const [todos, setTodo] = useState([
    {
      text: 'learn about react',
      isCompleted: false,
    },
    {
      text: 'meet friends for lunch',
      isCompleted: false,
    },
    {
      text: 'build cool react app',
      isCompleted: false,
    },
  ]);
  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Parent;
