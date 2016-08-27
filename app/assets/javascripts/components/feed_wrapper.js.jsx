var FeedWrapper = React.createClass({

  getInitialState : function() {
    return ({
      posts: this.props.mockPosts
    });
  },

  render: function() {
    var counter = 0;

    return (
      <div className='section'>
        {this.state.posts.map(function(post) {
          parsedPost = JSON.parse(post);
          counter++;
          return <FeedPost key={counter} name={parsedPost.name}
                                         date={parsedPost.date}
                                         time={parsedPost.time}
                                         status={parsedPost.status} />;
        })}
      </div>
    );
  }
});
