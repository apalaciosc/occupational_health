class Absenteeism < ApplicationRecord
  belongs_to :employee
  enum associated_with_work: [:no, :si]
end
