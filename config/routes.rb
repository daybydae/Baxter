Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :sitters, only: [:show, :create, :index] do
      resources :bookings, only: [:create]
    end
    resources :bookings, only: [:show, :index]
  end
  root "static_pages#root"
end
