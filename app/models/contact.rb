class Contact < ActiveRecord::Base

  attr_accessible :email, :message, :name, :classification, :url, :fivethings, :upload

  has_many :attachments, :dependent => :destroy, :as => :uploadable

end

