ActiveAdmin.register User do
  
  index do
  	column :id
  	column :email
  	column :created_at
  	actions do |task|
    end
  end


   show do |user|
      attributes_table do
        row :id
        row :email
        row :name
        row :created_at
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
