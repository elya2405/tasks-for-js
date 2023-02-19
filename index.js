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
checkEvenOrOdd(6);
checkEvenOrOdd("nice");

// 5. Напишите функцию, которая возвращает квадрат числа.
function squareOfNumber(num) {
  return num ** 2;
}
console.log("Квадрат этого числа равен " + squareOfNumber(2));

// 6. Напишите функцию, которая возвращает корень числа.
function rootOfNumber(num) {
  return num ** (1 / 2);
}
console.log("Корень этого числа равен " + rootOfNumber(25));

// 7. Напишите функцию, которая возвращает периметр пятиугольника.
function perimetrOfPentagon(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(
  "Периметр пятиугольника равен " + perimetrOfPentagon(1, 2, 3, 4, 5)
);

// 8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
for (let i = 0; i < 34; i += 3) {
  console.log(i);
}

// 9. Напишите цикл, вычисляющий факториал числа 8. (8!)
let factorial = 1;
for (let i = 1; i < 9; i++) {
  factorial = factorial * i;
}
console.log("Факториал числа 8 равен " + factorial);
