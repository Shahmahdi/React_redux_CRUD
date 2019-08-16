import React from 'react'
import { connect } from 'react-redux';
import { NewPost } from '../actions/PostActions';

interface PostFromProps {
  NewPost: (post: any) => void
}

class PostForm extends React.Component<PostFromProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e: any) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e: any) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    // api call
    this.props.NewPost(post);

  }

  render() {
    return (
      <div>
        <h4>Add new todo:</h4>
        <form>
          <div>
            <label>Title: </label> <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body: </label> <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { NewPost })(PostForm);
