class AddExpertToTasks < ActiveRecord::Migration
  def change
  	add_column :tasks, :expert_name, :string
  	add_column :tasks, :expert_id, :integer
  end
end
