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

   controller do

      def update
        @user_data = UserData.find params[:id]

        upload = params[:user_data][:upload]

        #lolz but fck it
        params[:user_data].delete "upload"

        @user_data.update_attributes(params[:user_data])

        unless upload.blank?
          attachment = @user_data.attachments.first
          attachment.upload = upload 
          attachment.save
        end

        redirect_to admin_user_datum_path(params[:user_data])
      end

    end

end
