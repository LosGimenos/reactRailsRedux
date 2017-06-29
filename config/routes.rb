Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :gems
    end
  end
  # get '/*path' => 'welcome#index'
end
