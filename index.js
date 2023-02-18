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
  //return string.length;
}
stringLength("something");

// 4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is even");
  } else if (num % 2 === 1) {
    console.log(num + " is odd");
  } else {
    console.log(num + " is not number");
  }
}
checkEvenOrOdd(11);

// 5. Напишите функцию, которая возвращает квадрат числа.
function squareOfNumber(num) {
  console.log("Квадрат этого числа равен " + num ** 2);
}
squareOfNumber(2);
