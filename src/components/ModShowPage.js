import React, { Component } from "react";
import PostIt from "./PostIt";

class ModShowPage extends Component {
  state = {
    mod_posts: this.props.mod_id
  };

  showPostArray = () => {
    let posts = this.props.postArray.filter(post => {
      return post.mod_id == this.props.mod_id;
    });

    return (
      <div className="post-array-container">
        {posts.map(post => {
          return (
            <div className="content-wrapper">
              <PostIt key={post.id} content={post.content} />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="ui">
        <h1 className="mod-name">{`Mod ${this.props.mod_id}`}</h1>
        List of posts
        <div className="post-container">{this.showPostArray()}</div>
      </div>
    );
  }
}

export default ModShowPage;
