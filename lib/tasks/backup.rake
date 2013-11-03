
namespace :db do

     task :backup do
       db_config = Rails.application.config.database_configuration[Rails.env]
       system "mysqldump --user=#{db_config['username']} --password=#{db_config['password']} #{db_config['database']}> /tmp/if-backup.sql"
       system "gzip -f /tmp/if-backup.sql"
       #system "echo 'db backup' | mutt -a '/tmp/if-backup.sql.gz' -s 'inputfarm.com backup' -- info@inputfarm.com" 
     end

end