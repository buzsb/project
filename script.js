var menuSideBar = ['Home', 'Menu', 'Next Page', 'Search'];
//функція бере елементи масиву і сворює елементи меню 
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

//створює подію для елемента з присвоєнням в змінну id елмента html
var button = document.getElementById('button_html_js');
button.onclick = function (){
    alert('конопка з НТML + JS');
}
// створює подію без присвоєння id в змінну, а беручи його прямо з html елемента що є простіше і швидше
button_html.onclick = function() {
    alert( 'Клик!' );
};

//добавляє елемент допомогою методу element.addEventListener(event, handler[, phase]); 
//простий і надійний спосіб створення події для елементів(в даному випадку клік на кнопку і вивід тексту)
button_add.addEventListener('click' , function(){ alert("addEventlistener") } );
