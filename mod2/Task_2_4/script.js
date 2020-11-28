/* 1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа. */
let str = "924309099";
numberByDigit = str.split('');
let n = numberByDigit.length;
var sum = 0;
i = 0;
while (i < n) {
    numberByDigit[i] = parseInt(numberByDigit[i]);
    sum = sum + numberByDigit[i];
    i++;
};
console.log(sum);

/* 2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку. */
let str2 = "Погода сегодня прекрасная";
let symbol = "с";
console.log(str2.replace(new RegExp(symbol, "ig"), symbol.repeat(2)));

/* 3. Проверить что введенный пароль удовлетворяет 
следующим условиям сложности:
- длинна от 9 символов;
- содержит обязательно английские буквы верхнего и нижнего регистра;
- содержит более двух цифр;
- содержит обязательно один из неалфавитных символов (например, !, $, #, %).*/
let psw = prompt("Введите сложный пароль с цифрами, символами и английскими буквами");
let len_regexp = /(.+){9}/i; // - длина от 9 символов;
let ang_small_regexp = /[a-z]+/; // - содержит обязательно английские буквы верхнего и нижнего регистра;
let ang_big_regexp = /[A-Z]+/; // - содержит обязательно английские буквы верхнего и нижнего регистра;
let number_regexp = /[0-9].*[0-9]/g; // - содержит более двух цифр;
let symbol_regexp = /[!\$#%]+/; // - содержит обязательно один из неалфавитных символов (например, !, $, #, %).
if (len_regexp.test(psw) == 0) {
    alert("Введите пароль не менее 9 символов");
};
if (ang_small_regexp.test(psw) == 0) {
    alert("Должна быть хотя бы одна английская буква нижнего регистра")
}
if (ang_big_regexp.test(psw) == 0) {
    alert("Должна быть хотя бы одна английская буква ВЕРХНЕГО регистра")
}
if (number_regexp.test(psw) == 0) {
    alert("Должно быть хотя бы 2 цифры")
}
if (symbol_regexp.test(psw) == 0) {
    alert("Должен быть обязательно один из неалфавитных символов (например, !, $, #, %)")
}
console.log(
    len_regexp.test(psw),
    ang_small_regexp.test(psw),
    ang_big_regexp.test(psw),
    number_regexp.test(psw),
    symbol_regexp.test(psw)
);
console.log(
    len_regexp.test(psw) &&
    ang_small_regexp.test(psw) &&
    ang_big_regexp.test(psw) &&
    number_regexp.test(psw) &&
    symbol_regexp.test(psw)
);
