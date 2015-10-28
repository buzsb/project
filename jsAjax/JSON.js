$(document).ready(function(){

    $("#get").on("click", function(){
        $.get("http://random.cat/meow", function(data){
            var img = $("<img>").attr({src: data.file, heigth: 500, width: 500 });
            $("#cat").append(img);
        });
    });
});