import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";

class ModsContainer extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <div className="mod-link-parent">
              <h2>Mod 1</h2>
              <Link to={"/mod/1"} className="mod-link">
                <Image src={require("../components/Ruby_Logo.png")} />
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="mod-link-parent">
              <h2>Mod 2</h2>
              <Link to={"/mod/2"} className="mod-link">
                <Image src={require("../components/Ruby_On_Rails_Logo.png")} />
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="mod-link-parent">
              <h2>Mod 3</h2>
              <Link to={"/mod/3"} className="mod-link">
                <Image src={require("../components/javascript-logo.png")} />
              </Link>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <div className="mod-link-parent">
              <h2>Mod 4</h2>
              <Link to={"/mod/4"} className="mod-link">
                <Image
                  src={require("../components/react-logo-1000-transparent.png")}
                />
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="mod-link-parent">
              <h2>Mod 5</h2>
              <Link to={"/mod/5"} className="mod-link">
                <Image src={require("../components/redux_logo.png")} />
              </Link>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ModsContainer;
