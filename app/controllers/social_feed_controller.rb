class SocialFeedController < ApplicationController
  include MockConcern

  def index
    @mock_posts = formatted_mock_posts.reverse
  end

  def update_posts
    post = JSON.parse(params[:post])
    Post.create(name: post['name'], date: post['date'], time: post['time'], status: post['status'])
  end

end
