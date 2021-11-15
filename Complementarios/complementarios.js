/* EJERCICIOS COMPLEMENTARIOS   



// ORDENAR UN ARRAY DE OBJETOS 📚📕

// ORDEN POR MENOS PRECIO
const productsPrices = [30, 40, 10, 50, 60, 45];
productsPrices.sort((a, b) => a - b);

console.log(productsPrices);

// ORDEN POR MAYOR EDAD

const personas = [
  { name: "Mario", age: 24 },
  { name: "Manu", age: 10 },
  { name: "Dany", age: 15 },
  { name: "Alej", age: 26 },
];

personas.sort((a, b) => {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  } else {
    return 0;
  }
});

console.log(personas);

// ORDEN POR MENOR FECHA 

const dates = [
    {day: 7, month: 2, year: 2022},
    {day: 4, month: 3, year: 2022},
    {day: 6, month: 12, year: 2022},
    {day: 8, month: 6, year: 2022},
]

dates.sort((a, b) => {
    if(a.month < b.month) {
        return -1
    } 
    if(a.month > b.month) {
        return 1
    }
})

console.log(dates) */


// Desafío: Generar HTML 👇
const ul = document.getElementById("ul");

const arrayPaises = ["Canada", "Estados Unidos", "Mexico", "Sudamerica"];

arrayPaises.forEach((pais) => {
  const li = document.createElement("li");
  li.textContent = pais;
  ul.appendChild(li);
});
