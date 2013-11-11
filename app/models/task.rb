class Task < ActiveRecord::Base

  attr_accessible :description, :user_id, :url, :expert_name, :expert_id, :paid

  has_many :attachments, :dependent => :destroy, :as => :uploadable
  
  belongs_to :user

  has_one :feedback

end
