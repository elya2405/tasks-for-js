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

// 10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
for (let i = 1; i < 11; i++) {
  console.log(i ** 2);
}

// 11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
let sum = 0;
for (let i = 0; i < 26; i++) {
  sum = sum + i;
}
console.log("Сумма чисел от 1 до 25 равен " + sum);

// 12. Напишите цикл, который печатает четные числа от 0 до 20.
for (let i = 0; i < 21; i += 2) {
  console.log(i);
}

// 13. Напишите цикл, который печатает нечетные числа от 1 до 15.
for (let i = 1; i < 16; i += 2) {
  console.log(i);
}

// 14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.
let arrayOfStrings = ["Erjan", "Almaz agai", "Elaman agai"];

arrayOfStrings.unshift("Ajar", "Nestan");
arrayOfStrings.push("Aika", "Akylai", "Aelina");
console.log(arrayOfStrings);

// 15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.
let arrayOfNumbers = [24, 5, 4, 9, 12, 4];

let sumOfNumbers = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 === 0) {
    sumOfNumbers = sumOfNumbers + arrayOfNumbers[i];
  }
}
console.log(sumOfNumbers);

// 16. Создайте массив строк и объедините их в одну строку.
let line = ["I", "like", "to", "eat!"];
let unification = " ";
for (let i = 0; i < line.length; i++) {
  unification = unification + line[i] + " ";
}
console.log(unification);

// 17. Создайте массив строк ["one", "two", "three"] и переверните его.
let reverseLine = ["one", "two", "three"];
reverseLine.reverse();
console.log(reverseLine);

// 18. Создайте массив из имен (минимум 3) и выведите каждое имя.
let names = ["Radik", "Aitesh", "Aibek", "Milana"];
for (let i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}
