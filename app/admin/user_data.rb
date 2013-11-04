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


  form do |f|  
      f.inputs "User Data" do |ud|
        f.input :user_id,:as => :select, :collection => User.all.map{|u| ["#{u.email}", u.id]}
        f.input :type
        f.input :value
      end
      f.actions
    end

end
