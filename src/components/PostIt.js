import React from "react";

class PostIt extends React.Component {
  componentWillUnmount(){

  }
  render() {
    return (
      <div className="post-wrapper">
        <img alt="" src={require("./post_it_pic.png")} />
        <div className="post-content">
          <p>{this.props.post.content}</p>
        </div>
      </div>
    );
  }
}

export default PostIt;
