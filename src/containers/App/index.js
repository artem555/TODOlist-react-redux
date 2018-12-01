import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './App';
import {
  deleteTodo, addTodo, handleChange, handleSubmit,
} from '../../actions/creators';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: state.data.todos,
    content: state.data.content,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onDeleteTodo: deleteTodo,
  onAddTodo: addTodo,
  onHandleChange: handleChange,
  onHandleSubmit: handleSubmit,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
