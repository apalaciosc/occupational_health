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
    QuestionStress('st_question_1')
  });
  $('input[type=radio][name="exam[data][st_question_2]"]').on( 'change', function() {
    QuestionStress('st_question_2')
  });
  $('input[type=radio][name="exam[data][st_question_3]"]').on( 'change', function() {
    QuestionStress('st_question_3')
  });
  $('input[type=radio][name="exam[data][st_question_4]"]').on( 'change', function() {
    QuestionStress('st_question_4')
  });
  $('input[type=radio][name="exam[data][st_question_5]"]').on( 'change', function() {
    QuestionStress('st_question_5')
  });
  $('input[type=radio][name="exam[data][st_question_6]"]').on( 'change', function() {
    QuestionStress('st_question_6')
  });
  $('input[type=radio][name="exam[data][st_question_7]"]').on( 'change', function() {
    QuestionStress('st_question_7')
  });
  $('input[type=radio][name="exam[data][st_question_8]"]').on( 'change', function() {
    QuestionStress('st_question_8')
  });
  $('input[type=radio][name="exam[data][st_question_9]"]').on( 'change', function() {
    QuestionStress('st_question_9')
  });
  $('input[type=radio][name="exam[data][st_question_10]"]').on( 'change', function() {
    QuestionStress('st_question_10')
  });
  $('input[type=radio][name="exam[data][st_question_11]"]').on( 'change', function() {
    QuestionStress('st_question_11')
  });
  $('input[type=radio][name="exam[data][st_question_12]"]').on( 'change', function() {
    QuestionStress('st_question_12')
  });
  $('input[type=radio][name="exam[data][st_question_13]"]').on( 'change', function() {
    QuestionStress('st_question_13')
  });
  $('input[type=radio][name="exam[data][st_question_14]"]').on( 'change', function() {
    QuestionStress('st_question_14')
  });
  $('input[type=radio][name="exam[data][st_question_15]"]').on( 'change', function() {
    QuestionStress('st_question_15')
  });
  $('input[type=radio][name="exam[data][st_question_16]"]').on( 'change', function() {
    QuestionStress('st_question_16')
  });
  $('input[type=radio][name="exam[data][st_question_17]"]').on( 'change', function() {
    QuestionStress('st_question_17')
  });
  $('input[type=radio][name="exam[data][st_question_18]"]').on( 'change', function() {
    QuestionStress('st_question_18')
  });
  $('input[type=radio][name="exam[data][st_question_19]"]').on( 'change', function() {
    QuestionStress('st_question_19')
  });
  $('input[type=radio][name="exam[data][st_question_20]"]').on( 'change', function() {
    QuestionStress('st_question_20')
  });
  $('input[type=radio][name="exam[data][st_question_21]"]').on( 'change', function() {
    QuestionStress('st_question_21')
  });
  $('input[type=radio][name="exam[data][st_question_22]"]').on( 'change', function() {
    QuestionStress('st_question_22')
  });
  $('input[type=radio][name="exam[data][st_question_23]"]').on( 'change', function() {
    QuestionStress('st_question_23')
  });
  $('input[type=radio][name="exam[data][st_question_24]"]').on( 'change', function() {
    QuestionStress('st_question_24')
  });
  $('input[type=radio][name="exam[data][st_question_25]"]').on( 'change', function() {
    QuestionStress('st_question_25')
  });
  $('input[type=radio][name="exam[data][st_question_26]"]').on( 'change', function() {
    QuestionStress('st_question_26')
  });
  $('input[type=radio][name="exam[data][st_question_27]"]').on( 'change', function() {
    QuestionStress('st_question_27')
  });
  $('input[type=radio][name="exam[data][st_question_28]"]').on( 'change', function() {
    QuestionStress('st_question_28')
  });
  $('input[type=radio][name="exam[data][st_question_29]"]').on( 'change', function() {
    QuestionStress('st_question_29')
  });
  $('input[type=radio][name="exam[data][st_question_30]"]').on( 'change', function() {
    QuestionStress('st_question_30')
  });
  $('input[type=radio][name="exam[data][st_question_31]"]').on( 'change', function() {
    QuestionStress('st_question_31')
  });
  $('input[type=radio][name="exam[data][st_question_32]"]').on( 'change', function() {
    QuestionStress('st_question_32')
  });
  $('input[type=radio][name="exam[data][st_question_33]"]').on( 'change', function() {
    QuestionStress('st_question_33')
  });
  $('input[type=radio][name="exam[data][st_question_34]"]').on( 'change', function() {
    QuestionStress('st_question_34')
  });
  $('input[type=radio][name="exam[data][st_question_35]"]').on( 'change', function() {
    QuestionStress('st_question_35')
  });
  $('input[type=radio][name="exam[data][st_question_36]"]').on( 'change', function() {
    QuestionStress('st_question_36')
  });
  $('input[type=radio][name="exam[data][st_question_37]"]').on( 'change', function() {
    QuestionStress('st_question_37')
  });
  $('input[type=radio][name="exam[data][st_question_38]"]').on( 'change', function() {
    QuestionStress('st_question_38')
  });
  $('input[type=radio][name="exam[data][st_question_39]"]').on( 'change', function() {
    QuestionStress('st_question_39')
  });
  $('input[type=radio][name="exam[data][st_question_40]"]').on( 'change', function() {
    QuestionStress('st_question_40')
  });
  $('input[type=radio][name="exam[data][st_question_41]"]').on( 'change', function() {
    QuestionStress('st_question_41')
  });
  $('input[type=radio][name="exam[data][st_question_42]"]').on( 'change', function() {
    QuestionStress('st_question_42')
  });
  $('input[type=radio][name="exam[data][st_question_43]"]').on( 'change', function() {
    QuestionStress('st_question_43')
  });
  $('input[type=radio][name="exam[data][st_question_44]"]').on( 'change', function() {
    QuestionStress('st_question_44')
  });
  $('input[type=radio][name="exam[data][st_question_45]"]').on( 'change', function() {
    QuestionStress('st_question_45')
  });
  $('input[type=radio][name="exam[data][st_question_46]"]').on( 'change', function() {
    QuestionStress('st_question_46')
  });
  $('input[type=radio][name="exam[data][st_question_47]"]').on( 'change', function() {
    QuestionStress('st_question_47')
  });
  $('input[type=radio][name="exam[data][st_question_48]"]').on( 'change', function() {
    QuestionStress('st_question_48')
  });

  function QuestionStress(question){
    var value_radio = $('input[name="exam[data][' + question + ']"]:checked').val();
    var num = question.split('_')
    $('#exam_data_st_answer_' + num[2]).val(value_radio);
    if (question == 'st_question_1' || question == 'st_question_2' || question == 'st_question_3' || question == 'st_question_4' || question == 'st_question_5' || question == 'st_question_6' || question == 'st_question_7' || question == 'st_question_8' || question == 'st_question_9' || question == 'st_question_10' || question == 'st_question_11' || question == 'st_question_12' || question == 'st_question_13' || question == 'st_question_14' || question == 'st_question_15' || question == 'st_question_16' ) {
      if (!$('#exam_data_st_answer_1').val() || !$('#exam_data_st_answer_2').val() || !$('#exam_data_st_answer_3').val() || !$('#exam_data_st_answer_4').val() || !$('#exam_data_st_answer_5').val() || !$('#exam_data_st_answer_6').val() || !$('#exam_data_st_answer_7').val() || !$('#exam_data_st_answer_8').val() || !$('#exam_data_st_answer_9').val() || !$('#exam_data_st_answer_10').val() || !$('#exam_data_st_answer_11').val() || !$('#exam_data_st_answer_12').val() || !$('#exam_data_st_answer_13').val() || !$('#exam_data_st_answer_14').val() || !$('#exam_data_st_answer_15').val() || !$('#exam_data_st_answer_16').val() ) {
        $('#exam_data_total_1').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_1').val()) + parseInt($('#exam_data_st_answer_2').val()) + parseInt($('#exam_data_st_answer_3').val()) + parseInt($('#exam_data_st_answer_4').val()) + parseInt($('#exam_data_st_answer_5').val()) + parseInt($('#exam_data_st_answer_6').val()) + parseInt($('#exam_data_st_answer_7').val()) + parseInt($('#exam_data_st_answer_8').val()) + parseInt($('#exam_data_st_answer_9').val()) + parseInt($('#exam_data_st_answer_10').val()) + parseInt($('#exam_data_st_answer_11').val()) +  parseInt($('#exam_data_st_answer_12').val()) +  parseInt($('#exam_data_st_answer_13').val()) +  parseInt($('#exam_data_st_answer_14').val()) +  parseInt($('#exam_data_st_answer_15').val()) +  parseInt($('#exam_data_st_answer_16').val())
        $('#exam_data_total_1').val(total)
      }
    }
    else if (question == 'st_question_17' || question == 'st_question_18' || question == 'st_question_19' || question == 'st_question_20' || question == 'st_question_21' || question == 'st_question_22' || question == 'st_question_23' || question == 'st_question_24' || question == 'st_question_25' || question == 'st_question_26' || question == 'st_question_27' || question == 'st_question_28' || question == 'st_question_29' || question == 'st_question_30' || question == 'st_question_31' || question == 'st_question_32' ) {
      if (!$('#exam_data_st_answer_17').val() || !$('#exam_data_st_answer_18').val() || !$('#exam_data_st_answer_19').val() || !$('#exam_data_st_answer_20').val() || !$('#exam_data_st_answer_21').val() || !$('#exam_data_st_answer_22').val() || !$('#exam_data_st_answer_23').val() || !$('#exam_data_st_answer_24').val() || !$('#exam_data_st_answer_25').val() || !$('#exam_data_st_answer_26').val() || !$('#exam_data_st_answer_27').val() || !$('#exam_data_st_answer_28').val() || !$('#exam_data_st_answer_29').val() || !$('#exam_data_st_answer_30').val() || !$('#exam_data_st_answer_31').val() || !$('#exam_data_st_answer_32').val() ) {
        $('#exam_data_total_2').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_17').val()) + parseInt($('#exam_data_st_answer_18').val()) + parseInt($('#exam_data_st_answer_19').val()) + parseInt($('#exam_data_st_answer_20').val()) + parseInt($('#exam_data_st_answer_21').val()) + parseInt($('#exam_data_st_answer_22').val()) + parseInt($('#exam_data_st_answer_23').val()) + parseInt($('#exam_data_st_answer_24').val()) + parseInt($('#exam_data_st_answer_25').val()) + parseInt($('#exam_data_st_answer_26').val()) + parseInt($('#exam_data_st_answer_27').val()) +  parseInt($('#exam_data_st_answer_28').val()) +  parseInt($('#exam_data_st_answer_29').val()) +  parseInt($('#exam_data_st_answer_30').val()) +  parseInt($('#exam_data_st_answer_31').val()) +  parseInt($('#exam_data_st_answer_32').val())
        $('#exam_data_total_2').val(total)
      }
    }
    else if (question == 'st_question_33' || question == 'st_question_34' || question == 'st_question_35' || question == 'st_question_36' || question == 'st_question_37' || question == 'st_question_38' || question == 'st_question_39' || question == 'st_question_40' || question == 'st_question_41' || question == 'st_question_42' || question == 'st_question_43' || question == 'st_question_44' || question == 'st_question_45' || question == 'st_question_46' || question == 'st_question_47' || question == 'st_question_48' ) {
      if (!$('#exam_data_st_answer_33').val() || !$('#exam_data_st_answer_34').val() || !$('#exam_data_st_answer_35').val() || !$('#exam_data_st_answer_36').val() || !$('#exam_data_st_answer_37').val() || !$('#exam_data_st_answer_38').val() || !$('#exam_data_st_answer_39').val() || !$('#exam_data_st_answer_40').val() || !$('#exam_data_st_answer_41').val() || !$('#exam_data_st_answer_42').val() || !$('#exam_data_st_answer_43').val() || !$('#exam_data_st_answer_44').val() || !$('#exam_data_st_answer_45').val() || !$('#exam_data_st_answer_46').val() || !$('#exam_data_st_answer_47').val() || !$('#exam_data_st_answer_48').val() ) {
        $('#exam_data_total_3').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_33').val()) + parseInt($('#exam_data_st_answer_34').val()) + parseInt($('#exam_data_st_answer_35').val()) + parseInt($('#exam_data_st_answer_36').val()) + parseInt($('#exam_data_st_answer_37').val()) + parseInt($('#exam_data_st_answer_38').val()) + parseInt($('#exam_data_st_answer_39').val()) + parseInt($('#exam_data_st_answer_40').val()) + parseInt($('#exam_data_st_answer_41').val()) + parseInt($('#exam_data_st_answer_42').val()) + parseInt($('#exam_data_st_answer_43').val()) +  parseInt($('#exam_data_st_answer_44').val()) +  parseInt($('#exam_data_st_answer_45').val()) +  parseInt($('#exam_data_st_answer_46').val()) +  parseInt($('#exam_data_st_answer_47').val()) +  parseInt($('#exam_data_st_answer_48').val())
        $('#exam_data_total_3').val(total)
      }
    }
    CalculateTotal_Stress()
  }
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
