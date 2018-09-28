class TypeExam < ApplicationRecord
  belongs_to :area
  has_many :exams
end
