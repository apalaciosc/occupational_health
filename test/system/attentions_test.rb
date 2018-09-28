require "application_system_test_case"

class AttentionsTest < ApplicationSystemTestCase
  setup do
    @attention = attentions(:one)
  end

  test "visiting the index" do
    visit attentions_url
    assert_selector "h1", text: "Attentions"
  end

  test "creating a Attention" do
    visit attentions_url
    click_on "New Attention"

    fill_in "Audiometry", with: @attention.audiometry
    fill_in "Department", with: @attention.department
    fill_in "District", with: @attention.district
    fill_in "Electrocardiogram", with: @attention.electrocardiogram
    fill_in "Employee", with: @attention.employee_id
    fill_in "Epworth Test", with: @attention.epworth_test
    fill_in "General", with: @attention.general
    fill_in "Nro Hc", with: @attention.nro_hc
    fill_in "Occupational Medical Diagnosis", with: @attention.occupational_medical_diagnosis
    fill_in "Odontogram", with: @attention.odontogram
    fill_in "Ophthalmological", with: @attention.ophthalmological
    fill_in "Other Diagnoses", with: @attention.other_diagnoses
    fill_in "Pathological Findings", with: @attention.pathological_findings
    fill_in "Personality Test", with: @attention.personality_test
    fill_in "Physical", with: @attention.physical
    fill_in "Province", with: @attention.province
    fill_in "Psychological", with: @attention.psychological
    fill_in "Radiology", with: @attention.radiology
    fill_in "Recommendations", with: @attention.recommendations
    fill_in "Spirometry", with: @attention.spirometry
    fill_in "Stress Test", with: @attention.stress_test
    fill_in "Structural Height Test", with: @attention.structural_height_test
    fill_in "Type", with: @attention.type
    fill_in "X Ray Oit", with: @attention.x_ray_oit
    click_on "Create Attention"

    assert_text "Attention was successfully created"
    click_on "Back"
  end

  test "updating a Attention" do
    visit attentions_url
    click_on "Edit", match: :first

    fill_in "Audiometry", with: @attention.audiometry
    fill_in "Department", with: @attention.department
    fill_in "District", with: @attention.district
    fill_in "Electrocardiogram", with: @attention.electrocardiogram
    fill_in "Employee", with: @attention.employee_id
    fill_in "Epworth Test", with: @attention.epworth_test
    fill_in "General", with: @attention.general
    fill_in "Nro Hc", with: @attention.nro_hc
    fill_in "Occupational Medical Diagnosis", with: @attention.occupational_medical_diagnosis
    fill_in "Odontogram", with: @attention.odontogram
    fill_in "Ophthalmological", with: @attention.ophthalmological
    fill_in "Other Diagnoses", with: @attention.other_diagnoses
    fill_in "Pathological Findings", with: @attention.pathological_findings
    fill_in "Personality Test", with: @attention.personality_test
    fill_in "Physical", with: @attention.physical
    fill_in "Province", with: @attention.province
    fill_in "Psychological", with: @attention.psychological
    fill_in "Radiology", with: @attention.radiology
    fill_in "Recommendations", with: @attention.recommendations
    fill_in "Spirometry", with: @attention.spirometry
    fill_in "Stress Test", with: @attention.stress_test
    fill_in "Structural Height Test", with: @attention.structural_height_test
    fill_in "Type", with: @attention.type
    fill_in "X Ray Oit", with: @attention.x_ray_oit
    click_on "Update Attention"

    assert_text "Attention was successfully updated"
    click_on "Back"
  end

  test "destroying a Attention" do
    visit attentions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Attention was successfully destroyed"
  end
end
