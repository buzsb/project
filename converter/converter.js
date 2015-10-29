$(document).ready(function(){

    $.ajax({
        url: "https://currency-exchange.p.mashape.com/listquotes",
        headers:{
        "X-Mashape-Key": "T1UHVGRyPKmshp2Zlc73yNxqvupzp1QNmMTjsnoASaKgZ5qEXE"
        },
        success: function(data){
             var currency = JSON.parse(data);
             
                for(var i = 0; i < currency.length - 1; i++){
                    var currencyList1 = $("<option></option>").attr("value", currency[i]).text(currency[i]);
                    $("#drop-down-list-1").append(currencyList1);
                    var currencyList2 = $("<option></option>").attr("value", currency[i]).text(currency[i]);
                    $("#drop-down-list-2").append(currencyList2);
                };
            }
    });

    $("#convert-form").on("submit", function(){
        var valueDropList1 = $("#drop-down-list-1").val();
        var valueDropList2 = $("#drop-down-list-2").val();
        var inputValue = $("#input").val();

        $.ajax({
            url: "https://currency-exchange.p.mashape.com/exchange",
            data: {
                from: valueDropList1,
                q: inputValue,
                to: valueDropList2
            },
            headers: {
                "X-Mashape-Key": "T1UHVGRyPKmshp2Zlc73yNxqvupzp1QNmMTjsnoASaKgZ5qEXE"
            },

            success: function(data){
                var result = JSON.parse(data);
                $("#result").append(result);
            }
        });

    });
});