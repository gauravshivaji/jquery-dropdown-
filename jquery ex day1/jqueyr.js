
// $(document).ready(function(){
//     $("#check").click(function(){
//         $(":checkbox").prop("checked", true);
//     });
//     $("#uncheck").click(function(){
//         $(":checkbox").prop("checked", false);
//     });
// });


// $('.product-list').on('change', function() {
//     $('.product-list').not(this).prop('checked', false);  
// });







  
  $("#myTable tr").click(function() {
    $(this).toggleClass("highlight");


    $('#txtName').val($(this).find('#attrName').text());

    $('#marks').val($(this).find('#attrMark').text());
    var hobbies_value=$(this).find('td:nth-child(3)').text();
    var splitHobbies=hobbies_value.split("/");
    $("input[name='hobby']").prop("checked",false);
    var temp=[];
    for(i=0;i<splitHobbies.length;i++){
        if(splitHobbies[i]=="travel")
        temp.push("#ch1");
        if(splitHobbies[i]=="cycle")
        temp.push("#ch2");
        if(splitHobbies[i]=="paint")
        temp.push("#ch3");
        if(splitHobbies[i]=="cook")
        temp.push("#ch4");
    }
    for(i=0;i<temp.length;i++)
    {
        $(temp[i]).prop("checked",true);

    }
});




$(document).ready(function(){
      $("#checkall").change(function(){
          $(".check").prop("checked", $(this).prop('checked'));
          
      });
        $(".check").change(function(){
            
            if($(this).prop==("checked")==false){
               
        $("#checkall").prop("checked",false);
          }
            if($(".check:checked").length==$(".check").length){
                $("#checkall").prop("checked", true);
            }
    });
});


$(".delete-row").click(function() {
   $(this).parents("tr").remove();
});


$('.changecontent').on('dblclick',function(){
    var txt=$(this).text();
    $(this).empty();
    $(this).append("<input type='text' id='editText' onblur ='inputToText()' value="+txt+">" );
    $("#editText").focus();
})

function inputToText(){
    var value = $('#editText').prop('value');
    $('#editText').parent().append(value);
    $('#editText').remove();
}


