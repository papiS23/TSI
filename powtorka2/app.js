const films = [
  "iron man",
  "spider man",
  "doctor strange",
  "hulk: the incredible",
];

//MAP
//kopia tablicy z uzuciem funkcji dla kazdej wartosci
const allFilms = films.map(function (film) {
  return film.toUpperCase();
});

//FIND
//zwraca pierwsza wartosc spelniajaca warunek
const specyficOne = films.find(function (film) {
  return film.startsWith("hule");
});

//FILTER
//zwraca tablice z wartosciami spelniajacymi warunek
const filteredOnes = films.filter(function (film) {
  return film.includes("a");
});

//SOME AND EVERY
const checkNames = films.every(function (film) {
  return film.includes("hul");
});

console.log(checkNames);
