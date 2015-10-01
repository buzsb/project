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
function handler(){
    alert('addEventlistener');
}
button_add.addEventListener('click' , handler );

//видаляє подію виводу alert після кліку, через певний проміжуток часу
setTimeout(function(){
    button_add.removeEventListener('click' , handler);
}, 10000);

//спосіб "делегирования" - коли використовують один обробник для сожих дій на онотипних елементах
function Menu(elem){
    this.save = function(){
        alert( 'Сохраняю' );
    };
    this.load = function(){
        alert('Загружаю');
    };
    this.search = function(){
        alert('Поиск');
    };

    var self = this;

    elem.onclick = function(e){
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action){
            self[action]();
        }
    };
}
new Menu(top_menu);

//приклад роботи алгоритму Drag'n'Drop докладніше на 
// https://learn.javascript.ru/drag-and-drop#алгоритм-drag-n-drop
var drag = document.getElementById('drag-button');
drag.onmousedown = function(e){
    drag.style.position = 'absolute';
    moveAt(e);
    
    document.body.appendChild(drag);
 
    drag.style.zIndex = 1000;

    function moveAt(e) {
        drag.style.left = e.pageX - drag.offsetWidth / 2 + 'px';
        drag.style.top = e.pageY - drag.offsetHeight / 2 + 'px';
  }

    document.onmousemove = function(e) {
        moveAt(e);
    }

    drag.onmouseup = function() {
        document.onmousemove = null;
        drag.onmouseup = null;
  }

    drag.ondragstart = function() {
        return false;
    }
}
