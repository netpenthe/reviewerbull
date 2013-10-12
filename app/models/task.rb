class Task < ActiveRecord::Base
  attr_accessible :description, :user_id

  has_many :attachments, :dependent => :destroy, :as => :uploadable
  belongs_to :user

end
