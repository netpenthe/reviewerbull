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

        column "User Data" do |user|           
          link_to user.info.size, admin_user_path(user) unless user.info.blank?
        end

        actions :defaults=>false do |user|
          link_to "Edit", edit_admin_user_path(user)
        end
        
        #actions :defaults=>false do |user|
        #  link_to "View", admin_user_path(user)
        #end
  end


  show do |user|
      attributes_table do
        row :id
        row :email
        row :name
        row :created_at
        bool_row :live
      end

        user.info.each do |data|
         div do 
           if data.type=="ExpertProfilePic"
             simple_format "<b>#{data.type}:</b> <p>#{data.value}</p> #{image_tag(data.attachments.first.upload(:medium)) unless data.attachments.first.blank?}
                           #{link_to "edit", edit_admin_user_datum_path(data.id) unless data.blank?}"              
           else
             simple_format "<b>#{data.type}:</b> <p>#{data.value}</p> #{link_to "edit", edit_admin_user_datum_path(data.id) unless data.blank?}"
           end 
         end
        end 
   end

    form do |f|
      f.inputs "User" do
        f.input :email, :input_html => { :readonly => true } 
        f.input :name
      end
      f.actions
    end

end
