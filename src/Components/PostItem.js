import React, { Component } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core/";
import "../App.css";

export default class PostItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        <Card id="cards">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <b>POSTS</b>
            </Typography>
            <br />
            <div className="postTitle">
              <span>
                <b>TITLE:</b>
              </span>
              {this.props.post.title}
            </div>
            <br />
            <div className="postBody">
              <span>
                <b>BODY:</b>
              </span>
              {this.props.post.body}
            </div>
          </CardContent>
          <br />
        </Card>
      </Grid>
    );
  }
}
