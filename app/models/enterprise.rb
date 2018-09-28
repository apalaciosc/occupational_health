class Enterprise < ApplicationRecord
  validates :ruc,
  presence: true,

  length: {
    minimum: 11,
    maximum: 11,
    too_short: "El RUC de la empresa debe tener al menos %{count} caracteres.",
    too_long: "El RUC de la empresa debe tener maximo %{count} caracteres."
  }

  validates :name,
  presence: true

  validates :economic_activity,
  presence: true

  validates :departament,
  presence: true

  validates :province,
  presence: true

  validates :district,
  presence: true
end
