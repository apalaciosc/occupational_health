class Medical < ApplicationRecord
  belongs_to :area

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :specialty, presence: true
  validates :dni, presence: true, uniqueness: true
  validates :area_id, presence: true
end
