import React from "react";
import EditPostForm from "./EditPostForm";

class PostIt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markedForDeletion: false,
      likes: "",
      author: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/likes")
      .then(resp => resp.json())
      .then(likes => {
        const postLikes = likes.filter(
          like => like.post_id === this.props.post.id
        ).length;
        this.setState({ likes: postLikes });
      });

    // debugger;

    const author = this.props.users.find(
      user => user.id === this.props.post.user_id
    ) === undefined ? "" : this.props.users.find(
      user => user.id === this.props.post.user_id
    ).full_name;
    this.setState({
      author: author
    });
  }

  componentWillUnmount() {
    if (this.markedForDeletion)
      fetch(`http://localhost:3000/api/v1/posts/${this.props.post.id}`, {
        method: "DELETE"
      });
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.likes < this.state.likes){
  //     fetch('http://localhost:3000/api/v1/likes', {
  //       method: "POST",
  //       headers: {'Content-Type': 'application/json', Accept: 'application/json', Authorization: localStorage.getItem("token")},
  //       body: JSON.stringify({ post_id: this.props.post.id, user_id: this.props.currentUser.id })
  //     })
  //   }
  // }

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
              author={this.state.author}
            />
          ) : (
            <p>
              {this.props.post.content} <span className="author">- {this.state.author}</span>
            </p>
          )}
          <div className="likes">
            <span>{this.state.likes} </span>
            <span
              className="pointer"
              onClick={
                this.props.isUserLoggedIn ? this.likesHandler.bind(this) : null
              }
            >
              😍
            </span>
          </div>
        </div>
      </div>
    );
  }

  likesHandler() {
    fetch("http://localhost:3000/api/v1/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        post_id: this.props.post.id,
        user_id: this.props.currentUser.id
      })
    }).then(this.setState({ likes: this.state.likes + 1 }));
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
