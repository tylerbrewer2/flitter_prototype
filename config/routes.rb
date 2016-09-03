Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'social_feed#index'
  post '/update_posts', to: 'social_feed#update_posts'
end
