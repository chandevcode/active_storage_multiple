Rails.application.routes.draw do
  resources :posts do
    member do
      delete :purge_avatar
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "posts#index"
  delete "attachments/:id/purge", to: "attachments#purge", as: "purge_attachment"
end
