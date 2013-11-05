
namespace :db do

     task :backup do
       d = DateTime.now.strftime("%Y%m%d")
       	
       db_config = Rails.application.config.database_configuration[Rails.env]

       system "mysqldump --user=#{db_config['username']} --password=#{db_config['password']} #{db_config['database']}> /tmp/if-backup-#{d}.sql"
       system "gzip -f /tmp/if-backup-#{d}.sql"

       #system "echo 'db backup' | mutt -a '/tmp/if-backup.sql.gz' -s 'inputfarm.com backup' -- info@inputfarm.com"

       system "mkdir /tmp/#{d}"
       system "cp -r /var/www/dwarfmongoose/public/system/attachments/ /tmp/#{d}/" 
     end

end