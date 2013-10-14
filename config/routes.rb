Dwarfmongoose::Application.routes.draw do

  match 'sample_report/:id' => 'front#sample_report'
  match 'front/contact' => 'front#contact'
  match 'front/submitted' => 'front#submitted', :as=>:front_submitted

  root :to => 'front#index'	

  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users

  ActiveAdmin.routes(self)

end
