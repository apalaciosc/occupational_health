$(function(){
  //****************************++++Epworth test*********************************
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
  //****************************++++Electrocardiogram*********************************
  $('#add-cie10').on('click',function(){
    $('#cie10').append('<div class="col-lg-6"><label>CIE 10:</label><input type="text" name="exam[data][cie10][]" id="exam_data_cie10_" value="" class="form-control"></div><div class="col-lg-6"><label>Descripción:</label><input type="text" name="exam[data][description_cie10][]" id="exam_data_cie10_" value="" class="form-control"></div>')
  })
  //****************************++++Stress test*********************************
  $('input[type=radio][name="exam[data][st_question_1]"]').on( 'change', function() {
    var value_radio = $('input[name="exam[data][st_question_1]"]:checked').val();
    $('#exam_data_st_answer_1').val(value_radio);
    if (!$('#exam_data_st_answer_1').val() || !$('#exam_data_st_answer_2').val() || !$('#exam_data_st_answer_3').val() || !$('#exam_data_st_answer_4').val() || !$('#exam_data_st_answer_5').val() || !$('#exam_data_st_answer_6').val() || !$('#exam_data_st_answer_7').val() || !$('#exam_data_st_answer_8').val() || !$('#exam_data_st_answer_9').val() || !$('#exam_data_st_answer_10').val() || !$('#exam_data_st_answer_11').val() || !$('#exam_data_st_answer_12').val() || !$('#exam_data_st_answer_13').val() || !$('#exam_data_st_answer_14').val() || !$('#exam_data_st_answer_15').val() || !$('#exam_data_st_answer_16').val() ) {
      $('#exam_data_total_1').val('-')
    }
    else{
      var total = parseInt($('#exam_data_st_answer_1').val()) + parseInt($('#exam_data_st_answer_2').val()) + parseInt($('#exam_data_st_answer_3').val()) + parseInt($('#exam_data_st_answer_4').val()) + parseInt($('#exam_data_st_answer_5').val()) + parseInt($('#exam_data_st_answer_6').val()) + parseInt($('#exam_data_st_answer_7').val()) + parseInt($('#exam_data_st_answer_8').val()) + parseInt($('#exam_data_st_answer_9').val()) + parseInt($('#exam_data_st_answer_10').val()) + parseInt($('#exam_data_st_answer_11').val()) +  parseInt($('#exam_data_st_answer_12').val()) +  parseInt($('#exam_data_st_answer_13').val()) +  parseInt($('#exam_data_st_answer_14').val()) +  parseInt($('#exam_data_st_answer_15').val()) +  parseInt($('#exam_data_st_answer_16').val())
      $('#exam_data_total_1').val(total)
    }
    CalculateTotal_Stress()
  });
  function CalculateTotal_Stress(){
    var total = 0;
    if (!$('#exam_data_total_1').val() || !$('#exam_data_total_2').val() || !$('#exam_data_total_3').val() || !$('#exam_data_total_4').val() || !$('#exam_data_total_5').val() || !$('#exam_data_total_6').val() || !$('#exam_data_total_7').val() || !$('#exam_data_total_8').val() || !$('#exam_data_total_9').val() || !$('#exam_data_total_10').val() || !$('#exam_data_total_11').val() || !$('#exam_data_total_12').val() ) {
      $('#exam_data_global').val('-')
    }
    else{
      var total = parseInt($('#exam_data_total_1').val()) + parseInt($('#exam_data_total_2').val()) + parseInt($('#exam_data_total_3').val()) + parseInt($('#exam_data_total_4').val()) + parseInt($('#exam_data_total_5').val()) + parseInt($('#exam_data_total_6').val()) + parseInt($('#exam_data_total_7').val()) + parseInt($('#exam_data_total_8').val()) + parseInt($('#exam_data_total_9').val()) + parseInt($('#exam_data_total_10').val()) + parseInt($('#exam_data_total_11').val()) + parseInt($('#exam_data_total_12').val())
      $('#exam_data_global').val(total)
    }
  }
})
