var div = document.getElementById('text');    

var div2 = document.createElement('div');
div2.innerHTML = div.innerHTML + 'more text';

document.body.appendChild(div2);

for(var i=1; i<=3; i++){
   var divs = document.createElement('div');
   divs.innerHTML = i + ' - ' + div.innerHTML;
   document.body.appendChild(divs);
};