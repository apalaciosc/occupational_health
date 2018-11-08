class Attention < ApplicationRecord
  belongs_to :employee
  belongs_to :user
  has_many :exams
  enum type_attention: [:'pre-ocupacional', :periódica, :retiro, :otro]

  validates :type_attention,
  presence: true

  validates :department,
  presence: true

  validates :province,
  presence: true

  validates :district,
  presence: true
end
