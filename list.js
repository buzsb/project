var addItems = function(){

    var items = document.getElementById('items');
    var div = document.createElement('div');

    div.innerHTML = input.value;
    items.appendChild(div);
}
