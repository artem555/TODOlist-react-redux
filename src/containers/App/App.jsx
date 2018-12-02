import React from 'react';
import propTypes from 'prop-types';
import Addtodo from '../../components/Addtodo/Addtodo';
import Todos from '../../components/Todos/Todos';

const App = ({
  todos, content, onDeleteTodo, onAddTodo, onHandleChange,
}) => (
  <div className="container">
    <h1>Todos</h1>
    <Todos
      todos={todos}
      onDeleteTodo={onDeleteTodo}
    />
    <Addtodo
      content={content}
      onAddTodo={onAddTodo}
      onHandleChange={onHandleChange}
    />
  </div>
);

App.propTypes = {
  onHandleChange: propTypes.func.isRequired,
  onDeleteTodo: propTypes.func.isRequired,
  onAddTodo: propTypes.func.isRequired,
  content: propTypes.string.isRequired,
  todos: propTypes.string.isRequired,
};

export default App;
