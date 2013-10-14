class UrlTask < ActiveRecord::Migration
  def up
  	add_column :tasks, :url, :string
  end

  def down
  	remove_column :tasks, :url
  end
end
