import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoUpdated = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todoUpdated);
    },
    removeTodo: (state, action) => {
      // state.todos = state.todos.filter((item) => item.id !== action.payload.id);
      const temp = state.todos.filter((item) => item.id !== action.payload);
      state.todos = temp
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
      });
    },
    resetTodo: (state, action) => {
      state.todos = []
    }
  },
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
