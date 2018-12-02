import React, { Component } from 'react';
import propTypes from 'prop-types';
import './style.css';

class Addtodo extends Component {
  onHandleSubmit = (e) => {
    const { onAddTodo } = this.props;
    e.preventDefault();
    onAddTodo();
  }

  render() {
    const { content, onHandleChange } = this.props;
    return (
      <div>
        <form>
          <p>add new todo</p>
          <input
            type="text"
            onChange={onHandleChange}
            value={content}
          />
          <button type="submit" onClick={this.onHandleSubmit}>add</button>
        </form>
      </div>
    );
  }
}

Addtodo.propTypes = {
  content: propTypes.string.isRequired,
  onHandleChange: propTypes.func.isRequired,
  onAddTodo: propTypes.func.isRequired,
};

export default Addtodo;
