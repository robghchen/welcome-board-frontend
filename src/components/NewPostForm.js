import React, { Component } from "react";

class NewPostForm extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="ui card"
          onSubmit={e =>
            this.props.addPost(e, this.state.input, this.props.mod)
          }
        >
          Write a note to a previous mod.
          <br />
          <input
            type="text"
            placeholder="Enter note"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewPostForm;
