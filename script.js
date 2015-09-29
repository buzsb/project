var menuSideBar = ['Home', 'Menu', 'Next Page', 'Search'];

function leftMenu(){
var menu = document.getElementById('menu');
for(var i=0; i<menuSideBar.length; i++){ 
    var div = document.createElement('div');
    div.className = 'div div-success';
    div.innerHTML = (i+1) + ' - ' + menuSideBar[i];
    menu.appendChild(div);
    };
};
leftMenu();