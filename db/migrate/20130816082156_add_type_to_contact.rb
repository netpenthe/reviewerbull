class AddTypeToContact < ActiveRecord::Migration
  def change
  	add_column :contacts, :classification, :string
  end
end
