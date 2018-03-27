import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

export default ({ todos }) => (
  <div>
    <h3>Todo List goes here!</h3>
    <ul>{todos.map(el => TodoListItem(el))}</ul>
    <TodoForm />
  </div>
);
