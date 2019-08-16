import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FetchPosts } from '../actions/PostActions';

interface Post {
  list: Array<any>;
  FetchPosts: () => void;
  newPost: Object;
}

class Posts extends Component<Post, {}> {

  componentWillMount() {
    this.props.FetchPosts();
  }

  componentWillReceiveProps(nextProps: Post) {
    if (nextProps.newPost) {
      this.props.list.unshift(nextProps.newPost);
    }
  }

  render() {
    return (
      <div>
        Posts:
        {this.props.list.map((post: any) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  list: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { FetchPosts })(Posts);

