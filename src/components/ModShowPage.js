import React, { Component } from "react";

class ModShowPage extends Component {
  state = {
    mod_posts: this.props.mod_id
  };

  render() {
    return <div>{`This is show page for mod ${this.props.mod_id}`}</div>;
  }
}

export default ModShowPage;
