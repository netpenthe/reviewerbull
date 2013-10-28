ActiveAdmin.register Task do
  
  index do
  	column :id
  	column :user do |task|
         link_to task.user.email, admin_user_path(task.user.id) unless task.user.blank?
        end
  	column :expert_name
  	column :url do |task|
  	  link_to task.url, task.url 
  	end
  	column :paid
  	actions do |task|
    end
  end

end
