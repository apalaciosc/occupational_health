$(function(){
  var tecactusApi = new TecactusApi("QtigyZVPvOpyv5yrJuqpPWlQnB4eufinOQrxkJQK")

  $(document).on('change', '.ruc-enterprise', function(){
    // consulta Sunat usando número de RUC
    var ruc = $(this).val();
    tecactusApi.Sunat.getByRuc(ruc)
    .then(function (response) {
      $('#input-name').val(response.data.razon_social);
      $('#input-workplace').val(response.data.direccion);
    })
    .catch(function (response) {
      $('#input-ruc').val('');
      swal("Alerta", response.status, "warning");
    })
  });
  //Clean modal
  $('#modalCreate').on('hidden.bs.modal', function(){
    $(this)
    .find("input,textarea,select")
    .val('')
    .end()
    .find("input[type=checkbox], input[type=radio]")
    .prop("checked", "")
    .end();
  });
})
