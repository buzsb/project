$(document).ready(function(){

   $("#add-form").on("submit", function(event){
        var text = $("#input").val();

        if (!text){
            alert('You add empty item');
            return;
        };

        var deleteButton = $("<button></button>").addClass("delete").text("X");
        var addP = $("<p></p>").addClass("items").text(text);

        $("#list-items").append(addP);
        addP.append(deleteButton);
        $("#input").val("");
   });
   
   $(document).on("click",".delete", function(){
        $(this).parent().remove();
   });
});
