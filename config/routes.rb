Dwarfmongoose::Application.routes.draw do

  match 'sample_report/:id' => 'front#sample_report'
  match 'expert_mini_profile/:id' => 'front#expert_mini_profile', :as => :expert_mini_profile
  match 'front/contact' => 'front#contact'
  match 'front/submitted' => 'front#submitted', :as=>:front_submitted
  post '/task/create' => 'task#create', :as=>:task_create

  root :to => 'front#index'	

  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users

  ActiveAdmin.routes(self)

end
