var current = document.getElementById('current');
var slike = document.getElementsByClassName('thumb');

//dodjeljujemo sad event da slike reaguju na klik misa

for(var i=0; i<slike.length; i++) {
    slike[i].addEventListener('click', display);
}

function display() {
    var sl = this.getAttribute('src');
    current.setAttribute('src', sl);
//ovoj funkciji postavljamo atribut 'src'...to je atribut koji se odnosi na slike, jer zelimo da klikom na neku sliku ona postane trenutna. 
}