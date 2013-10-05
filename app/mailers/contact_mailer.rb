class ContactMailer < ActionMailer::Base
  default from: "info@inputfarm.com"

  def contact_email(contact)
  	@contact = contact
    mail(to: "info@inputfarm.com", subject: 'Contact Form', from:@contact.email)
  end

end
