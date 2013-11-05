ActiveAdmin.register UserData do
  index do
    column :id
    column :type
    column :value
    column :created_at
    column "user" do |data|
      data.user.email unless data.user.blank?
    end 
    default_actions
  end


  form :partial=>"user_data"

end
