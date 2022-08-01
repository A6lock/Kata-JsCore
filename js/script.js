'use strict';

//const text = `Some
//simple multiline
//text`;

//function wrapInParagraph(str) {
//    const arrayStr = str.split('\n');
//    let arrayWrap = [];
//    arrayStr.forEach(word => {
//        arrayWrap.push(`<p>${word}</p>`);
//    });
//    return arrayWrap.join('\n');
//}

//console.log(wrapInParagraph(text));
/*
Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, 
в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке.

Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и 
маленькая должны считаться одинаковой буквой.
*/

//const lettersCount = (str) => {
//	let lowerStr = str.toLowerCase();

//	let obj = {};

//	lowerStr.split('').forEach(char => obj[char] = lowerStr.split('').filter(item => item === char).length);

//	return obj;
//};

//console.log(lettersCount('eeerrrtttyyyuuuiiiooopppe'));



//let arr = [1, 2, 3, 4, 5];

//const moveToStart = (arr, n) => {

//    let newArr = [...arr].splice((arr.length - n), n);
//    newArr.push(...arr.slice(0, arr.length - n));

//    return newArr;
//};

//console.log(moveToStart(arr, 10));
//console.log(arr);



//Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.

//const data1 = [];

//const hasArrays = (arr) => {

//    let hasArray = false;

//    arr.filter(element => {
//        if (Array.isArray(element)) {
//            hasArray = true;
//        }
//    });

//    return hasArray;
//};

//console.log(hasArrays(data1));


//Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого аргумента и строку "even" или "odd" в качестве второго. Функция должна вернуть новый массив, состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных, если было передано "odd".

//Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".

//const data = [1, 2, 3, 4, 5, 6];

//const getNumbersByParity = (data, parity) => {

//    let arr = [...data];

//    if (parity === 'even') {
//        arr = arr.filter(element => element % 2 === 0);
//    } else {
//        arr = arr.filter(element => element % 2 === 1);
//    }

//    return arr;
//};

//console.log(getNumbersByParity(data, 'even'));


//Реализуйте (с использованием рекурсии) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

//function sequenceSum(begin, end) {
//    if (begin > end) {
//        return NaN;
//    } else {
//        if (begin === end) {
//            return begin;
//        } else {
//            return begin += sequenceSum(begin + 1, end);
//        }
//    }
//}

//console.log(sequenceSum(2, 6));


//Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

const chek1 = {
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
};

const chek2 = ['1', '2', ['3']];


function getStringCount(object) {
    let totalString;

    if (Array.isArray(object)) {
        for (let el of object) {
            if (typeof el === 'string') {
                totalString += 1;
            } else if (typeof el === 'object') {
                getStringCount(el);
            }
        }
    } else {
        getStringCount(Object.values(object));
    }
    return totalString;
}




console.log(getStringCount(chek2));