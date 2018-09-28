class Area < ApplicationRecord
  has_many :type_exams

  validates :name,
  presence: true

  validates :description,
  presence: true
end
