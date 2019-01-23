import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class NewPostForm extends Component {
  state = {
    input: "", 
    alert_error: false
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input !== "") {
      this.props.addPost(this.state.input, this.props.mod);
      this.setState({
        input: "",
        alert_error: false
      });
    } else {
      {this.setState({alert_error: true})}
      this.props.history.push(`/mod/${this.props.mod}`);
    }
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
          {this.state.alert_error ? <span className="alert-error">No blank comment please.</span> : null}
          <input className="submit button pointer" type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(NewPostForm);
