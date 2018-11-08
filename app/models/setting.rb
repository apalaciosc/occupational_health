class Setting < ApplicationRecord
  validates :license_expiration, presence: true
end
