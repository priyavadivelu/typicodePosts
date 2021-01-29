import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostItem from "./PostItem.js";
import Typography from '@material-ui/core/Typography';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoading: true,
      posts: [],
    };
    this.postsLoadPromise = Promise.resolve();
  }

  componentDidMount() {
    this.postsLoadPromise = this.loadPosts();
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status !== 200) {
          console.log("Problem status is" + response.status);
        }

        response.json().then((data) => {
          let posts = data.map((post) => {
            return {
              userId: post.userId,
              title: post.title,
              body: post.body,
            };
          });

          this.setState({ isDataLoading: false, posts });
        });
      })
      .catch((e) => {
        console.log("Error in API Fetch Data");
      });
  }

  render() {
      console.log("hi there",this.state.posts)
    const posts = () => {
      if (this.state.isDataLoading) {
        return (
          <Grid item>
            <CircularProgress />
          </Grid>
        );
      } else {
        return (
          <div className="posts-div" style={{ width: '100%', maxWidth: 360 }}>
            {this.state.posts.map((post) => (
              <PostItem key={`post_${post.id}`} post={post} />
            ))}
          </div>
        );
      }
    };

    return (
        <Grid container spacing={24} direction='column' alignItems='center' justify='center'>
        {posts()}
      </Grid>
    );
  }
}

export default MainPage;
