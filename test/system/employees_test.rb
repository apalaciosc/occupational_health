require "application_system_test_case"

class EmployeesTest < ApplicationSystemTestCase
  setup do
    @employee = employees(:one)
  end

  test "visiting the index" do
    visit employees_url
    assert_selector "h1", text: "Employees"
  end

  test "creating a Employee" do
    visit employees_url
    click_on "New Employee"

    fill_in "Address", with: @employee.address
    fill_in "Age", with: @employee.age
    fill_in "Birthday", with: @employee.birthday
    fill_in "Civil Status", with: @employee.civil_status
    fill_in "Degree Instruction", with: @employee.degree_instruction
    fill_in "Department", with: @employee.department
    fill_in "District", with: @employee.district
    fill_in "Dni", with: @employee.dni
    fill_in "Email", with: @employee.email
    fill_in "Enterprise", with: @employee.enterprise_id
    fill_in "Eps", with: @employee.eps
    fill_in "Essalud", with: @employee.essalud
    fill_in "Name", with: @employee.name
    fill_in "Numb Depart Int", with: @employee.numb_depart_int
    fill_in "Number Children", with: @employee.number_children
    fill_in "Number Dependents", with: @employee.number_dependents
    fill_in "Other", with: @employee.other
    fill_in "Province", with: @employee.province
    fill_in "Resi In Place Work", with: @employee.resi_in_place_work
    fill_in "Sctr", with: @employee.sctr
    fill_in "Time Place Work", with: @employee.time_place_work
    fill_in "Urbanization", with: @employee.urbanization
    fill_in "Way", with: @employee.way
    click_on "Create Employee"

    assert_text "Employee was successfully created"
    click_on "Back"
  end

  test "updating a Employee" do
    visit employees_url
    click_on "Edit", match: :first

    fill_in "Address", with: @employee.address
    fill_in "Age", with: @employee.age
    fill_in "Birthday", with: @employee.birthday
    fill_in "Civil Status", with: @employee.civil_status
    fill_in "Degree Instruction", with: @employee.degree_instruction
    fill_in "Department", with: @employee.department
    fill_in "District", with: @employee.district
    fill_in "Dni", with: @employee.dni
    fill_in "Email", with: @employee.email
    fill_in "Enterprise", with: @employee.enterprise_id
    fill_in "Eps", with: @employee.eps
    fill_in "Essalud", with: @employee.essalud
    fill_in "Name", with: @employee.name
    fill_in "Numb Depart Int", with: @employee.numb_depart_int
    fill_in "Number Children", with: @employee.number_children
    fill_in "Number Dependents", with: @employee.number_dependents
    fill_in "Other", with: @employee.other
    fill_in "Province", with: @employee.province
    fill_in "Resi In Place Work", with: @employee.resi_in_place_work
    fill_in "Sctr", with: @employee.sctr
    fill_in "Time Place Work", with: @employee.time_place_work
    fill_in "Urbanization", with: @employee.urbanization
    fill_in "Way", with: @employee.way
    click_on "Update Employee"

    assert_text "Employee was successfully updated"
    click_on "Back"
  end

  test "destroying a Employee" do
    visit employees_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Employee was successfully destroyed"
  end
end
