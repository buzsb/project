
var menuSideBar = ['Home', 'Menu', 'Next Page', 'Search'];

for(var i=0; i<menuSideBar.length; i++){ 
    var div = document.getElementById('menu');
    div.innerHTML = i + ' - ' + menuSideBar[i];
    document.body.appendChild(div);
}