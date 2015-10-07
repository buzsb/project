var addItems = function(){

    if(!input.value){
        alert('Ви нічого не ввели');
        return ;
    };

    var items = document.getElementById('items');
    var div = document.createElement('div');
    var a = document.createElement('a');
    a.innerHTML = 'delete';
    a.href = '#';
    a.className = "js-delete-button";
    a.onclick = deleteItem;

    div.innerHTML = input.value;
    div.appendChild(a);
    items.appendChild(div);
}

function deleteItem(event){
    var items = document.getElementById('items');
    items.removeChild(event.target.parentElement);
}