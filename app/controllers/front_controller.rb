class FrontController < ApplicationController 

  def index
  end

  def contact
    contact = Contact.new :email=>params[:contact_email], :name=>params[:name], :message=>params[:message], 
      :classification=>params[:classification]

    contact.save

    if params[:upload].present?
      params[:upload].each do |file|
        attachment = Attachment.new
        attachment.upload = file
        attachment.save
        contact.attachments << attachment
        contact.save
      end
    end

    redirect_to root_url, notice: "Thanks for contacting us. We will get back to you soon."
  end


  def expert_mini_profile
    expert = params[:expert]
    render :layout => false, :template=>"experts/#{expert}"
  end

  def sample_report
    @show_header = false
    render "sample_reports/#{params[:id]}.html.erb"
  end

  def submitted
  end

  def experts
  end

  def expert
    render :layout=>false
  end

  def expert_create
    user = User.find_by_email params[:email]
    if user.blank?
      o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
      string = (0...15).map{ o[rand(o.length)] }.join
      user = User.create!({:email => params[:email], :password => string, :password_confirmation => string, :name=>params[:name] })
    end
    UserData.create :user_id=>user.id, :type=>"ExpertLinks", :value=>params[:links]
    UserData.create :user_id=>user.id, :type=>"ExpertOther", :value=>params[:info]
    UserData.create :user_id=>user.id, :type=>"ExpertProfile", :value=>params[:profile]
    render :text=>"Thanks for submitting your info !" 
  end

end
