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
