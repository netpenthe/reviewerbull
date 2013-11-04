ActiveAdmin.register User do

  index do
  	column :id
  	column :email
  	column :name
  	column :created_at
    column "Expert Live?", :live

        column "Tasks" do |user|
          user.tasks.size unless user.tasks.blank?
        end

        actions :defaults=>false do |user|
          link_to "Edit", edit_admin_user_path(user)
        end
        
        actions :defaults=>false do |user|
          link_to "View", admin_user_path(user)
        end
  end


  show do |user|
      attributes_table do
        row :id
        row :email
        row :name
        row :created_at
        bool_row :live
      end

        user.data.each do |data|
         div do 
           if data.type=="ExpertProfilePic"
             image_tag(data.attachments.first.upload(:medium)) unless data.attachments.first.blank?
           else
             simple_format "<b>#{data.type}:</b> <p>#{data.value}</p>"
           end 
         end
        end 
   end

end
