/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare vari strumenti per farlo:
`append()` oppure
`.innerHTML`
`.insertAdjacentHTML()`
A voi la scelta

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
*/

/* 
TOOLS
- let / const
- for cycle
- % division reminder
- console.log
*/

const containerElement = document.createElement("div");
const rowElement = document.createElement("div");
const headingElement = document.createElement("h1");

containerElement.classList.add("container");
rowElement.classList.add("row", "justify-content-center", "mb-5");

headingElement.innerText = "FizzBuzz Game";
headingElement.classList.add("display-1", "fw-bold", "text-center", "my-4");

document.body.prepend(containerElement);
containerElement.append(headingElement);
containerElement.append(rowElement);

for (let i = 1; i <= 100; i++) {

  const colElement = document.createElement("div");
  colElement.classList.add("col-5", "col-md-3", "ms_col_lg_1_10", "d-flex", "justify-content-center", "align-items-center", "fw-bold", "fs-5", "square");

  if (i % 3 === 0 && i % 5 === 0) {
    colElement.classList.add("fizzbuzz");
    colElement.innerText = "FizzBuzz";
  } else if (i % 3 === 0) {
    colElement.classList.add("fizz");
    colElement.innerText = "Fizz";
  } else if (i % 5 === 0) {
    colElement.classList.add("buzz");
    colElement.innerText = "Buzz";
  } else {
    colElement.innerText = i;
  }

  rowElement.append(colElement);

}