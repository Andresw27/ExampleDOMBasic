const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.querySelector('.parrafito');
const pid=document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);


console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//convierte todo a codigo html
h1.innerHTML='Hoal mundo';
//convierte todo a texto
h1.innerText='Hoal mundo';
//ayuda a leer alguno de los elementos que esten en nuestro atributo
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

//añadir un valor a la etiqueta
input.value=1234;
input.placeholder="Infese un numero";

//Creamos una imagen con document.createElement
const img = document.createElement('img');
//A esa imagen le pusimos los atributos
img.setAttribute('src','https://static.platzi.com/media/avatars/avatars/bleiks_bdd662c5-fa5b-4385-a79f-58ef0efc986c.jpg');
console.log(img);
//insertamos la imagen dentro de un contenedor que ya existia en html
pid.appendChild(img);