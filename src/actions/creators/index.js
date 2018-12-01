import * as act from '../types';

export const deleteTodo = id => ({
  type: act.DELETE_TODO,
  payload: { id },
});

export const addTodo = () => ({
  type: act.ADD_TODO,
});

export const handleChange = e => ({
  type: act.HANDLE_CHANGE,
  payload: { content: e.target.value },
});

export const handleSubmit = e => ({
  type: act.HANDLE_SUBMIT,
  payload: { e },
});
