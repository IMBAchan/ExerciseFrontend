//  ***  exercise1  ***  
// Спробуйте відгадати які відповіді ви отримаєте, якщо запустите це в
// Console у Google Chrome. Як тільки ви отримаєте відповідь на запитання
// перевірити їх, скопіювавши їх і запустивши в консолі, рядок за рядком


//Розв'яжіть усі вирази наведені нижче:
// Наприклад 5+"34" // 534

5 + "34"
// Відповідь: "534"
5 - "4"
// Відповідь: 1
10 % 5
// Відповідь: 0
5 % 10
// Відповідь: 5
"Java" + "Script"
// Відповідь: "JavaScript"
" " + " "
// Відповідь: " "
" " + 0
// Відповідь: " 0"
true + true
// Відповідь: 2
true + false
// Відповідь: 1
false + true
// Відповідь: 1
false - true
// Відповідь: -1
3 - 4
// Відповідь: -1
"Bob" - "bill"
// Відповідь: NaN


//Розв'яжіть усі вирази наведені нижче:
5 >= 1
// Відповідь: true
0 === 1
// Відповідь: false
4 <= 1
// Відповідь: false
1 != 1
// Відповідь: false
"A" > "B"
// Відповідь: false
"B" < "C"
// Відповідь: true
"a" > "A"
// Відповідь: true
"b" < "A"
// Відповідь: false
true === false
// Відповідь: false
true != true
// Відповідь: false


// Створіть рядок (string): "Привіт! На вулиці "сонячно"" (використовуючи знак +)
var myString = "Привіт! На вулиці " + "\"сонячно\"";
console.log(myString);


//  ***  exercise2  ***  
//Розв'яжіть усі вирази наведені нижче:

// додайте змінну "firstName" та "lastName"
//таким чином, щоб вийшло Ваше повне ім'я
var firstName = "Явдюк";
var lastName = "Тимофій";
var fullName = firstName + " " + lastName;
fullName;

// Розв'яжіть завдання. Скільки буде a + b?
var a = 34;
var b = 21;
a = 2;
a + b; //23

// Чому дорівнює c?
var c;
// Відповідь: undefined

// Розробіть кальулятор, використовуючи prompt() та змінні. Розробіть программу, яка виконує наступне:
// 1. Запитує користувача про перший номер
// 2. Зберігає цей номер
// 3. Запитує користувача про другий номер
// 4. Зберігає другий номер та дає відповідь з сумою двох чисел за допомогою alert()
var firstNumber = prompt("Введіть перший номер:");
firstNumber = parseFloat(firstNumber);
var secondNumber = prompt("Введіть другий номер:");
secondNumber = parseFloat(secondNumber);

var result = firstNumber + secondNumber;
alert("Результат: " + result);


//Додатково:
var firstNumber = parseFloat(prompt("Введіть перший номер:"));
var secondNumber = parseFloat(prompt("Введіть другий номер:"));

var operation = prompt("Виберіть операцію: віднімання, додавання, ділення та множення");

var result;
if (operation === "віднімання") {
    result = firstNumber - secondNumber;
    alert("Результат: " + result);
} else if (operation === "додавання") {
  result = firstNumber + secondNumber;
  alert("Результат: " + result);
} else if (operation === "ділення") {
  result = firstNumber / secondNumber;
  alert("Результат: " + result);
} else if (operation === "множення") {
  result = firstNumber * secondNumber;
  alert("Результат: " + result);
} else {
  alert("Будь ласка, виберіть ділення, множення або віднімання.");
}