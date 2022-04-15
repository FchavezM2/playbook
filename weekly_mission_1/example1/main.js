// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.make = 'Ford'; // El punto make model y year es el titulo o llave de lo que se ingresara en el string
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar) // Imprimiendo lo que trae dentro el objeto

// 2. Declaración de un objeto con variables locales y públicas
const myModule = (() => {
// Variables de contexto local
 const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
 const privateBar = [1,2,3,4]
 const baz = "Soy un valor que va a ser expuesto"

 console.log(privateFoo)//Estos  consol.log solo los podemos ver dentro de la funcion no afuera por el motivo de que son private
 console.log(privateBar)
// Variable para guardar las variables locales
 const exported = {
   publicFoo: "Valor público, pueden verme desde donde me llamen",
   publicBar: "Otro valor público",
   	publicBaz: baz
 }

// Exposición de variables locales
 return exported
})()

console.log(myModule)