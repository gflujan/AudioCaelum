Rails.application.routes.draw do 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html 
  namespace :api, defaults: {} do 
    get 'users/email', to: 'users#verify_email_db' 

    resource :session, only: [:create, :destroy] 
    resources :users, only: [:index, :create, :show, :destroy] 
    resources :songs, except: [:new, :edit] 
  end 

  root to: "static_pages#main" 
end 
