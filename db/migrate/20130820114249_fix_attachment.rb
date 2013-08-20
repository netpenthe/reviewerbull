class FixAttachment < ActiveRecord::Migration
  def up
  	rename_column :attachments, :upload_file_content_type, :upload_content_type
  	add_column :attachments, :upload_updated_at, :datetime
  end

  def down
  	rename_column :attachments, :upload_content_type, :upload_file_content_type
  end

end
