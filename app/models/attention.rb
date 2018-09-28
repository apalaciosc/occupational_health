class Attention < ApplicationRecord
  belongs_to :employee
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
