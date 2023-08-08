Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    get 'listings/search', do: "listings#search"
      get 'places/:query', to: 'places#show'
    resources :buildings, only: [:index]
    resources :users, only: [:create, :show, :destroy]
    resources :listings, only: [:create, :destroy, :show, :index, :update]
    resource :session, only: [:show, :create, :destroy]
    resources :favorites, only: [:show, :create, :destroy]

  end
  get 'api/user/find/:credential', to: 'application#find'
  get '*path', to: 'static_pages#frontend_index'
end
