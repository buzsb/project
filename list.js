var addItems = function(){
    var data = input.value;

    var items = document.getElementById('items');
    var div = document.createElement('div');
    div.innerHTML = div + data.innerHTML;
    items.appendChild(div);
}
