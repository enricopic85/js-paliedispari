//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// function ReverseString(str) {
//     return str.split('').reverse().join('')
//  }

//  let userName=prompt("inserisci un nome");
//  let reverse=ReverseString(userName);
//  if (userName===reverse) {
//      alert("la parola è palindroma")
//  } else{
//      alert("la parola non è palindroma")
//  }

 /*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
function randomNumber(min,max) {
    let random=Math.floor(Math.random() * max) + min;
    return random;
 }
let even="pari";
let odd="dispari";
let userChoice;
// do{
//     userChoice=prompt(`scegli ${even} o ${odd}`)
// }
// while (userChoice.toLowerCase() !== even.toLowerCase() || userChoice.toLowerCase() !== odd.toLowerCase()) {
//     alert("scrivi pari o dispari");
//     userChoice=prompt(`scegli ${even} o ${odd}`)
// }

let userScore=parseInt(prompt("inserisci un numero da 1 a 5"));
if (userScore > 5) {
    alert("devi inserire un numero tra 1 a 5")
}

let pcScore=randomNumber(1,5);
let sum;
function evenOdd(num1,num2) {
   sum=num1+num2;
   if (sum %2 ===0) {
       alert("la somma è pari")
   } else{
       alert("la somma è dispari")
   }
}

alert(evenOdd(userScore,pcScore));