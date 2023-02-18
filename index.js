// 1. Напишите функцию, которая выводит ваше имя и фамилию.
function myNameAndSurname(name, surname) {
  console.log("My name is " + name + surname);
}
myNameAndSurname("Eleonora ", "Kanybekova");

// 2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
let pi = 3.14;
function coneVolume(height, radius) {
  console.log("Объем конуса " + (height * pi * radius ** 2) / 3);
}
coneVolume(5, 4);

// 3. Напишите функцию, которая принимает строку и возвращает ее длину.
function stringLength(string) {
  console.log("Длина строки равна " + string.length);
}
stringLength("something");
