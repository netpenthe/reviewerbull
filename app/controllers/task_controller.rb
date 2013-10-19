class TaskController < ApplicationController 

  def create
    user = User.find_by_email params[:sf_email]

    if user.blank?
      o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
      string = (0...15).map{ o[rand(o.length)] }.join
      user = User.create!({:email => params[:sf_email], :password => string, :password_confirmation => string })
    end

    task = Task.new :description=>params[:description], :user_id=>user.id, :url=>params[:sf_site], :expert_name=>params[:sf_expert], :expert_id=>params[:sf_expert_id]
    task.save

    #redirect_to front_submitted_url
    render json: {:id=>task.id}
  end

end
