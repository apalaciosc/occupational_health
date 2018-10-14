class User < ApplicationRecord
  has_one :medical
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :timeoutable

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "160x100>", profile_sidebar: "160x160>" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
end
