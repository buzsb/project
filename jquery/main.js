$(document).ready(function(){

   $("#add-form").on("submit", function(event){
        var $text = $("#input").val();
        $("#list").append('<p>'+ $text +'<button class="delite">Delite</button></p>');
   });
   $(document).on("click",".delite", function(){
        $(this).parent().remove();
   });
});
