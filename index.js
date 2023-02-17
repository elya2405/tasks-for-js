// 1. Напишите функцию, которая выводит ваше имя и фамилию.
function myName(name) {
  console.log("My name is " + name);
}
myName("Eleonora");

function mySurname(surname) {
  console.log("My surname is " + surname);
}
mySurname("Kanybekova");

// 2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
let pi = 3.14;
function coneVolume(height, radius) {
  console.log("Объем конуса " + (height * pi * radius ** 2) / 3);
}
coneVolume(5, 4);
