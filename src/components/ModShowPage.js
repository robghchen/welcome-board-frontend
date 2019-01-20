import React, { Component } from "react";

class ModShowPage extends Component {
  state = {
    mod_posts: this.props.mod_id
  };

  showPostArray = () => {
    let posts = this.props.postArray;
    return posts.map(post => {
      console.log("made something");
      return (
        <img
          key={post.id}
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_SC-wdYH8nWAZJwcD4b_a3KQu8hbomXnJC3RN7oMF1Dd35kq"
        />
      );
    });
  };

  render() {
    return (
      <div className="ui mods-masthead">
        <h1 className="mod-name">{`Mod ${this.props.mod_id}`}</h1>
        List of posts
        <div>{this.showPostArray()}</div>
      </div>
    );
  }
}

export default ModShowPage;
