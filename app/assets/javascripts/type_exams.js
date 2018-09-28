$(function(){
  //Piel
  $("#skin_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_skin').attr('readonly',false)
    }
  });
  $("#skin_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_skin').attr('readonly',true)
      $('#exam_data_skin').val('')
    }
  });
  //Cabello
  $("#hair_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_hair').attr('readonly',false)
    }
  });
  $("#hair_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_hair').attr('readonly',true)
      $('#exam_data_hair').val('')
    }
  });
  //Ojos
  $("#eyes_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_od_close_without_correctors').attr('readonly',false)
      $('#exam_data_oi_close_without_correctors').attr('readonly',false)
      $('#exam_data_od_close_with_correctors').attr('readonly',false)
      $('#exam_data_oi_close_with_correctors').attr('readonly',false)
      $('#exam_data_od_away_without_correctors').attr('readonly',false)
      $('#exam_data_oi_away_without_correctors').attr('readonly',false)
      $('#exam_data_od_away_with_correctors').attr('readonly',false)
      $('#exam_data_oi_away_with_correctors').attr('readonly',false)
      $('#exam_data_fundus').attr('readonly',false)
      $('#exam_data_vision_colors').attr('readonly',false)
      $('#exam_data_depth_vision').attr('readonly',false)
    }
  });
  $("#eyes_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_od_close_without_correctors').attr('readonly',true)
      $('#exam_data_oi_close_without_correctors').attr('readonly',true)
      $('#exam_data_od_close_with_correctors').attr('readonly',true)
      $('#exam_data_oi_close_with_correctors').attr('readonly',true)
      $('#exam_data_od_away_without_correctors').attr('readonly',true)
      $('#exam_data_oi_away_without_correctors').attr('readonly',true)
      $('#exam_data_od_away_with_correctors').attr('readonly',true)
      $('#exam_data_oi_away_with_correctors').attr('readonly',true)
      $('#exam_data_fundus').attr('readonly',true)
      $('#exam_data_vision_colors').attr('readonly',true)
      $('#exam_data_depth_vision').attr('readonly',true)
      $('#exam_data_od_close_without_correctors').val('')
      $('#exam_data_oi_close_without_correctors').val('')
      $('#exam_data_od_close_with_correctors').val('')
      $('#exam_data_oi_close_with_correctors').val('')
      $('#exam_data_od_away_without_correctors').val('')
      $('#exam_data_oi_away_without_correctors').val('')
      $('#exam_data_od_away_with_correctors').val('')
      $('#exam_data_oi_away_with_correctors').val('')
      $('#exam_data_fundus').val('')
      $('#exam_data_vision_colors').val('')
      $('#exam_data_depth_vision').val('')
    }
  });
  //Oídos
  $("#ears_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_ears').attr('readonly',false)
    }
  });
  $("#ears_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_ears').attr('readonly',true)
      $('#exam_data_ears').val('')
    }
  });
  //Nariz
  $("#nose_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_nose').attr('readonly',false)
    }
  });
  $("#nose_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_nose').attr('readonly',true)
      $('#exam_data_nose').val('')
    }
  });
  //Boca
  $("#mouth_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_mouth').attr('readonly',false)
    }
  });
  $("#mouth_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_mouth').attr('readonly',true)
      $('#exam_data_mouth').val('')
    }
  });
  //Faringe
  $("#pharynx_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_pharynx').attr('readonly',false)
    }
  });
  $("#pharynx_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_pharynx').attr('readonly',true)
      $('#exam_data_pharynx').val('')
    }
  });
  //Cuello
  $("#neck_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_neck').attr('readonly',false)
    }
  });
  $("#neck_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_neck').attr('readonly',true)
      $('#exam_data_neck').val('')
    }
  });
  //Aparato respiratorio
  $("#respiratory_system_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_respiratory_system').attr('readonly',false)
    }
  });
  $("#respiratory_system_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_respiratory_system').attr('readonly',true)
      $('#exam_data_respiratory_system').val('')
    }
  });
  //Aparato cardiovascular
  $("#cardiovascular_system_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_cardiovascular_system').attr('readonly',false)
    }
  });
  $("#cardiovascular_system_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_cardiovascular_system').attr('readonly',true)
      $('#exam_data_cardiovascular_system').val('')
    }
  });
  //Aparato digestivo
  $("#digestive_system_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_digestive_system').attr('readonly',false)
    }
  });
  $("#digestive_system_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_digestive_system').attr('readonly',true)
      $('#exam_data_digestive_system').val('')
    }
  });
  //Aparato Genitourinario
  $("#genitourinary_system_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_genitourinary_system').attr('readonly',false)
    }
  });
  $("#genitourinary_system_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_genitourinary_system').attr('readonly',true)
      $('#exam_data_genitourinary_system').val('')
    }
  });
  //Aparato locomotor
  $("#locomotor_system_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_locomotor_system').attr('readonly',false)
    }
  });
  $("#locomotor_system_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_locomotor_system').attr('readonly',true)
      $('#exam_data_locomotor_system').val('')
    }
  });
  //Marcha
  $("#march_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_march').attr('readonly',false)
    }
  });
  $("#march_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_march').attr('readonly',true)
      $('#exam_data_march').val('')
    }
  });
  //Columna
  $("#column_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_column').attr('readonly',false)
    }
  });
  $("#column_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_column').attr('readonly',true)
      $('#exam_data_column').val('')
    }
  });
  //Miembros Superiores
  $("#superior_members_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_superior_members').attr('readonly',false)
    }
  });
  $("#superior_members_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_superior_members').attr('readonly',true)
      $('#exam_data_superior_members').val('')
    }
  });
  //Miembros Inferiores
  $("#lower_limbs_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_lower_limbs').attr('readonly',false)
    }
  });
  $("#lower_limbs_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_lower_limbs').attr('readonly',true)
      $('#exam_data_lower_limbs').val('')
    }
  });
  //Sistema Linfático
  $("#lymphatic_system_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_lymphatic_system').attr('readonly',false)
    }
  });
  $("#lymphatic_system_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_lymphatic_system').attr('readonly',true)
      $('#exam_data_lymphatic_system').val('')
    }
  });
  //Sistema nervioso
  $("#lymphatic_nervous_option_yes").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_lymphatic_nervous').attr('readonly',false)
    }
  });
  $("#lymphatic_nervous_option_no").on( 'change', function() {
    if( $(this).is(':checked') ) {
      $('#exam_data_lymphatic_nervous').attr('readonly',true)
      $('#exam_data_lymphatic_nervous').val('')
    }
  });

})
