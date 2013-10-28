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

   form do |f|  
      f.inputs "Tasks" do
        f.input :user_id,:as => :select, :collection => User.all.map{|u| ["#{u.email}", u.id]}
        f.input :description
        f.input :url
        f.input :expert_name
        f.input :paid 
      end
      f.actions
    end

end
