class Setting < ApplicationRecord
  validates :license_expiration, presence: true
  has_attached_file :avatar_clinic, styles: { medium: "300x300>", thumb: "282x100>" }
  validates_attachment_content_type :avatar_clinic, content_type: /\Aimage\/.*\z/
end
