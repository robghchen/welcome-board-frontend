import React from "react";

class PostIt extends React.Component {
  render() {
    return (
      <div className="post-wrapper">
        <img alt="" src={require("./post_it_pic.png")} />
        <div className="post-content">
          <span className="delete">x</span>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default PostIt;
