import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state with an empty todos array
const initialState = {
  todos: [],
};

// Create a slice for todos
export const todoSlice = createSlice({
  name: "todo", // Slice name
  initialState, // Initial state
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(), // Generate unique ID
        text: action.payload, // Set text from action payload
      };
      state.todos.push(newTodo); // Add new todo to array
    },
    // Remove a todo by ID
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload); // Filter out the todo
    },
    // Update a todo by ID
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text; // Update text
        }
        return item;
      });
    },
    // Clear all todos
    resetTodo: (state) => {
      state.todos = []; // Set todos to empty array
    },
  },
});

// Export actions
export const { addTodo, removeTodo, updateTodo, resetTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
