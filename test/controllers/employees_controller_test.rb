require 'test_helper'

class EmployeesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @employee = employees(:one)
  end

  test "should get index" do
    get employees_url
    assert_response :success
  end

  test "should get new" do
    get new_employee_url
    assert_response :success
  end

  test "should create employee" do
    assert_difference('Employee.count') do
      post employees_url, params: { employee: { address: @employee.address, age: @employee.age, birthday: @employee.birthday, civil_status: @employee.civil_status, degree_instruction: @employee.degree_instruction, department: @employee.department, district: @employee.district, dni: @employee.dni, email: @employee.email, enterprise_id: @employee.enterprise_id, eps: @employee.eps, essalud: @employee.essalud, name: @employee.name, numb_depart_int: @employee.numb_depart_int, number_children: @employee.number_children, number_dependents: @employee.number_dependents, other: @employee.other, province: @employee.province, resi_in_place_work: @employee.resi_in_place_work, sctr: @employee.sctr, time_place_work: @employee.time_place_work, urbanization: @employee.urbanization, way: @employee.way } }
    end

    assert_redirected_to employee_url(Employee.last)
  end

  test "should show employee" do
    get employee_url(@employee)
    assert_response :success
  end

  test "should get edit" do
    get edit_employee_url(@employee)
    assert_response :success
  end

  test "should update employee" do
    patch employee_url(@employee), params: { employee: { address: @employee.address, age: @employee.age, birthday: @employee.birthday, civil_status: @employee.civil_status, degree_instruction: @employee.degree_instruction, department: @employee.department, district: @employee.district, dni: @employee.dni, email: @employee.email, enterprise_id: @employee.enterprise_id, eps: @employee.eps, essalud: @employee.essalud, name: @employee.name, numb_depart_int: @employee.numb_depart_int, number_children: @employee.number_children, number_dependents: @employee.number_dependents, other: @employee.other, province: @employee.province, resi_in_place_work: @employee.resi_in_place_work, sctr: @employee.sctr, time_place_work: @employee.time_place_work, urbanization: @employee.urbanization, way: @employee.way } }
    assert_redirected_to employee_url(@employee)
  end

  test "should destroy employee" do
    assert_difference('Employee.count', -1) do
      delete employee_url(@employee)
    end

    assert_redirected_to employees_url
  end
end
