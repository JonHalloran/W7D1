import { connect } from "react-redux";
import TodoList from "./todo_list";
import allTodos from "/Users/appacademy/Desktop/w7d1/todos/frontend/reducers/selectors.js";
import receiveTodo from "/Users/appacademy/Desktop/w7d1/todos/frontend/actions/todo_actions.js";

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
