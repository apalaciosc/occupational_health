$(function(){
  $("#user_role_id").on( 'change', function() {
    if ($(this).val() == 'medical') {
      $('#user_area_id').attr('disabled',false)
    }
    else{
      $('#user_area_id').attr('disabled',true)
      $('#user_area_id').val('')
    }
  });
})
