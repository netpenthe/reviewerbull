namespace :maily do

  task :send_contact_form => :environment do
      contacts = Contact.where("sent = false or sent is null").all
      contacts.each do |contact|
      	ContactMailer.contact_email(contact).deliver
        contact.sent = true
        contact.save
        puts "contact form from #{contact.email} sent"	
      end
  end

end