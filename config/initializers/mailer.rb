
filename = "#{Rails.root}/config/smtp.yml"

if FileTest.exists?(filename)

  SMTP_CONFIG = YAML.load_file(filename)[Rails.env]
#  puts "read smtp.yml"
#  puts "user_name: #{SMTP_CONFIG["user_name"]}"

  ActionMailer::Base.delivery_method = :smtp

  #http://stackoverflow.com/a/18569595
  
#  ActionMailer::Base.smtp_settings = {
#   :address              => "smtp.live.com",
#   :port                 => 587,
#   :enable_starttls_auto => true,
#   :user_name            => SMTP_CONFIG["user_name"],
#   :password             => SMTP_CONFIG["password"],
#   :domain               => SMTP_CONFIG["domain"],
#   :authentication       => 'plain'
#  }


# relaying out thru local then thru postfix... easier to debug problems
  ActionMailer::Base.smtp_settings = {
   :address              => "localhost",
   :port                 => 25,
   :enable_starttls_auto => false
  }


#  puts "configured smtp"

end
