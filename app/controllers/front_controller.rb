class FrontController < ApplicationController 

  def index
  end

  def contact
    if params[:classification]=="helper"
     contact = Contact.new :email=>params[:contact_email], :name=>params[:name], :message=>params[:expert_message], 
      :classification=>params[:classification]
    else
     contact = Contact.new :email=>params[:contact_email], :name=>params[:name], :message=>params[:contact_message], 
      :classification=>params[:classification]
    end

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
    render :layout=>'basic'
  end

  def expert_create
    #set random password for now
    if params[:email].blank?
      render :text=>"Email address is required"
      return
    end

    user = User.find_by_email params[:email]

    if user.blank?
      #check valid fake the pwd for now
      usr = User.new :email => params[:email], :password=>"sdfsdfsdfsdfsd", :password_confirmation=>"sdfsdfsdfsdfsd"
      unless usr.valid?
        render :text=>"Invalid email address"
        return
      end
    end

    if user.blank?
      o = [('a'..'z'), ('A'..'Z')].map { |i| i.to_a }.flatten
      string = (0...15).map{ o[rand(o.length)] }.join
      user = User.create!({:email => params[:email], :password => string, :password_confirmation => string, :name=>params[:name] })
    end

    UserData.create :user_id=>user.id, :type=>"ExpertLinks", :value=>params[:links] unless params[:links].blank?
    UserData.create :user_id=>user.id, :type=>"ExpertOther", :value=>params[:info] unless params[:info].blank?
    UserData.create :user_id=>user.id, :type=>"ExpertProfile", :value=>params[:profile] unless params[:profile].blank?
    UserData.create :user_id=>user.id, :type=>"ExpertLocation", :value=>params[:location] unless params[:location].blank?
    UserData.create :user_id=>user.id, :type=>"ExpertSkype", :value=>params[:skype] unless params[:skype].blank?
    UserData.create :user_id=>user.id, :type=>"ExpertPhone", :value=>params[:phone] unless params[:phone].blank?
    UserData.create :user_id=>user.id, :type=>"ExpertSpecialty", :value=>params[:domain] unless params[:domain].blank?

    unless params[:pic].blank?
      ud = UserData.create :user_id=>user.id, :type=>"ExpertProfilePic"
      attachment = Attachment.new
      attachment.upload = params[:pic] 
      attachment.save
      ud.attachments << attachment
      ud.save
    end

    #render :text=>"Thanks for submitting your info !" 
    redirect_to root_url, :notice=>"Thanks for submitting your info we will be in touch ASAP!"
  end

  def bootstrap
    render :layout=> 'bootstrap'
  end

  def bootstrap2
    render :layout=> 'bootstrap2'
  end
end
