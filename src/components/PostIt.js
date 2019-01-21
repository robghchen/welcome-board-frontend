import React from "react";
import EditPostForm from "./EditPostForm";

class PostIt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markedForDeletion: false
    };
  }

  componentWillUnmount() {
    if (this.markedForDeletion)
      fetch(`http://localhost:3001/api/v1/posts/${this.props.post.id}`, {
        method: "DELETE"
      });
  }

  render() {
    return (
      <div className="post-wrapper">
        <img alt="" src={require("./postit_note.png")} />
        <div className="post-content">
          {this.props.post.user_id === this.props.currentUser.id ? (
            <span
              className="delete pointer"
              onClick={this.deleteHandler.bind(this)}
            >
              x
            </span>
          ) : null}

          {this.props.post.user_id === this.props.currentUser.id ? (
            <EditPostForm
              post={this.props.post}
              editPostHandler={this.props.editPostHandler}
            />
          ) : (
            <p>{this.props.post.content}</p>
          )}
        </div>
      </div>
    );
  }

  editPostHandler = e => {
    e.preventDefault();
    this.props.editPostHandler();
  };

  deleteHandler() {
    this.setState({ markedForDeletion: true });
    this.props.deleteHandler(this.props.post.id);
  }
}

export default PostIt;
