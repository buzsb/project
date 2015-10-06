var addItems = function(){

    if(!input.value){
        alert('Ви нічого не ввели');
        return ;
    };

    var items = document.getElementById('items');
    var div = document.createElement('div');

    div.innerHTML = input.value;
    items.appendChild(div);

}
