class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :roles, :name
  # attr_accessible :title, :body

  has_many :data, :class_name=>"UserData", :order=>"id desc" 
  has_many :tasks


  def info
    ids = []
    datum = UserData.find_by_sql ["select type,max(id) as id from user_data where user_id=? group by type",self.id]
    ids = datum.map{|d| d.id }
    return UserData.where(id: ids ).order("type ASC")
  end

end
