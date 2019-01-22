import React, { Component } from "react";

class NewPostForm extends Component {
  state = {
    input: "",
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state.input, this.props.mod);
    this.setState({
      input: ""
    });

  };

  render() {
    return (
      <div id="new-post-form" className="ui card form">
        <form onSubmit={this.handleSubmit}>
          Write a note to a previous mod.
          <br />
          <textarea
            className="form-control"
            type="text"
            placeholder="Enter note"
            cols="120"
            rows="8"
            maxLength="140"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <br />
          <input className="submit button pointer" type="submit" />
        </form>
      </div>
    );
  }
}

export default NewPostForm;
