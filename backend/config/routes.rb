Rails.application.routes.draw do
  resources :issues, only: [:index, :show] , defaults: { format: :json }
  devise_for :users, defaults: { format: :json }

  #
  # get 'issues' , defaults: { format: :json }
end
