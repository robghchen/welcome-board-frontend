import React from "react";
import EditPostForm from "./EditPostForm";

class PostIt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markedForDeletion: false,
      likes: this.props.likes.filter(like => like.post_id === this.props.post.id).length
    };
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/likes")
    .then(resp => resp.json())
    .then(likes => {
      const postLikes = likes.filter(like => like.post_id === this.props.post.id).length
      this.setState({ likes: postLikes });
    });
  }

  componentWillUnmount() {
    if (this.markedForDeletion)
      fetch(`http://localhost:3001/api/v1/posts/${this.props.post.id}`, {
        method: "DELETE"
      });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.likes < this.state.likes){
      fetch('http://localhost:3000/api/v1/likes', {
        method: "POST",
        headers: {'Content-Type': 'application/json', Accept: 'application/json', Authorization: localStorage.getItem("token")},
        body: JSON.stringify({ post_id: this.props.post.id, user_id: this.props.currentUser.id })
      })
    }
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
          <div><span>{this.state.likes} </span><span className="pointer" onClick={this.likesHandler.bind(this)}>🥰</span></div>
        </div>
      </div>
    );
  }

  likesHandler(){
    const i = this.state.likes + 1;
    this.setState({ likes: i })
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
