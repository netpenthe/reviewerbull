class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.string :comment
      t.integer :score
      t.integer :task_id

      t.timestamps
    end
  end
end
