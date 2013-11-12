ActiveAdmin.register Feedback do     


  index do
        column :id
        column :created_at
        column :comment
        column :score

        column "Task" do |fb|
          link_to "Task", admin_task_path(fb.task) unless fb.task.blank?
        end

        actions :defaults=>false do |fb|
          link_to "Edit", edit_admin_feedback_path(fb)
        end
  end



end                                   
