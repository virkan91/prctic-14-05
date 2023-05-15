



//////   14-05-23



// 1. Кадров в секунду

// function frames(minutes, fps) {
//     return (minutes * fps) * 60;
// }
// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));


// 2. Исправьте код на вкладке кода, чтобы пройти это испытание (только синтаксические ошибки). 
//Посмотрите на примеры ниже, чтобы получить представление о том, что должна делать функция.


    // function maxNum(n1,n2) {
    // 	if (n1 > n2) {
    // 	  return n1
    // 	}
    // 	return n2
    // }


// 3.Учитывая два аргумента, вернуть массив, содержащий эти два аргумента.

// function makePair(num1, num2) {
// 	let arr = [num1, num2];
// 	return arr;
// }
// console.log(makePair(512124, 215));


// 4. Создайте функцию, которая возвращает значение true, если целое число без остатка делится на 5 и falseв противном случае.

    // function divisibleByFive(n) {
    // 	if(n % 5 == 0){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(divisibleByFive(37));


// 5.Создайте функцию, которая возвращает значение true, если строка пуста и falseв противном случае.

    // function isEmpty(s) {
    // 	if(s === ""){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(isEmpty(""));
    // console.log(isEmpty(" "));
    // console.log(isEmpty("a"));


// 6.Создайте функцию, которая принимает целое число и возвращает значение, 
//trueесли оно делится на 100, в противном случае возвращает значение false.

    // function divisible(num) {
    // 	if(num % 100 == 0){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(divisible(1000));



// 8. Учитывая два целых числа aи b, вернуть, trueесли aможно разделить на b. Вернуть falseв противном случае.

    // function dividesEvenly(a, b) {
    // 	if (Number.isInteger(a / b)) {
    //     return true;
    //   }
    //   return false;
    // }


// 9. Создайте функцию, которая принимает строку и возвращает ее как целое число.

    // function stringInt(str) {
    //     let str = "";
    //     let num = parseInt(str);
    //     return num;
    // }
    // console.log(stringInt(6));

// 10. Минимум I: если логическое значение, то логическое значение

    // function isEven(n) {
    // 	if (n % 2 === 0) {
    // 		return true;
    // 	}
    // 		return false;    
    // }

 
// 13. Перевернуть массив
// Напишите функцию для обращения массива.

    // function reverse(arr) {
    // 	let rev = arr.reverse();
    // 	return rev;
    // }
    // console.log(reverse([1, 2, 3, 4]));


// 14.  Использование стрелочных функций

    // let arrowFunc = x => x;


// 15.Вернуть строку как целое число

    // function stringInt(str) {
    // 	return parseInt(str);
    // }


// 16. Создайте функцию, которая вычисляет площадь прямоугольника. Если аргументы недействительны, ваша функция должна вернуть -1.

    // function area(h, w) {
    //     let rez = h * w 
    //    if(h > 0 && w > 0){
    //        return rez
    //    }else{
    //        return -1
    //    }
    // }
    // console.log(area(3, 4));

// 117 Объединить имя и фамилию в одну строку

    // function concatName(firstName, lastName) {
    // 	return `${lastName}, ${firstName}`;
    // }
    // console.log(concatName("First", "Last"));
    // console.log(concatName("Doe", "John"));


// 18.Задача состоит в том, чтобы попытаться исправить этот ошибочный код, 
//учитывая входные данные trueи файлы false. См. примеры ниже для ожидаемого результата.

    // function has_bugs(buggy_code) {
    // 	if (buggy_code) {
    // 		return "sad days";
    // 	}
    // 		return "it's a good day";
    // }
    // console.log(has_bugs(true));
    // console.log(has_bugs(false));



// 19. Создайте функцию, которая возвращает значение, trueкогда num1равно num2; в противном случае возврат false.

    // function isSameNum(num1, num2) 
    // {
    // 	if(num1 === num2){
    // 	return true;
    // 	}
    // 	return false;
    // }

    // console.log(isSameNum(4, 8));
    // console.log(isSameNum(2, 2));
    // console.log(isSameNum(2, "2"));


// 20.

// function longestTime(h, m, s){
//     soat = h * 3600
//     min = m * 60

//     if(soat > min && soat > sec){
//         return soat
//     }
//     else if(min > soat && min > s){
//         return min
//     }
//     return s

// }

