module MedicalsHelper
  def civil_status_medical_for_select
    [
      ['Soltero','soltero'],
      ['Casado','casado'],
      ['Viudo','viudo'],
      ['Divorciado','divorciado']
    ]
  end

  def specialty_for_select
    Area.all.pluck(:name, :id)
  end

  def sex_medical_for_select
    [
      ['Masculino','masculino'],
      ['Femenino','femenino']
    ]
  end
end
