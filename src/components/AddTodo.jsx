import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../features/todo/todoSlice'

const AddTodos = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput("");
  };
  return (
    <form
      onSubmit={(e)=> handleSubmit(e)}
      style={{ width: "1200px" }}
      className="flex justify-between w-4/5"
    >
      <input
        type="text"
        className={"w-4/5 p-4 mr-10"}
        placeholder="Enter TODO"
        value={input}
        //   style={{width: '1000px'}}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="w-60 btnsubmit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddTodos;
