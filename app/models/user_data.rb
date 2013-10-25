class UserData < ActiveRecord::Base
  attr_accessible :type, :user_id, :value

  UserData.inheritance_column = "typefail"
  has_many :attachments, :dependent => :destroy, :as => :uploadable  

  belongs_to :user
end
