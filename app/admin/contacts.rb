ActiveAdmin.register Contact do
  config.per_page = 10

  index do    
    selectable_column            
    column :id            
    column :email
    column :name                     
    column :message
    column :classification  
    column :created_at  
    default_actions                   
  end    
end
