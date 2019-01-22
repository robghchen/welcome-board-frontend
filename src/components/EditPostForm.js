import React, { Component } from "react";

class EditPostForm extends Component {
  state = {
    input: this.props.post.content
  };

  changeHandler = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editPostHandler(this.props.post.id, this.state.input);
  };

  render() {
    return (
      <div id="postit-form" className="ui card form">
        <form onSubmit={this.handleSubmit}>
          <textarea
            id="postit-input"
            cols="30"
            rows="8"
            maxLength="140"
            placeholder="Edit post"
            value={this.state.input}
            onChange={this.changeHandler}
          />
          <p>
            <span className="author">- {this.props.author}</span>
          </p>
          <br />
          <input
            id="postit-submit"
            className="pointer"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    );
  }
}

export default EditPostForm;
