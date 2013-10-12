Dwarfmongoose::Application.routes.draw do

  match 'front/contact' => 'front#contact'
  match 'front/submitted' => 'front#submitted', :as=>:front_submitted

  root :to => 'front#index'	

  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users

  ActiveAdmin.routes(self)

end
