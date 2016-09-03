class Post extends React.Component {

  render() {
    return (
      <div className='post with-padding-15 with-margin-15'>
        <div className='post-row'>
          <h1 className='col-span-8'>{this.props.name}</h1>
          <h1 className='col-span-2 text-right'>{this.props.date}</h1>
          <h1 className='col-span-2 text-right'>{this.props.time}</h1>
        </div>
        <div className='post-row'>
          <p>{this.props.status}</p>
        </div>
        <div className='post-row'>
          <i className='fa fa-heart col-offset-10 col-span-1 text-right' aria-hidden='true'></i>
          <i className='fa fa-star col-span-1 text-right' aria-hidden='true'></i>
        </div>
      </div>
    );
  }
};
