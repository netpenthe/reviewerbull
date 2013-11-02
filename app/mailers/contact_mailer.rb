class ContactMailer < ActionMailer::Base
  default from: "info@inputfarm.com"

  def contact_email(contact)
    @contact = contact
    mail(to: "info@inputfarm.com", subject: 'Contact Form', from:"info@inputfarm.com", reply_to:@contact.email)
  end

end
