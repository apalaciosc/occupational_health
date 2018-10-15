class Medical < ApplicationRecord
  belongs_to :area
  has_one :user

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :specialty, presence: true
  validates :dni, presence: true, uniqueness: true
  validates :area_id, presence: true
  validates :email, uniqueness: true
end
