import React, { useState } from "react";
import {
  useAddNewTodoMutation,
  useGetTodosByUserNameQuery,
} from "./services/todoService";
import { useSelector } from "react-redux";

function MyTodos() {
  var [newtodo, setnewtodo] = useState("");
  var { username } = useSelector((state) => state.userR);
  var { isLoading, data } = useGetTodosByUserNameQuery(username);
  var [addTodoFn] = useAddNewTodoMutation();
  return (
    <div className="container">
      <h1>MyTodos</h1>
      <input
        type="text"
        name="newtodo"
        onChange={(event) => {
          setnewtodo(event.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodoFn({ newtodo, timestamp: Date.now(), username });
        }}
      >
        Add Todo
      </button>
      {isLoading && <b>Please wait .... we are loading</b>}
      {!isLoading && (
        <ul>
          {data.map((todo) => {
            return <li>{todo.newtodo}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default MyTodos;
