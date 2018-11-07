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

  def employee_for_select
    @employees_select = []
    @employees = Employee.all.order(name: :asc)
    @employees.each do |e|
      employee = []
      x = e.dni + ' : ' +e.name
      employee.push(x,e.id)
      @employees_select.push(employee)
    end
    @employees_select
  end
end
