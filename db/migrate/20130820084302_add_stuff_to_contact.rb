class AddStuffToContact < ActiveRecord::Migration
  def change
  	add_column :contacts, :url, :string
  	add_column :contacts, :fivethings, :string
  end
end
