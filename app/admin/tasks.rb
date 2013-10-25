ActiveAdmin.register Task do
  
  index do
  	column :id
  	column :user
  	column :expert_name
  	column :url do |task|
  	  link_to task.url, task.url 
  	end
  	column :paid
  	actions do |task|
    end
  end

end
