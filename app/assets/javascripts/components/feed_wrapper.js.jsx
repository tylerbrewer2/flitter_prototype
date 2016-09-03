class FeedWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.mockPosts };
    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    this.state.posts.unshift(JSON.stringify(post));
    this.setState({ posts: this.state.posts });
    this.saveToServer(post);
  }

  saveToServer(post){
      $.ajax({
        url: '/update_posts',
        method: 'POST',
        data: { post: JSON.stringify(post) },
        dataType: 'json'
      });
  }

  render() {
    var counter = 0;
    return (
      <div className='section'>
        <PostForm addPost={this.addPost} />

        {this.state.posts.map(function(post) {
          counter++;
          parsedPost = JSON.parse(post);
            return <Post key={counter}
                         name={parsedPost.name}
                         date={parsedPost.date}
                         time={parsedPost.time}
                         status={parsedPost.status} />;
        })}
      </div>
    );
  }
}
