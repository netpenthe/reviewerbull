class UserData < ActiveRecord::Base
  attr_accessible :type, :user_id, :value

  has_many :attachments, :dependent => :destroy, :as => :uploadable  
end
