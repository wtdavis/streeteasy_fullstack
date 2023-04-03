Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resources :listings, only: [:create, :destroy, :show, :index]
    resource :session, only: [:show, :create, :destroy]
  end
  post 'api/test', to: 'application#test'
end
