class SocialFeedController < ApplicationController
  include MockConcern

  def index
    @mock_users = formatted_mock_users
  end

end
