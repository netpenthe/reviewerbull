class TidyUpContact < ActiveRecord::Migration
  def up
  	remove_column :contacts, :url
  	remove_column :contacts, :fivethings
  end

  def down
  	add_column :contacts, :url, :string
  	add_column :contacts, :fivethings, :text
  end
end
