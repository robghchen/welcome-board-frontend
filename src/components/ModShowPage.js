import React, { Component } from "react";

class ModShowPage extends Component {
  state = {
    mod_posts: this.props.mod_id
  };

  render() {
    return (
      <div className="ui">
        <h1 className="ui title">{`Mod ${this.props.mod_id}`}</h1>
      </div>
    );
  }
}

export default ModShowPage;
