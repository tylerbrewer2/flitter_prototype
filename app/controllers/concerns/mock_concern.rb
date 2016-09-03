module MockConcern
  extend ActiveSupport::Concern

  def formatted_mock_posts
    Post.all.map { |post| post.to_json }
  end
end
