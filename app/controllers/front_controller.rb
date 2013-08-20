class FrontController < ApplicationController 

  def index
  end

  def contact
  	contact = Contact.new :email=>params[:email], :name=>params[:name], :message=>params[:message], 
  							:classification=>params[:classification], :url=>params[:url], :fivethings=>params[:fivethings]

  	contact.save

    	attachment = Attachment.new
    	attachment.upload = params[:upload]
    	attachment.save
    	contact.attachments << attachment
    	contact.save
   

  	redirect_to root_url, notice: "Thanks for contacting us. We will get back to you ASAP."
  end

end
