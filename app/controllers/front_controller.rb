class FrontController < ApplicationController 

  def index
  end

  def contact
  	contact = Contact.new :email=>params[:email], :name=>params[:name], :message=>params[:message], :classification=>params[:classification]
  	contact.save
  	redirect_to root_url, notice: "Thanks for contacting us. We will get back to you ASAP."
  end

end
