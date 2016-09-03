class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var name = `${this.refs.firstName.value} ${this.refs.lastName.value}`;
    var date = moment().format('L');
    var time = moment().format('LT');
    var status = this.refs.status.value;
    post = { name, date, time, status };

    this.refs.form.reset();
    this.props.addPost(post);
  }

  render() {
    return (
      <form className='post-form with-margin-15' ref='form' onSubmit={this.handleSubmit}>
        <h1>What's on your mind?</h1>

        <div className='row'>
          <div className='col-span-4'>
            <label htmlFor="user-name">First Name</label>
            <input name='user-name' type='text' ref='firstName' placeholder='Tyler'/>
          </div>

          <div className='col-span-4'>
            <label htmlFor="user-name">Last Name</label>
            <input name='user-name' type='text' ref='lastName' placeholder='Brewer' />
          </div>
        </div>

        <div className="row">
          <label htmlFor="user-status"></label>
          <textarea className='col-span-12' name='user-status' type='text' ref='status' placeholder="I'm having such a great time entering my status!" />
        </div>

        <button type='submit'>Create Post</button>
    </form>
    );
  }
};
