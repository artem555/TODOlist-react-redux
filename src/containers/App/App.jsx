import React from 'react';
import propTypes from 'prop-types';
import Addtodo from '../../components/Addtodo/Addtodo';
import Todos from '../../components/Todos/Todos';

const App = props => (
  <div className="container">
    <h1>Todos</h1>
    <Todos
      todos={props.todos}
      onDeleteTodo={props.onDeleteTodo}
    />
    <Addtodo
      content={props.content}
      onAddTodo={props.onAddTodo}
      onHandleChange={props.onHandleChange}
    />
  </div>
);

App.propTypes = {
  onHandleChange: propTypes.func.isRequired,
  onDeleteTodo: propTypes.func.isRequired,
  content: propTypes.string.isRequired,
  todos: propTypes.string.isRequired,
};

export default App;
