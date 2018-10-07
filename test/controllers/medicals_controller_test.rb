require 'test_helper'

class MedicalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @medical = medicals(:one)
  end

  test "should get index" do
    get medicals_url
    assert_response :success
  end

  test "should get new" do
    get new_medical_url
    assert_response :success
  end

  test "should create medical" do
    assert_difference('Medical.count') do
      post medicals_url, params: { medical: { address: @medical.address, aptitude: @medical.aptitude, area_id: @medical.area_id, birthday: @medical.birthday, department: @medical.department, district: @medical.district, dni: @medical.dni, firm: @medical.firm, firstname: @medical.firstname, interests: @medical.interests, lastname: @medical.lastname, phone: @medical.phone, province: @medical.province, range: @medical.range, specialty: @medical.specialty } }
    end

    assert_redirected_to medical_url(Medical.last)
  end

  test "should show medical" do
    get medical_url(@medical)
    assert_response :success
  end

  test "should get edit" do
    get edit_medical_url(@medical)
    assert_response :success
  end

  test "should update medical" do
    patch medical_url(@medical), params: { medical: { address: @medical.address, aptitude: @medical.aptitude, area_id: @medical.area_id, birthday: @medical.birthday, department: @medical.department, district: @medical.district, dni: @medical.dni, firm: @medical.firm, firstname: @medical.firstname, interests: @medical.interests, lastname: @medical.lastname, phone: @medical.phone, province: @medical.province, range: @medical.range, specialty: @medical.specialty } }
    assert_redirected_to medical_url(@medical)
  end

  test "should destroy medical" do
    assert_difference('Medical.count', -1) do
      delete medical_url(@medical)
    end

    assert_redirected_to medicals_url
  end
end
