import React from "react";
import EditPostForm from "./EditPostForm";

class PostIt extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      markedForDeletion: false
    }

  }

  componentWillUnmount(){
    if(this.markedForDeletion) fetch(`http://localhost:3001/api/v1/posts/${this.props.post.id}`, {method: 'DELETE'});
  }


  render() {

    return (
      <div className="post-wrapper">
        <img alt="" src={require("./post_it_pic.png")} />
        <div className="post-content">
          {this.props.post.user_id === this.props.currentUser.id ? <span className="delete pointer" onClick={this.deleteHandler.bind(this)}>x</span> : null}
          <p>{this.props.post.content}</p>
          <EditPostForm post={this.props.post} editPostHandler={this.props.editPostHandler}/>
        </div>
      </div>
    );
  }

  editPostHandler = (e) => {
    e.preventDefault()
    this.props.editPostHandler()
  }

  deleteHandler(){
    this.setState({ markedForDeletion: true });
    this.props.deleteHandler(this.props.post.id);
  }
}

export default PostIt;
