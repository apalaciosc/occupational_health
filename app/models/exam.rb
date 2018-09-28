class Exam < ApplicationRecord
  belongs_to :type_exam
  belongs_to :attention
  serialize :data, Hash
end
