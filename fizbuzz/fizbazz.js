$(document).ready(function(){

    $("#input-form").on("submit", function(){
        var num = parseInt($("#input").val() );
        var startNum = parseInt( $('#start-input').val() );
    
        // перевірка на число
        if( isNaN(num) || isNaN(startNum) ){
            alert("Not a Number");
            return;
        };

        if (startNum >= num){
            alert("Start number is bigger than end number");
            return;
        };

        $("#fizbazz > *").remove();

        for(var i=startNum; i<=num; i++){
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