import React from "react";

class PostIt extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      markedForDeletion: false
    }

    this.deleteHandler = this.deleteHandler.bind(this);
  }
  componentWillUnmount(){
    if(markedForDeletion) fetch(`http://localhost:3000/api/v1/posts/${this.props.post.id}`, {method: 'DELETE'})
  }
  render() {
    return (
      <div className="post-wrapper">
        <img alt="" src={require("./post_it_pic.png")} />
        <div className="post-content">
          <span className="delete">x</span>
          <p>{this.props.post.content}</p>
        </div>
      </div>
    );
  }

  deleteHandler(){
    this.setState({ markedForDeletion: true });
    this.props.deleteHandler(this.props.post);
  }
}

export default PostIt;
