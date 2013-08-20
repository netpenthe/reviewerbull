class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.string :uploadable_type
      t.integer :uploadable_id
      t.string :upload_file_name
      t.integer :upload_file_size
      t.string :upload_file_content_type

      t.timestamps
    end
  end
end
