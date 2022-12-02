var i=0;
var txt='Bienvenido a Código Web';
var speed = 80;
function typeWrite() {
    if (i<txt.length) {
        document.getElementById('lead').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
}
        typeWrite()
