class AddSent < ActiveRecord::Migration
  def up
  	add_column :contacts, :sent, :boolean
  end

  def down
  	remove_column :contacts, :sent
  end
end
