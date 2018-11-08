class Exam < ApplicationRecord
  belongs_to :type_exam
  belongs_to :attention
  belongs_to :user
  serialize :data, Hash
end
