import React from 'react';
import './App.css';
import AddTodos from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { Provider } from 'react-redux';
import { store } from './app/store';

const App = () => {
  return (
    <>
    <Provider store={store}>

    <AddTodos />
    <ListTodo />
    </Provider>
    </>
  );
};

export default App;
