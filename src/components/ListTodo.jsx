import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const ListTodo = () => {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="pt-20 todolist">
      {todoList.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-indigo-900 h-auto pb-6 pt-2 px-3 btns"
          >
            <div className="flex justify-end btnMain">
              <button
                onClick={() => dispatch(removeTodo(item.id))}
                className="shadow-lg shadow-indigo-500/40 bg-indigo-500"
              >
                Delete
              </button>
              {/* <button
                onClick={() => handleUpdate(item.id)}
                className="shadow-lg shadow-indigo-500/50 bg-indigo-500"
              >
                Edit
              </button> */}
            </div>
            {item.text}
          </div>
        );
      })}
    </div>
  );
};

export default ListTodo;
