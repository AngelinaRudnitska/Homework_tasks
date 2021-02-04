

//Task 1 - Дано 3 числа. Визначити чи є серед них додатні. (Числа генеруються випадково за довомогою генератора випадкових чисел)



let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * 100);
let number3 = Math.floor(Math.random() * 100);
// let arr = [number1, number2, number3];

function Randomly(number1, number2, number3) {
    let result = false;
    if (number1 > 0 || number2 > 0 || number3 > 0) {
        result = true;
        if (number1 > 0) {
            console.log(number1)
        }
        if (number2 > 0) {
            console.log(number2)
        }
        if (number3 > 0) {
            console.log(number3)
        }
    }
    else {
        console.log('Positive number was not found');
    }
}

// console.log(Randomly(number1, number2, number3))



//Task 2 - Дано три числа. Якщо перше число більше третього, то поміняти іх місцями. (Числа генеруються випадково за допомогою генератора випадкових чисел)



let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);
console.log(`number1 = ${num1}, number2 = ${num2}, number3 = ${num3}`);

if (num1 > num3) {
    let swap = num1;
    num1 = num3;
    num3 = swap;
    console.log(`Swap = number1 :${num1} number2 :${num2} number3 :${num3}`)
}

//Task 3 - Дано числовий масив з 10 елементів. (Числа генеруються випадково за допомогою генератора випадкових чисел)


let arr = [];
for (let i = 0; i <10; i++) {
    arr.push(Math.floor(Math.random() * 100));
    console.log(arr);
}

// - Знайти найбільший та найменший елементи масиву та поміняти їх у масиві місцями


function getRandom(min, max) {
    min = +(Math.min(...arr));
    max = +(Math.max(...arr));
    let swapMin = arr.indexOf(min);
    let swapMax = arr.indexOf(max);


    let change = arr[swapMin];
    arr[swapMin] = arr[swapMax];
    arr[swapMax] = change;

    // console.log(`Max: ${max} Min: ${min} New values: ${arr}`)
}

// - Знайти суму елементів з непарними індексами

let suma = 0;
for(let i =0; i<arr.length; i++){
    if(i%2 == 1){
        suma+=arr[i];
    }
//  console.log(suma)
}

// - Видалити останній елемент масиву

let del = arr.pop();

console.log(arr);