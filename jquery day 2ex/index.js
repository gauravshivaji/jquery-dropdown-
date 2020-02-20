var myOptions = {
    val1 : 'Blue',
    val2 : 'Orange',
    val3 : 'running',
    val4 : 'jogging',
    val5 : 'writring',
    val6 : 'write'
};
var mySelect = $('.country');
$.each(myOptions, function(val, text) {
    mySelect.append(
        $('<option class="list-items"></option>').val(text).html(text)
    );
});



$(".country").on('change',function(){
    var txt=$(this).val();
    $('.country option[value='+txt+']').remove();
     $("#mydiv").append("<span id="+txt+">"+txt+"<button type='button' onclick=remove('"+(String(txt))+"')>X</button>")
    
     });



  function remove(txt){
      $('#'+txt+'').remove();
      $('.country').append("<option value= "+txt+"   class='list-items'>"+txt+"</option>")
      $('.country').focus();
  } 
    
      
       
  $('#add-items').on('click',function(){
      var txt=$('#hobby').val();
      $('#hobby').prop('value','');
      $('.country').append("<option value="+txt+" class =='items'>"+txt+"</option>");
  })