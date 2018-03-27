import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }

  makeTodo(event) {
    event.preventDefault();
    const form = event.target;
    let title = form.getElementByClassName(".title").value;
    let body = form.getElementByClassName(".body").value;
    this.setState({
      title: title,
      body: body
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.makeTodo}>
          <label>
            Title
            <input type="text" className="title" />
          </label>
          <label>
            Body
            <input type="text" className="body" />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
