require "application_system_test_case"

class MedicalsTest < ApplicationSystemTestCase
  setup do
    @medical = medicals(:one)
  end

  test "visiting the index" do
    visit medicals_url
    assert_selector "h1", text: "Medicals"
  end

  test "creating a Medical" do
    visit medicals_url
    click_on "New Medical"

    fill_in "Address", with: @medical.address
    fill_in "Aptitude", with: @medical.aptitude
    fill_in "Area", with: @medical.area_id
    fill_in "Birthday", with: @medical.birthday
    fill_in "Department", with: @medical.department
    fill_in "District", with: @medical.district
    fill_in "Dni", with: @medical.dni
    fill_in "Firm", with: @medical.firm
    fill_in "Firstname", with: @medical.firstname
    fill_in "Interests", with: @medical.interests
    fill_in "Lastname", with: @medical.lastname
    fill_in "Phone", with: @medical.phone
    fill_in "Province", with: @medical.province
    fill_in "Range", with: @medical.range
    fill_in "Specialty", with: @medical.specialty
    click_on "Create Medical"

    assert_text "Medical was successfully created"
    click_on "Back"
  end

  test "updating a Medical" do
    visit medicals_url
    click_on "Edit", match: :first

    fill_in "Address", with: @medical.address
    fill_in "Aptitude", with: @medical.aptitude
    fill_in "Area", with: @medical.area_id
    fill_in "Birthday", with: @medical.birthday
    fill_in "Department", with: @medical.department
    fill_in "District", with: @medical.district
    fill_in "Dni", with: @medical.dni
    fill_in "Firm", with: @medical.firm
    fill_in "Firstname", with: @medical.firstname
    fill_in "Interests", with: @medical.interests
    fill_in "Lastname", with: @medical.lastname
    fill_in "Phone", with: @medical.phone
    fill_in "Province", with: @medical.province
    fill_in "Range", with: @medical.range
    fill_in "Specialty", with: @medical.specialty
    click_on "Update Medical"

    assert_text "Medical was successfully updated"
    click_on "Back"
  end

  test "destroying a Medical" do
    visit medicals_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Medical was successfully destroyed"
  end
end
