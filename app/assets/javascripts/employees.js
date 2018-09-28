$(function(){
  var tecactusApi = new TecactusApi("QtigyZVPvOpyv5yrJuqpPWlQnB4eufinOQrxkJQK")
  $(document).on('change', '.dni-employee', function(){
    var dni = $(this).val();
    tecactusApi.Reniec.getDni(dni)
    .then(function (response) {
      $('#employee_name').val(response.data.nombres + ' ' + response.data.apellido_paterno + ' ' + response.data.apellido_materno);
      $('#employee_address').val(response.data.direccion);
      console.log(response.data)
    })
    .catch(function (response) {
      console.log("algo ocurrió")
      console.log("código de error: " + response.code)
      console.log("mensaje de respuesta: " + response.status)
      console.log(response.data)
    })
  });

  $('#employee_birthday').on('change', function(){
    var birthday = $(this).val();
    var age = _calculateAge(birthday)
    $('#employee_age').val(age)
  })

  $('#employee_resi_in_place_work').on('change',function(){
    if ($(this).prop('checked')) {
      $("#employee_time_place_work").attr("readonly", false);
    }
    else{
      $("#employee_time_place_work").attr("readonly", true);
      $("#employee_time_place_work").val('');
    }
  })

  function _calculateAge(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  $('#chk1').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck").attr("readonly", false);
    }
    else{
      $("#myCheck").attr("readonly", true);
      $("#myCheck").val('');
    }
  })

  $('#chk2').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck2").attr("readonly", false);
    }
    else{
      $("#myCheck2").attr("readonly", true);
      $("#myCheck2").val('');
    }
  })

  $('#chk3').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck3").attr("readonly", false);
    }
    else{
      $("#myCheck3").attr("readonly", true);
      $("#myCheck3").val('');
    }
  })

  $('#chk4').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck4").attr("readonly", false);
    }
    else{
      $("#myCheck4").attr("readonly", true);
      $("#myCheck4").val('');
    }
  })

  $('#chk5').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck5").attr("readonly", false);
    }
    else{
      $("#myCheck5").attr("readonly", true);
      $("#myCheck5").val('');
    }
  })

  $('#chk6').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck6").attr("readonly", false);
      $("#myCheck7").attr("readonly", false);
      $("#myCheck8").attr("readonly", false);
    }
    else{
      $("#myCheck6").attr("readonly", true);
      $("#myCheck7").attr("readonly", true);
      $("#myCheck8").attr("readonly", true);
      $("#myCheck6").val('');
      $("#myCheck7").val('');
      $("#myCheck8").val('');
    }
  })

  $('#chk7').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck66").attr("readonly", false);
      $("#myCheck77").attr("readonly", false);
      $("#myCheck88").attr("readonly", false);
    }
    else{
      $("#myCheck66").attr("readonly", true);
      $("#myCheck77").attr("readonly", true);
      $("#myCheck88").attr("readonly", true);
      $("#myCheck66").val('');
      $("#myCheck77").val('');
      $("#myCheck88").val('');
    }
  })

  $('#chk8').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck666").attr("readonly", false);
      $("#myCheck777").attr("readonly", false);
      $("#myCheck888").attr("readonly", false);
    }
    else{
      $("#myCheck666").attr("readonly", true);
      $("#myCheck777").attr("readonly", true);
      $("#myCheck888").attr("readonly", true);
      $("#myCheck666").val('');
      $("#myCheck777").val('');
      $("#myCheck888").val('');
    }
  })

  $('#chk9').on('change',function(){
    if ($(this).prop('checked')) {
      $("#myCheck6666").attr("readonly", false);
      $("#myCheck7777").attr("readonly", false);
      $("#myCheck8888").attr("readonly", false);
    }
    else{
      $("#myCheck6666").attr("readonly", true);
      $("#myCheck7777").attr("readonly", true);
      $("#myCheck8888").attr("readonly", true);
      $("#myCheck6666").val('');
      $("#myCheck7777").val('');
      $("#myCheck8888").val('');
    }
  })
})
