class Medical < ApplicationRecord
  belongs_to :area
  has_one :user
  enum civil_status: [:soltero, :casado, :viudo, :divorciado]
  enum sex: [:masculino, :femenino]

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :specialty, presence: true
  validates :dni, presence: true, uniqueness: true
  validates :area_id, presence: true
  validates :email, uniqueness: true
  after_create :create_user
  before_update :update_user, if: :email_changed?

  def create_user
    User.create(role_id: 2, email: self.email, password: "#{self.firstname}#{self.lastname}", medical_id: self.id)
  end

  def update_user
    User.update(email: self.email)
  end
end
