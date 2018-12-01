import React, { Component } from 'react';
import propTypes from 'prop-types';
import './style.css';

class Addtodo extends Component {
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTodo();
  }

  render() {
    return (
      <div>
        <form>
          <p>add new todo</p>
          <input
            type="text"
            onChange={this.props.onHandleChange}
            value={this.props.content}
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
