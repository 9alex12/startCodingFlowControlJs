//////1)Triangulo de #. Para este ejercicio, construir un programa que forme un triangulo
//let num = "#";
//for (let i = 0; i < 5; i++) {
// console.log(num);
//num += "#";
//}

//////2)Numeros pares e impares. Hacer un programa que itere por los numeros y diga si es par o impar
// let numero=prompt("Ingrese un numero")
// for(let i=0;i<=numero;i++){
//  if(i%2===0){
//    console.log(i,"Es par");
//  }else{
//    console.log(i,"Es impar")
//  }
// }

//////3) FizzBuzz.Generar un programa que itere del 1 al 15 por cada
/////-si el num es multiplo de 3 mostrar "Fizz"
/////-si el num es multiplo de 5 mostrar "Buzz"
/////-si el num es mult de 3 y 5 mostrar "FizzBuzz"
/////-En los demas casos mostrar el numero

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
}
