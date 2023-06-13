const h1=document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#calcular');
const pResult= document.querySelector('#resultado')

// form.addEventListener('submit',sumarInput);

// function sumarInput(event){
//     console.log({event});
//     event.preventDefault();
//  const sumaInputs= parseInt(input1.value) + parseInt(input2.value);
//  pResult.classList.add('verde');
//  pResult.innerText="Resultado : "+ sumaInputs;

// }

btn.addEventListener('click',sumarInput);

function sumarInput(event){
    console.log({event});
  
 const sumaInputs= parseInt(input1.value) + parseInt(input2.value);
 pResult.classList.add('verde');
 pResult.innerText="Resultado : "+ sumaInputs;

}