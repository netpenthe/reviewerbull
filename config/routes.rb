Dwarfmongoose::Application.routes.draw do

  match 'front/contact' => 'front#contact'

  root :to => 'front#index'	

  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users

  ActiveAdmin.routes(self)

end
