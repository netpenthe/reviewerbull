class FrontController < ApplicationController 

  def index
  end

  def contact
    contact = Contact.new :email=>params[:contact_email], :name=>params[:name], :message=>params[:message], 
      :classification=>params[:classification], :url=>params[:url], :fivethings=>params[:fivethings]

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

end
