$(function(){
  $('input[type=radio][name="exam[data][question1]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][question1]"]:checked').val();
    $('#exam_data_total_1').val(value_radio);
    CalculateTotal()
  });

  $('input[type=radio][name="exam[data][question2]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][question2]"]:checked').val();
    $('#exam_data_total_2').val(value_radio);
    CalculateTotal()
  });

  $('input[type=radio][name="exam[data][question3]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][question3]"]:checked').val();
    $('#exam_data_total_3').val(value_radio);
    CalculateTotal()
  });

  $('input[type=radio][name="exam[data][question4]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][question4]"]:checked').val();
    $('#exam_data_total_4').val(value_radio);
    CalculateTotal()
  });

  $('input[type=radio][name="exam[data][question5]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][question5]"]:checked').val();
    $('#exam_data_total_5').val(value_radio);
    CalculateTotal()
  });

  $('input[type=radio][name="exam[data][question6]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][question6]"]:checked').val();
    $('#exam_data_total_6').val(value_radio);
    CalculateTotal()
  });

  $('input[type=radio][name="exam[data][question7]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][question7]"]:checked').val();
    $('#exam_data_total_7').val(value_radio);
    CalculateTotal()
  });

  $('input[type=radio][name="exam[data][question8]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][question8]"]:checked').val();
    $('#exam_data_total_8').val(value_radio);
    CalculateTotal()
  });

  function CalculateTotal(){
    var total = 0;
    if (!$('#exam_data_total_1').val() || !$('#exam_data_total_2').val() || !$('#exam_data_total_3').val() || !$('#exam_data_total_4').val() || !$('#exam_data_total_5').val() || !$('#exam_data_total_6').val() || !$('#exam_data_total_7').val() || !$('#exam_data_total_8').val() ) {
      $('#exam_data_total_general').val('Debe responder todas las preguntas para obtener resultado.')
    }
    else{
      var total = parseInt($('#exam_data_total_1').val()) + parseInt($('#exam_data_total_2').val()) + parseInt($('#exam_data_total_3').val()) + parseInt($('#exam_data_total_4').val()) + parseInt($('#exam_data_total_5').val()) + parseInt($('#exam_data_total_6').val()) + parseInt($('#exam_data_total_7').val()) + parseInt($('#exam_data_total_8').val())
      $('#exam_data_total_general').val(total)
    }
  }
})
