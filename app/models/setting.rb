class Setting < ApplicationRecord
  validates :name_clinic, :license_expiration, presence: true
end
