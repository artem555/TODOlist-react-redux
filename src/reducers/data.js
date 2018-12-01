import * as act from '../actions/types';

const initialState = {
  todos: [
    { id: 1, content: 'need milk' },
    { id: 2, content: 'need meat' },
  ],
  content: '',
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case act.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };

    case act.ADD_TODO:
      return {
        ...state.todos,
        todos: [
          ...state.todos,
          {
            id: Math.random() + new Date().getTime(),
            content: state.content,
          },
        ],
        content: '',
      };

    case act.HANDLE_SUBMIT:
      return {
        ...state,
        content: state.content,
      };

    case act.HANDLE_CHANGE:
      return {
        ...state,
        content: action.payload.content,
      };
    default: return state;
  }
}
