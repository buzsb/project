$(document).ready(function(){

    $("#input-form").on("submit", function(){
        var num = $("#input").val();

        // перевірка на число
        if( isNaN(num) ){
            alert("Not a Number");
            return;
        }

        for(var i=1; i<=num; i++){
            if(i%3==0 && i%5==0){
                var newElement = $("<a>").addClass("fizbazz").text('fizbuz');
            }
            else if(i%3 ===0){
                var newElement = $("<div></div>").addClass("fiz").text('fiz');
            }
            else if (i%5 === 0){
                var newElement = $("<div></div>").addClass("bazz").text('bazz');
            }
            else {
                var newElement = $("<div></div>").addClass("number").text(i);
            }

            $("#fizbazz").append(newElement);
        };


    });

});