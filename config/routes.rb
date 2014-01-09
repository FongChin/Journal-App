JournalApp::Application.routes.draw do
  resources :posts, :only => [:create, :index, :destroy, :show, :update]
  root :to => "static_pages#root"
end
