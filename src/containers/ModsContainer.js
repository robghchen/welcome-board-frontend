import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";

class ModsContainer extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Link to={"/mod/1"}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to={"/mod/2"}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to={"/mod/3"}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <Link to={"/mod/4"}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to={"/mod/5"}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5rZfaVE5XP0nD_kAIq1GpngctlJ4cmq09MbfWOMDAzRLc11F-Q" />
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ModsContainer;
