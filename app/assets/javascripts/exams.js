$(function(){
  //****************************++++Musculo-esqueletica*********************************
  $('input[type=radio][name="exam[data][st_question_1]"]').on( 'change', function() {
    ExamSkeletal('st_question_1')
  });
  $('input[type=radio][name="exam[data][st_question_2]"]').on( 'change', function() {
    ExamSkeletal('st_question_2')
  });
  $('input[type=radio][name="exam[data][st_question_3]"]').on( 'change', function() {
    ExamSkeletal('st_question_3')
  });
  $('input[type=radio][name="exam[data][st_question_4]"]').on( 'change', function() {
    ExamSkeletal('st_question_4')
  });
  $('input[type=radio][name="exam[data][st_question_5]"]').on( 'change', function() {
    ExamSkeletal('st_question_5')
  });
  $('input[type=radio][name="exam[data][st_question_6]"]').on( 'change', function() {
    ExamSkeletal('st_question_6')
  });
  $('input[type=radio][name="exam[data][st_question_7]"]').on( 'change', function() {
    ExamSkeletal('st_question_7')
  });
  $('input[type=radio][name="exam[data][st_question_8]"]').on( 'change', function() {
    ExamSkeletal('st_question_8')
  });

  function ExamSkeletal(quest){
    var value_radio = $('input[name="exam[data][' + quest + ']"]:checked').val();
    var num = quest.split('_')
    $('#exam_data_st_answer_' + num[2]).val(value_radio);
    if (quest == 'st_question_1' || quest == 'st_question_2' || quest == 'st_question_3' || quest == 'st_question_4'){
      if (!$('#exam_data_st_answer_1').val() || !$('#exam_data_st_answer_2').val() || !$('#exam_data_st_answer_3').val() || !$('#exam_data_st_answer_4').val()) {
        $('#exam_data_total_1').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_1').val()) + parseInt($('#exam_data_st_answer_2').val()) + parseInt($('#exam_data_st_answer_3').val()) + parseInt($('#exam_data_st_answer_4').val())
        console.log(total);
        $('#exam_data_total_1').val(total)
      }
    }
    else if (quest == 'st_question_5' || quest == 'st_question_6' || quest == 'st_question_7' || quest == 'st_question_8'){
      if (!$('#exam_data_st_answer_5').val() || !$('#exam_data_st_answer_6').val() || !$('#exam_data_st_answer_7').val() || !$('#exam_data_st_answer_8').val()) {
        $('#exam_data_total_2').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_5').val()) + parseInt($('#exam_data_st_answer_6').val()) + parseInt($('#exam_data_st_answer_7').val()) + parseInt($('#exam_data_st_answer_8').val())
        $('#exam_data_total_2').val(total)
      }
    }
  }
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
  $('input[type=radio][name="exam[data][st_question_49]"]').on( 'change', function() {
    QuestionStress('st_question_49')
  });
  $('input[type=radio][name="exam[data][st_question_50]"]').on( 'change', function() {
    QuestionStress('st_question_50')
  });
  $('input[type=radio][name="exam[data][st_question_51]"]').on( 'change', function() {
    QuestionStress('st_question_51')
  });
  $('input[type=radio][name="exam[data][st_question_52]"]').on( 'change', function() {
    QuestionStress('st_question_52')
  });
  $('input[type=radio][name="exam[data][st_question_53]"]').on( 'change', function() {
    QuestionStress('st_question_53')
  });
  $('input[type=radio][name="exam[data][st_question_54]"]').on( 'change', function() {
    QuestionStress('st_question_54')
  });
  $('input[type=radio][name="exam[data][st_question_55]"]').on( 'change', function() {
    QuestionStress('st_question_55')
  });
  $('input[type=radio][name="exam[data][st_question_56]"]').on( 'change', function() {
    QuestionStress('st_question_56')
  });
  $('input[type=radio][name="exam[data][st_question_57]"]').on( 'change', function() {
    QuestionStress('st_question_57')
  });
  $('input[type=radio][name="exam[data][st_question_58]"]').on( 'change', function() {
    QuestionStress('st_question_58')
  });
  $('input[type=radio][name="exam[data][st_question_59]"]').on( 'change', function() {
    QuestionStress('st_question_59')
  });
  $('input[type=radio][name="exam[data][st_question_60]"]').on( 'change', function() {
    QuestionStress('st_question_60')
  });
  $('input[type=radio][name="exam[data][st_question_61]"]').on( 'change', function() {
    QuestionStress('st_question_61')
  });
  $('input[type=radio][name="exam[data][st_question_62]"]').on( 'change', function() {
    QuestionStress('st_question_62')
  });
  $('input[type=radio][name="exam[data][st_question_63]"]').on( 'change', function() {
    QuestionStress('st_question_63')
  });
  $('input[type=radio][name="exam[data][st_question_64]"]').on( 'change', function() {
    QuestionStress('st_question_64')
  });
  $('input[type=radio][name="exam[data][st_question_65]"]').on( 'change', function() {
    QuestionStress('st_question_65')
  });
  $('input[type=radio][name="exam[data][st_question_66]"]').on( 'change', function() {
    QuestionStress('st_question_66')
  });
  $('input[type=radio][name="exam[data][st_question_67]"]').on( 'change', function() {
    QuestionStress('st_question_67')
  });
  $('input[type=radio][name="exam[data][st_question_68]"]').on( 'change', function() {
    QuestionStress('st_question_68')
  });
  $('input[type=radio][name="exam[data][st_question_69]"]').on( 'change', function() {
    QuestionStress('st_question_69')
  });
  $('input[type=radio][name="exam[data][st_question_70]"]').on( 'change', function() {
    QuestionStress('st_question_70')
  });
  $('input[type=radio][name="exam[data][st_question_71]"]').on( 'change', function() {
    QuestionStress('st_question_71')
  });
  $('input[type=radio][name="exam[data][st_question_72]"]').on( 'change', function() {
    QuestionStress('st_question_72')
  });
  $('input[type=radio][name="exam[data][st_question_73]"]').on( 'change', function() {
    QuestionStress('st_question_73')
  });
  $('input[type=radio][name="exam[data][st_question_74]"]').on( 'change', function() {
    QuestionStress('st_question_74')
  });
  $('input[type=radio][name="exam[data][st_question_75]"]').on( 'change', function() {
    QuestionStress('st_question_75')
  });
  $('input[type=radio][name="exam[data][st_question_76]"]').on( 'change', function() {
    QuestionStress('st_question_76')
  });
  $('input[type=radio][name="exam[data][st_question_77]"]').on( 'change', function() {
    QuestionStress('st_question_77')
  });
  $('input[type=radio][name="exam[data][st_question_78]"]').on( 'change', function() {
    QuestionStress('st_question_78')
  });
  $('input[type=radio][name="exam[data][st_question_79]"]').on( 'change', function() {
    QuestionStress('st_question_79')
  });
  $('input[type=radio][name="exam[data][st_question_80]"]').on( 'change', function() {
    QuestionStress('st_question_80')
  });
  $('input[type=radio][name="exam[data][st_question_81]"]').on( 'change', function() {
    QuestionStress('st_question_81')
  });
  $('input[type=radio][name="exam[data][st_question_82]"]').on( 'change', function() {
    QuestionStress('st_question_82')
  });
  $('input[type=radio][name="exam[data][st_question_83]"]').on( 'change', function() {
    QuestionStress('st_question_83')
  });
  $('input[type=radio][name="exam[data][st_question_84]"]').on( 'change', function() {
    QuestionStress('st_question_84')
  });
  $('input[type=radio][name="exam[data][st_question_85]"]').on( 'change', function() {
    QuestionStress('st_question_85')
  });
  $('input[type=radio][name="exam[data][st_question_86]"]').on( 'change', function() {
    QuestionStress('st_question_86')
  });
  $('input[type=radio][name="exam[data][st_question_87]"]').on( 'change', function() {
    QuestionStress('st_question_87')
  });
  $('input[type=radio][name="exam[data][st_question_88]"]').on( 'change', function() {
    QuestionStress('st_question_88')
  });
  $('input[type=radio][name="exam[data][st_question_89]"]').on( 'change', function() {
    QuestionStress('st_question_89')
  });
  $('input[type=radio][name="exam[data][st_question_90]"]').on( 'change', function() {
    QuestionStress('st_question_90')
  });
  $('input[type=radio][name="exam[data][st_question_91]"]').on( 'change', function() {
    QuestionStress('st_question_91')
  });
  $('input[type=radio][name="exam[data][st_question_92]"]').on( 'change', function() {
    QuestionStress('st_question_92')
  });
  $('input[type=radio][name="exam[data][st_question_93]"]').on( 'change', function() {
    QuestionStress('st_question_93')
  });
  $('input[type=radio][name="exam[data][st_question_94]"]').on( 'change', function() {
    QuestionStress('st_question_94')
  });
  $('input[type=radio][name="exam[data][st_question_95]"]').on( 'change', function() {
    QuestionStress('st_question_95')
  });
  $('input[type=radio][name="exam[data][st_question_96]"]').on( 'change', function() {
    QuestionStress('st_question_96')
  });
  $('input[type=radio][name="exam[data][st_question_97]"]').on( 'change', function() {
    QuestionStress('st_question_97')
  });
  $('input[type=radio][name="exam[data][st_question_98]"]').on( 'change', function() {
    QuestionStress('st_question_98')
  });
  $('input[type=radio][name="exam[data][st_question_99]"]').on( 'change', function() {
    QuestionStress('st_question_99')
  });
  $('input[type=radio][name="exam[data][st_question_100]"]').on( 'change', function() {
    QuestionStress('st_question_100')
  });
  $('input[type=radio][name="exam[data][st_question_101]"]').on( 'change', function() {
    QuestionStress('st_question_101')
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
    else if (question == 'st_question_49' || question == 'st_question_50' || question == 'st_question_51' || question == 'st_question_52' || question == 'st_question_53' || question == 'st_question_54' || question == 'st_question_55' || question == 'st_question_56' || question == 'st_question_57' || question == 'st_question_58' || question == 'st_question_59' || question == 'st_question_60' || question == 'st_question_61' || question == 'st_question_62' || question == 'st_question_63' || question == 'st_question_64' ) {
      if (!$('#exam_data_st_answer_49').val() || !$('#exam_data_st_answer_50').val() || !$('#exam_data_st_answer_51').val() || !$('#exam_data_st_answer_52').val() || !$('#exam_data_st_answer_53').val() || !$('#exam_data_st_answer_54').val() || !$('#exam_data_st_answer_55').val() || !$('#exam_data_st_answer_56').val() || !$('#exam_data_st_answer_57').val() || !$('#exam_data_st_answer_58').val() || !$('#exam_data_st_answer_59').val() || !$('#exam_data_st_answer_60').val() || !$('#exam_data_st_answer_61').val() || !$('#exam_data_st_answer_62').val() || !$('#exam_data_st_answer_63').val() || !$('#exam_data_st_answer_64').val() ) {
        $('#exam_data_total_4').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_49').val()) + parseInt($('#exam_data_st_answer_50').val()) + parseInt($('#exam_data_st_answer_51').val()) + parseInt($('#exam_data_st_answer_52').val()) + parseInt($('#exam_data_st_answer_53').val()) + parseInt($('#exam_data_st_answer_54').val()) + parseInt($('#exam_data_st_answer_55').val()) + parseInt($('#exam_data_st_answer_56').val()) + parseInt($('#exam_data_st_answer_57').val()) + parseInt($('#exam_data_st_answer_58').val()) + parseInt($('#exam_data_st_answer_59').val()) +  parseInt($('#exam_data_st_answer_60').val()) +  parseInt($('#exam_data_st_answer_61').val()) +  parseInt($('#exam_data_st_answer_62').val()) +  parseInt($('#exam_data_st_answer_63').val()) +  parseInt($('#exam_data_st_answer_64').val())
        $('#exam_data_total_4').val(total)
      }
    }
    else if (question == 'st_question_65' || question == 'st_question_66' || question == 'st_question_67' || question == 'st_question_68' || question == 'st_question_69' || question == 'st_question_70' || question == 'st_question_71' || question == 'st_question_72' || question == 'st_question_73' || question == 'st_question_74' || question == 'st_question_75' || question == 'st_question_76' || question == 'st_question_77' || question == 'st_question_78' || question == 'st_question_79' || question == 'st_question_80' ) {
      if (!$('#exam_data_st_answer_65').val() || !$('#exam_data_st_answer_66').val() || !$('#exam_data_st_answer_67').val() || !$('#exam_data_st_answer_68').val() || !$('#exam_data_st_answer_69').val() || !$('#exam_data_st_answer_70').val() || !$('#exam_data_st_answer_71').val() || !$('#exam_data_st_answer_72').val() || !$('#exam_data_st_answer_73').val() || !$('#exam_data_st_answer_74').val() || !$('#exam_data_st_answer_75').val() || !$('#exam_data_st_answer_76').val() || !$('#exam_data_st_answer_77').val() || !$('#exam_data_st_answer_78').val() || !$('#exam_data_st_answer_79').val() || !$('#exam_data_st_answer_80').val() ) {
        $('#exam_data_total_5').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_65').val()) + parseInt($('#exam_data_st_answer_66').val()) + parseInt($('#exam_data_st_answer_67').val()) + parseInt($('#exam_data_st_answer_68').val()) + parseInt($('#exam_data_st_answer_69').val()) + parseInt($('#exam_data_st_answer_70').val()) + parseInt($('#exam_data_st_answer_71').val()) + parseInt($('#exam_data_st_answer_72').val()) + parseInt($('#exam_data_st_answer_73').val()) + parseInt($('#exam_data_st_answer_74').val()) + parseInt($('#exam_data_st_answer_75').val()) +  parseInt($('#exam_data_st_answer_76').val()) +  parseInt($('#exam_data_st_answer_77').val()) +  parseInt($('#exam_data_st_answer_78').val()) +  parseInt($('#exam_data_st_answer_79').val()) +  parseInt($('#exam_data_st_answer_80').val())
        $('#exam_data_total_5').val(total)
      }
    }
    else if (question == 'st_question_81' || question == 'st_question_82' || question == 'st_question_83' || question == 'st_question_84' || question == 'st_question_85' || question == 'st_question_86' || question == 'st_question_87' || question == 'st_question_88' || question == 'st_question_89' || question == 'st_question_90' || question == 'st_question_91' || question == 'st_question_92' || question == 'st_question_93' || question == 'st_question_94' || question == 'st_question_95' || question == 'st_question_96' ) {
      if (!$('#exam_data_st_answer_81').val() || !$('#exam_data_st_answer_82').val() || !$('#exam_data_st_answer_83').val() || !$('#exam_data_st_answer_84').val() || !$('#exam_data_st_answer_85').val() || !$('#exam_data_st_answer_86').val() || !$('#exam_data_st_answer_87').val() || !$('#exam_data_st_answer_88').val() || !$('#exam_data_st_answer_89').val() || !$('#exam_data_st_answer_90').val() || !$('#exam_data_st_answer_91').val() || !$('#exam_data_st_answer_92').val() || !$('#exam_data_st_answer_93').val() || !$('#exam_data_st_answer_94').val() || !$('#exam_data_st_answer_95').val() || !$('#exam_data_st_answer_96').val() ) {
        $('#exam_data_total_6').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_81').val()) + parseInt($('#exam_data_st_answer_82').val()) + parseInt($('#exam_data_st_answer_83').val()) + parseInt($('#exam_data_st_answer_84').val()) + parseInt($('#exam_data_st_answer_85').val()) + parseInt($('#exam_data_st_answer_86').val()) + parseInt($('#exam_data_st_answer_87').val()) + parseInt($('#exam_data_st_answer_88').val()) + parseInt($('#exam_data_st_answer_89').val()) + parseInt($('#exam_data_st_answer_90').val()) + parseInt($('#exam_data_st_answer_91').val()) +  parseInt($('#exam_data_st_answer_92').val()) +  parseInt($('#exam_data_st_answer_93').val()) +  parseInt($('#exam_data_st_answer_94').val()) +  parseInt($('#exam_data_st_answer_95').val()) +  parseInt($('#exam_data_st_answer_96').val())
        $('#exam_data_total_6').val(total)
      }
    }
    else if (question == 'st_question_97' || question == 'st_question_98' || question == 'st_question_99' || question == 'st_question_100' || question == 'st_question_101') {
      if (!$('#exam_data_st_answer_97').val() || !$('#exam_data_st_answer_98').val() || !$('#exam_data_st_answer_99').val() || !$('#exam_data_st_answer_100').val() || !$('#exam_data_st_answer_101').val() ) {
        $('#exam_data_total_7').val('-')
      }
      else{
        var total = parseInt($('#exam_data_st_answer_97').val()) + parseInt($('#exam_data_st_answer_98').val()) + parseInt($('#exam_data_st_answer_99').val()) + parseInt($('#exam_data_st_answer_100').val()) + parseInt($('#exam_data_st_answer_101').val())
        $('#exam_data_total_7').val(total)
      }
    }
    CalculateTotal_Stress();
  }
  function CalculateTotal_Stress(){
    var total = 0;
    if (!$('#exam_data_total_1').val() || !$('#exam_data_total_2').val() || !$('#exam_data_total_3').val() || !$('#exam_data_total_4').val() || !$('#exam_data_total_5').val() || !$('#exam_data_total_6').val() || !$('#exam_data_total_7').val() ) {
      $('#exam_data_global').val('-')
    }
    else{
      var total = parseInt($('#exam_data_total_1').val()) + parseInt($('#exam_data_total_2').val()) + parseInt($('#exam_data_total_3').val()) + parseInt($('#exam_data_total_4').val()) + parseInt($('#exam_data_total_5').val()) + parseInt($('#exam_data_total_6').val()) + parseInt($('#exam_data_total_7').val())
      $('#exam_data_global').val(total)
    }
  }
})
