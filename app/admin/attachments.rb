ActiveAdmin.register Attachment do
  
	show do |user|
      attributes_table do
        row :id
        row :uploadable_type
        row :upload_file_name
        row :upload_file_size
        row :upload_content_type
        row :created_at
        row "Attachment" do |attachment|
             image_tag attachment.upload.url(:medium)
        end

      end

   end


end
