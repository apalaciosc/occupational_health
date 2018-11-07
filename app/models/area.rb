class Area < ApplicationRecord
  has_many :type_exams
  has_many :users

  validates :name,
  presence: true

  validates :description,
  presence: true
end
