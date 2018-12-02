import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const Todos = ({ todos, onDeleteTodo }) => {
  const todoList = todos.length ? (
    <ul>
      {todos.map(todo => (
        <li
          role="presentation"
          key={todo.id}
          onClick={() => { onDeleteTodo(todo.id); }}
        >
          {todo.content}
        </li>
      ))}
    </ul>
  ) : (
    <p>you have no todos left</p>
  );

  return (
    <div>{todoList}</div>
  );
};

Todos.propTypes = {
  todos: propTypes.string.isRequired,
  onDeleteTodo: propTypes.func.isRequired,
};

export default Todos;
