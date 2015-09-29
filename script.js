var menuSideBar = ['Home', 'Menu', 'Next Page', 'Search'];

for(var i=0; i<menuSideBar.length; i++){ 
    var menu = document.getElementById('menu');
    var div = document.createElement('div');
    div.innerHTML = (i+1) + ' - ' + menuSideBar[i];
    menu.appendChild(div);
}