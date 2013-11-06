Dwarfmongoose::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # Code is not reloaded between requests
  config.cache_classes = true

  # Full error reports are disabled and caching is turned on
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Disable Rails's static asset server (Apache or nginx will already do this)
  config.serve_static_assets = false

  # Compress JavaScripts and CSS
  config.assets.compress = true

  # Don't fallback to assets pipeline if a precompiled asset is missed
  config.assets.compile = false

  # Generate digests for assets URLs
  config.assets.digest = true

  # Defaults to nil and saved in location specified by config.assets.prefix
  # config.assets.manifest = YOUR_PATH

  config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

  # Specifies the header that your server uses for sending files
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for nginx

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # See everything in the log (default is :info)
  # config.log_level = :debug

  # Prepend all log lines with the following tags
  # config.log_tags = [ :subdomain, :uuid ]

  # Use a different logger for distributed setups
  # config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)

  # Use a different cache store in production
  # config.cache_store = :mem_cache_store

  # Enable serving of images, stylesheets, and JavaScripts from an asset server
  # config.action_controller.asset_host = "http://assets.example.com"

  # Precompile additional assets (application.js, application.css, and all non-JS/CSS are already added)
  # config.assets.precompile += %w( search.js )
  config.assets.precompile += %w( .svg .eot .woff .ttf .css)
  config.assets.precompile += %w( font/custom-icons.svg font/custom-icons.ttf font/custom-icons.woff)
  config.assets.precompile += %w( bootstrap.js custom.js)
  config.assets.precompile += %w( bootstrap.min.css foo.css)
  config.assets.precompile += %w( js-plugin/parallax/js/jquery.localscroll-1.2.7-min.js js-plugin/isotope/jquery.isotope.js js-plugin/respond/respond.min.js)
  config.assets.precompile += %w( js-plugin/jquery-ui/jquery-ui-1.8.23.custom.min.js  js-plugin/easing/jquery.easing.1.3.js js-plugin/neko-contact-ajax-plugin/js/jquery.form.js)
  config.assets.precompile += %w( js-plugin/parallax/js/jquery.scrollTo-1.4.3.1-min.js modernizr-2.6.1.min.js js-plugin/parallax/js/jquery.stellar.min.js)
  config.assets.precompile += %w( js-plugin/jquery.pageslide-custom.js js-plugin/jquery.sharrre-1.3.4/jquery.sharrre-1.3.4.min.js js-plugin/owl.carousel/owl-carousel/owl.carousel.min.js)
  config.assets.precompile += %w( js-plugin/magnific-popup/jquery.magnific-popup.min.js js-plugin/neko-contact-ajax-plugin/js.jquery.validate.min.js)
  config.assets.precompile += %w( js-plugin/flexslider/jquery.flexslider-min.js)


  # Disable delivery errors, bad email addresses will be ignored
  # config.action_mailer.raise_delivery_errors = false

  # Enable threaded mode
  # config.threadsafe!

  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation can not be found)
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners
  config.active_support.deprecation = :notify

  # Log the query plan for queries taking more than this (works
  # with SQLite, MySQL, and PostgreSQL)
  # config.active_record.auto_explain_threshold_in_seconds = 0.5

  config.action_mailer.delivery_method = :sendmail
  # Defaults to:
  # config.action_mailer.sendmail_settings = {
  #   location: '/usr/sbin/sendmail',
  #   arguments: '-i -t'
  # }

  config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = true
  

end
