class Feedback < ActiveRecord::Base
  attr_accessible :comment, :score, :task_id
end
