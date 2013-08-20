class Attachment < ActiveRecord::Base
	
  attr_accessible :upload_file_content_type, :upload_file_name, :upload_file_size, :uploadable_id, :uploadable_type

  has_attached_file :upload, :styles => { :medium => "300x300>", :thumb => "100x100>" }

  belongs_to :uploadable, :polymorphic => true

end
