class TaskController < ApplicationController 

  def create
    user = User.find_by_email params[:email]

    if user.blank?
      o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
      string = (0...15).map{ o[rand(o.length)] }.join
      user = User.create!({:email => params[:email], :roles => [], :password => string, :password_confirmation => string })
    end

    task = Task.new :description=>params[:description], :user_id=>user.id, :url=>params[:url]
    task.save

    redirect_to front_submitted_url
  end

end
