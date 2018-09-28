require 'test_helper'

class AttentionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @attention = attentions(:one)
  end

  test "should get index" do
    get attentions_url
    assert_response :success
  end

  test "should get new" do
    get new_attention_url
    assert_response :success
  end

  test "should create attention" do
    assert_difference('Attention.count') do
      post attentions_url, params: { attention: { audiometry: @attention.audiometry, department: @attention.department, district: @attention.district, electrocardiogram: @attention.electrocardiogram, employee_id: @attention.employee_id, epworth_test: @attention.epworth_test, general: @attention.general, nro_hc: @attention.nro_hc, occupational_medical_diagnosis: @attention.occupational_medical_diagnosis, odontogram: @attention.odontogram, ophthalmological: @attention.ophthalmological, other_diagnoses: @attention.other_diagnoses, pathological_findings: @attention.pathological_findings, personality_test: @attention.personality_test, physical: @attention.physical, province: @attention.province, psychological: @attention.psychological, radiology: @attention.radiology, recommendations: @attention.recommendations, spirometry: @attention.spirometry, stress_test: @attention.stress_test, structural_height_test: @attention.structural_height_test, type: @attention.type, x_ray_oit: @attention.x_ray_oit } }
    end

    assert_redirected_to attention_url(Attention.last)
  end

  test "should show attention" do
    get attention_url(@attention)
    assert_response :success
  end

  test "should get edit" do
    get edit_attention_url(@attention)
    assert_response :success
  end

  test "should update attention" do
    patch attention_url(@attention), params: { attention: { audiometry: @attention.audiometry, department: @attention.department, district: @attention.district, electrocardiogram: @attention.electrocardiogram, employee_id: @attention.employee_id, epworth_test: @attention.epworth_test, general: @attention.general, nro_hc: @attention.nro_hc, occupational_medical_diagnosis: @attention.occupational_medical_diagnosis, odontogram: @attention.odontogram, ophthalmological: @attention.ophthalmological, other_diagnoses: @attention.other_diagnoses, pathological_findings: @attention.pathological_findings, personality_test: @attention.personality_test, physical: @attention.physical, province: @attention.province, psychological: @attention.psychological, radiology: @attention.radiology, recommendations: @attention.recommendations, spirometry: @attention.spirometry, stress_test: @attention.stress_test, structural_height_test: @attention.structural_height_test, type: @attention.type, x_ray_oit: @attention.x_ray_oit } }
    assert_redirected_to attention_url(@attention)
  end

  test "should destroy attention" do
    assert_difference('Attention.count', -1) do
      delete attention_url(@attention)
    end

    assert_redirected_to attentions_url
  end
end
