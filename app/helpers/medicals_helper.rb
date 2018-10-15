module MedicalsHelper
  def civil_status_medical_for_select
    [
      ['Soltero','soltero'],
      ['Casado','casado'],
      ['Viudo','viudo'],
      ['Divorciado','divorciado']
    ]
  end

  def sex_medical_for_select
    [
      ['Masculino','masculino'],
      ['Femenino','femenino']
    ]
  end
end
