module EmployeesHelper
  def civil_status_for_select
    [
      ['Soltero','soltero'],
      ['Casado','casado'],
      ['Viudo','viudo'],
      ['Divorciado','divorciado']
    ]
  end

  def enterprises_for_select
    Enterprise.all.pluck(:name, :id)
  end

  def sex_for_select
    [
      ['Masculino','masculino'],
      ['Femenino','femenino']
    ]
  end
end
